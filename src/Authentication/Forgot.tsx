"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[calc(100vh-0px)] flex-1 items-center justify-center bg-muted/30 px-4 py-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="page-title">Check Your Email</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            If an account exists for <strong>{email}</strong>, you will receive
            password reset instructions shortly. (Backend integration pending)
          </p>
          <Link
            href="/signin"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-0px)] flex-1 items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="page-title">Forgot Password</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter your email and we will send reset instructions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-invalid={!!error}
            />
            {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link href="/signin" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
