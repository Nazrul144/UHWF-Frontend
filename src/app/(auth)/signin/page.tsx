import type { Metadata } from "next";
import Signin from "@/Authentication/Signin";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your UHWF member or admin dashboard.",
};

export default function SigninPage() {
  return <Signin />;
}
