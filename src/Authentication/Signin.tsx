"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FoundationBrand } from "@/shared/FoundationLogo";

export default function Signin() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const email = data.get("email")?.toString().trim() ?? "";
    const password = data.get("password")?.toString() ?? "";

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert("Sign in will be connected to the backend API. (Auth.js pending)");
  };

  return (
    <div className="flex min-h-[calc(100vh-0px)] flex-1 items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <FoundationBrand locale="bn" logoSize="md" priority className="justify-center" />
          <h1 className="page-title">Sign In</h1>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Access your member or admin dashboard
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
              autoComplete="email"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Link
                href="/forgot"
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>

        <p className="mt-4 text-center">
          <Link href="/" className="text-xs text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
