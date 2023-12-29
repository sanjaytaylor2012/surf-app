import { redirect } from "next/navigation";

export const SignUp = () => {
  redirect("/sign-in");

  return <div>Sign in</div>;
};
