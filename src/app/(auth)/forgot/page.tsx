import type { Metadata } from "next";
import Forgot from "@/Authentication/Forgot";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your UHWF account password.",
};

export default function ForgotPage() {
  return <Forgot />;
}
