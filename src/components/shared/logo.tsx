import Link from "next/link";

type LogoProps = {
  href?: string;
};

export function Logo({ href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className="text-2xl font-extrabold tracking-tight text-primary"
    >
      Studify
    </Link>
  );
}