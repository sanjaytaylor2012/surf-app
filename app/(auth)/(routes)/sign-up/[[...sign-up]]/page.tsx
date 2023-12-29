import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Button onClick={() => redirect("/sign-in")}>Sign in</Button>
    </div>
  );
};
export default SignUpPage;
