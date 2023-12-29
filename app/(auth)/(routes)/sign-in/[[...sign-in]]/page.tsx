import { SignIn, SignInButton } from "@clerk/nextjs";

import React from "react";

type pageProps = {};

const SignInPage: React.FC<pageProps> = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <SignIn signUpUrl="/sign-in" />
    </div>
  );
};
export default SignInPage;
