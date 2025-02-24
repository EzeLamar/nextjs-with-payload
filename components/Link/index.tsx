import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export type CMSLinkType = {
  appearance?: "default" | "primary" | "secondary";
  children?: React.ReactNode;
  className?: string;
  label?: string;
  newTab?: boolean | null;
  reference?: {
    relationTo: "pages";
    value: number | string;
  } | null;
  type?: "custom" | "reference" | null;
  url?: null | string;
};

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  appearance,
  children,
  className,
  label,
  newTab,
  url,
}) => {
  const href = url;

  if (!href) {
    return null;
  }

  if (!appearance) {
    const newTabProps = newTab
      ? { rel: "noopener noreferrer", target: "_blank" }
      : {};

    if (type === "custom") {
      return (
        <a href={url || ""} {...newTabProps} className={className}>
          {label && label}
          {children ? <>{children}</> : null}
        </a>
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          {...newTabProps}
          className={className}
          prefetch={false}
        >
          {label && label}
          {children ? <>{children}</> : null}
        </Link>
      );
    }
  }

  const buttonProps = {
    appearance,
    href,
    label,
    newTab,
  };

  return <Button className={className} {...buttonProps} />;
};
