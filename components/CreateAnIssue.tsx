import Link from "next/link";
import React from "react";

export default function CreateAnIssue() {
  return (
    <div className="grid w-full h-screen px-10 sm:px-20 place-items-center dark:text-gray-200">
      <p>
        Something went wrong. Let me know by{" "}
        <Link
          href="https://github.com/saiemgilani/saiemgilani.com/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-blue-500 "
        >
          creating an issue
        </Link>{" "}
        on GitHub.
      </p>
    </div>
  );
}
