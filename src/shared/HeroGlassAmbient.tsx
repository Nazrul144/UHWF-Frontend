/** Welfare-themed hero ambient icons — edges only, CSS motion */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M6 28L32 14l26 14-26 14L6 28z" fill="currentColor" fillOpacity="0.2" {...stroke} />
      <path d="M18 34v12c0 4 8 8 14 8s14-4 14-8V34" {...stroke} />
      <path d="M52 28v14" {...stroke} />
    </svg>
  );
}

function OpenBookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M8 14c8-4 16-4 24 0v36c-8-4-16-4-24 0V14z" fill="currentColor" fillOpacity="0.18" {...stroke} />
      <path d="M32 14c8-4 16-4 24 0v36c-8-4-16-4-24 0V14z" fill="currentColor" fillOpacity="0.12" {...stroke} />
      <path d="M32 14v36" {...stroke} />
    </svg>
  );
}

function HandsHeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 44s-10-7-10-16a6 6 0 0110-3.5A6 6 0 0142 28c0 9-10 16-10 16z"
        fill="currentColor"
        fillOpacity="0.28"
        {...stroke}
      />
      <path d="M10 48c2-8 8-12 14-12M54 48c-2-8-8-12-14-12" {...stroke} />
      <path d="M14 52l6-4M50 52l-6-4" {...stroke} />
    </svg>
  );
}

function HandsJoinedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M14 36V22a3.5 3.5 0 017 0v14M24 36V18a3.5 3.5 0 017 0v18M34 36V24a3.5 3.5 0 017 0v12"
        {...stroke}
      />
      <path
        d="M10 36h44v9a4 4 0 01-4 4H14a4 4 0 01-4-4v-9z"
        fill="currentColor"
        fillOpacity="0.18"
        {...stroke}
      />
      <path d="M22 28h20" {...stroke} />
    </svg>
  );
}

function DonationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="14" y="26" width="28" height="22" rx="3" fill="currentColor" fillOpacity="0.18" {...stroke} />
      <path d="M22 26V20a10 10 0 0120 0v6" {...stroke} />
      <path d="M28 36h8M32 32v8" {...stroke} />
      <path d="M46 18c3 2 5 5 5 8" {...stroke} />
      <circle cx="50" cy="14" r="4" fill="currentColor" fillOpacity="0.25" {...stroke} />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M18 12v22a14 14 0 1028 0V28" {...stroke} />
      <circle cx="46" cy="40" r="6" fill="currentColor" fillOpacity="0.2" {...stroke} />
      <path d="M18 12h-4a4 4 0 00-4 4v6a8 8 0 008 8" {...stroke} />
    </svg>
  );
}

function ShelterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M8 30L32 12l24 18v20H8V30z" fill="currentColor" fillOpacity="0.18" {...stroke} />
      <path d="M26 50V36h12v14" {...stroke} />
      <path d="M20 30h24" {...stroke} />
    </svg>
  );
}

export function HeroGlassAmbient() {
  return (
    <div className="hero-ambient pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="hero-ambient__mesh" />

      <div className="hero-ambient__bokeh hero-ambient__bokeh--1" />
      <div className="hero-ambient__bokeh hero-ambient__bokeh--2" />
      <div className="hero-ambient__bokeh hero-ambient__bokeh--3" />
      <div className="hero-ambient__bokeh hero-ambient__bokeh--4" />

      <GraduationCapIcon className="hero-ambient__welfare hero-ambient__welfare--edu" />
      <OpenBookIcon className="hero-ambient__welfare hero-ambient__welfare--book hero-ambient__welfare--light" />
      <HandsHeartIcon className="hero-ambient__welfare hero-ambient__welfare--care" />
      <HandsJoinedIcon className="hero-ambient__welfare hero-ambient__welfare--unity" />
      <DonationIcon className="hero-ambient__welfare hero-ambient__welfare--donate" />
      <StethoscopeIcon className="hero-ambient__welfare hero-ambient__welfare--health" />
      <ShelterIcon className="hero-ambient__welfare hero-ambient__welfare--shelter hero-ambient__welfare--light" />
    </div>
  );
}
