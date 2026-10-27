// Lab № 005: the in-browser model runs here, off the main thread. Created only after the
// visitor clicks "load the model", so web-llm never ships in the page bundle.
import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg: MessageEvent) => handler.onmessage(msg);
