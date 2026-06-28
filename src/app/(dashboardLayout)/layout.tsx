import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarLinks = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/profile", label: "Profile" },
    { href: "/dashboard/donations", label: "Donations" },
    { href: "/dashboard/notifications", label: "Notifications" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-0px)] flex-1">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card p-4 md:block">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            UHWF Portal
          </p>
          <p className="font-bold text-primary">Member Dashboard</p>
        </div>
        <nav aria-label="Dashboard navigation">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
          Dashboard pages will be available after backend integration.
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3 sm:px-6">
          <h1 className="text-lg font-bold text-secondary">Dashboard</h1>
          <Link
            href="/signin"
            className="text-sm font-medium text-primary hover:underline"
          >
            Sign Out
          </Link>
        </header>
        <div className="flex-1 bg-background p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
