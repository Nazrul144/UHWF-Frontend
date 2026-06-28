"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FoundationBrand } from "@/shared/FoundationLogo";

export default function Signup() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const password = data.get("password")?.toString() ?? "";
    const confirm = data.get("confirmPassword")?.toString() ?? "";

    if (!name) newErrors.name = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (password !== confirm) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div className="flex min-h-[calc(100vh-0px)] flex-1 items-center justify-center bg-muted/30 px-4 py-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
            ✓
          </div>
          <h1 className="page-title">Application Submitted</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Your membership request has been received. An administrator will
            review and approve your account before you can access the member
            dashboard.
          </p>
          <Link
            href="/signin"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-0px)] flex-1 items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <FoundationBrand locale="bn" logoSize="md" priority className="justify-center" />
          <h1 className="page-title">Become a Member</h1>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Register for foundation membership (requires admin approval)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone (WhatsApp)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+880 1XXX-XXXXXX"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already a member?{" "}
          <Link href="/signin" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
