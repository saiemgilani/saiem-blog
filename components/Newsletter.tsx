import { useRef, useState } from "react";
import { ToastContainer, toast, useToast } from "react-toastify";
import { AiOutlineSend } from "react-icons/ai";
import { useDarkMode } from "@context/darkModeContext";

export default function Newsletter() {
  const { isDarkMode } = useDarkMode();
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [emailInput, setEmailInput] = useState("");

  async function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailInput) {
      return toast.error("Email is required");
    }

    const res = await fetch(`/api/mailchimp`, {
      body: JSON.stringify({
        email: emailInput,
        status: "subscribed",
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage("Your e-mail address is invalid or you are already subscribed!")
      return
    }

    setEmailInput("")
    setError(false)
    setSubscribed(true)
    setMessage("Successfully! 🎉 You are now subscribed.")
  }

  return (
    <>
      <div className="flex flex-col w-full gap-4 p-4 my-10 bg-white rounded-lg font-barlow ring-2 ring-gray-400 dark:bg-black dark:border-neutral-600 print:hidden">
        <h2 className="text-2xl font-bold dark:text-white !my-0">
          Subscribe to the PR Review's Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 font-medium !my-0">
          I write monthly to quarterly posts on sports analytics, tech, and software development that will
          improve your productivity. I have no interest in spamming you.
        </p>

        <form className="relative w-full"  onSubmit={subscribe}>
          <label className="sr-only" htmlFor="email-input">
              Email address
          </label>
          <input
            autoComplete="email"
            className="px-4 py-2.5 rounded-lg text-lg bg-gray-200 dark:bg-darkSecondary outline-none border-0 w-full placeholder:text-gray-700 dark:placeholder:text-gray-400 dark:text-gray-300"
            id="email-input"
            type="email"
            name="email"
            placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required={true}
            disabled={subscribed}
          />

          <button
            className="absolute right-0 top-0 bottom-0 px-4 m-[3px] bg-white dark:text-white dark:bg-neutral-600/40   rounded-md font-medium font-inter transform duration-200 active:scale-90 select-none"
            type="submit"
            disabled={subscribed}
          >
            <div className="relative flex items-center gap-2 !my-0">
              <AiOutlineSend className="text-xl" />
              <p className="hidden sm:inline-flex !my-0">
                {subscribed ? 'Thank you!' : 'Sign up'}
              </p>
            </div>
          </button>
        </form>
        {error && (
          <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
        )}
      </div>

      <ToastContainer
        theme={isDarkMode ? "dark" : "light"}
        style={{ zIndex: 1000 }}
        autoClose={3000}
      />
    </>
  );
}
