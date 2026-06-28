import type { Metadata } from "next";
import Signup from "@/Authentication/Signup";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Register for UHWF membership. Admin approval required for dashboard access.",
};

export default function SignupPage() {
  return <Signup />;
}
