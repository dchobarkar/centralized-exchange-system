"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { SecondaryButton } from "./Button";

export const Hero = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="px-4 py-8 md:py-16 lg:py-24">
      <div className="text-4xl sm:text-5xl md:text-6xl font-medium text-center">
        <span>The Indian Cryptocurrency</span>
        <span className="text-blue-500 pl-2 md:pl-4">Revolution</span>
      </div>

      <div className="flex justify-center pt-4 text-base sm:text-lg md:text-2xl text-slate-500 text-center">
        Create a frictionless wallet from India with just a Google Account.
      </div>

      <div className="flex justify-center pt-2 text-base sm:text-lg md:text-2xl text-slate-500 text-center">
        Convert your INR into Cryptocurrency
      </div>

      <div className="pt-8 flex justify-center">
        {session.data?.user ? (
          <SecondaryButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to Dashboard
          </SecondaryButton>
        ) : (
          <SecondaryButton
            onClick={() => {
              signIn("google");
            }}
          >
            Login with Google
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};
