import Image from "next/image";

const sizeClasses = {
  sm: "h-10 w-auto sm:h-11",
  md: "h-12 w-auto sm:h-[3.5rem]",
  lg: "h-14 w-auto sm:h-16",
} as const;

type FoundationLogoProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  priority?: boolean;
};

export const FOUNDATION_NAME_BN = "উত্তর চর মানব কল্যাণ ফাউন্ডেশন";
export const FOUNDATION_NAME_EN = "Uttar Char Manob Kalyan Foundation";
export const FOUNDATION_LOCATION_BN = "মেহেন্দিগঞ্জ, বরিশাল";
export const FOUNDATION_LOCATION_EN = "Mehendiganj, Barishal";

export default function FoundationLogo({
  size = "md",
  className = "",
  priority = false,
}: FoundationLogoProps) {
  return (
    <Image
      src="/logo/logo.jpg"
      alt={`${FOUNDATION_NAME_BN} লোগো`}
      width={220}
      height={220}
      priority={priority}
      className={`shrink-0 object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}

type FoundationBrandProps = {
  locale?: "en" | "bn";
  logoSize?: keyof typeof sizeClasses;
  className?: string;
  priority?: boolean;
  showTextOnMobile?: boolean;
};

export function FoundationBrand({
  locale = "bn",
  logoSize = "md",
  className = "",
  priority = false,
  showTextOnMobile = true,
}: FoundationBrandProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <FoundationLogo size={logoSize} priority={priority} />
      <div
        className={`min-w-0 text-left ${showTextOnMobile ? "" : "hidden sm:block"}`}
      >
        <p className="text-[18px] font-bold leading-snug text-primary sm:text-[19px]">
          {locale === "bn" ? FOUNDATION_NAME_BN : FOUNDATION_NAME_EN}
        </p>
        <p className="text-sm font-semibold leading-snug text-muted-foreground">
          {locale === "bn" ? FOUNDATION_LOCATION_BN : FOUNDATION_LOCATION_EN}
        </p>
      </div>
    </div>
  );
}
