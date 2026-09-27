"use client";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRunGate, RunGatePrompt, DAILY_QUOTA } from "@components/lab/RunGate";
import { ExampleOutput } from "@components/lab/ExampleOutput";
import { unitsFor } from "@lib/lab/llm";

export type AskTheRegistryExample = { transcript: { role: "user" | "assistant"; text: string }[] };

const inputClass = "min-w-0 flex-1 border border-rule bg-page px-2 py-1 font-mono text-xs text-ink outline-none";
const buttonClass = "shrink-0 bg-brand px-2.5 py-1 text-on-brand disabled:opacity-60";

// Raw non-2xx response bodies (e.g. `{"reason":"daily"}`) land verbatim in `error.message` --
// see createUIApiCallError in the installed ai@7 DefaultChatTransport (it uses response.text()).
function mapError(message: string): string {
  if (message.includes("daily")) return `quota used up for today (${DAILY_QUOTA}/day) — back tomorrow`;
  if (message.includes("spend_cap")) return "the lab's monthly budget is spent — back next month";
  if (message.includes("paused")) return "demo paused";
  return "the lab is unreachable right now";
}

/** Best-effort unit display: only renders when a message carries usage in its metadata (no
 *  plumbing failure if it doesn't -- the settle already happened server-side regardless). */
function unitsLabel(message: { metadata?: unknown }): string | null {
  const usage = (message.metadata as { usage?: { inputTokens?: number; outputTokens?: number } } | undefined)?.usage;
  if (!usage) return null;
  const n = unitsFor(usage);
  return `≈ ${n} unit${n === 1 ? "" : "s"}`;
}

function MessageParts({ parts }: { parts: { type: string; text?: string; output?: unknown }[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (part.type === "text") return <p key={i}>{part.text}</p>;
        if (part.type.startsWith("tool-")) {
          const n = Array.isArray(part.output) ? part.output.length : null;
          return <p key={i} className="font-mono text-[11px] text-muted">{n === null ? "listing sources…" : `listed ${n} source${n === 1 ? "" : "s"}`}</p>;
        }
        return null;
      })}
    </>
  );
}

function Transcript({ turns }: { turns: { role: string; text: string }[] }) {
  return (
    <div className="space-y-2">
      {turns.map((t, i) => (
        <p key={i}><span className="font-mono text-[11px] uppercase text-muted">{t.role} </span>{t.text}</p>
      ))}
    </div>
  );
}

export function AskTheRegistry({ example }: { example: AskTheRegistryExample }) {
  const { state } = useRunGate("ask-the-lab");
  const [transport] = useState(() => new DefaultChatTransport({ api: "/api/lab/ask-the-lab/chat" }));
  const { messages, sendMessage, status, error } = useChat({ transport });
  const [input, setInput] = useState("");
  const busy = status === "submitted" || status === "streaming";
  const signedIn = state?.kind === "in";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    await sendMessage({ text });
  }

  const statusText = busy ? "thinking…" : error ? mapError(error.message) : "";

  return (
    <div>
      {signedIn ? (
        <div className="mt-6 space-y-2">
          {messages.map((m) => (
            <div key={m.id}>
              <span className="font-mono text-[11px] uppercase text-muted">{m.role} </span>
              <MessageParts parts={m.parts as { type: string; text?: string; output?: unknown }[]} />
              {m.role === "assistant" && unitsLabel(m) && <p className="font-mono text-[11px] text-muted">{unitsLabel(m)}</p>}
            </div>
          ))}
          <form onSubmit={onSubmit} className="flex gap-2">
            <label className="sr-only" htmlFor="ask-the-lab-input">ask a question</label>
            <input
              id="ask-the-lab-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={inputClass}
              placeholder="what data can you see?"
            />
            <button type="submit" disabled={busy} aria-busy={busy} className={buttonClass}>ask</button>
          </form>
        </div>
      ) : (
        <ExampleOutput label="a canned exchange">
          <Transcript turns={example.transcript} />
        </ExampleOutput>
      )}
      <RunGatePrompt state={state} />
      <p role="status" className="mt-3 font-mono text-[11px] text-muted">{statusText}</p>
    </div>
  );
}
