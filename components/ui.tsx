import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  body,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {label ? (
        <p className="mb-3 text-sm font-semibold text-north/70">{label}</p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-north sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-north/72">{body}</p> : null}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
  target,
}: ButtonLinkProps) {
  const styles = {
    solid:
      "border-north bg-north text-paper hover:bg-paper hover:text-north focus-visible:outline-north",
    outline:
      "border-north bg-paper text-north hover:bg-north hover:text-paper focus-visible:outline-north",
    light:
      "border-paper bg-paper text-north hover:bg-north hover:text-paper focus-visible:outline-paper",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border px-5 py-3 text-sm font-semibold transition duration-300 ease-out active:translate-y-[1px] ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[6px] border border-north/18 px-3 py-1 text-sm font-medium text-north ${className}`}
    >
      {children}
    </span>
  );
}
