"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Spinner } from "@/components/ui/spinner";

type Props = {
  label: string;
  className?: string;
  variant?: "default" | "destructive";
};

export function SubmitButton({ className, label, variant = "default" }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className={className}
      disabled={pending}
      type="submit"
    >
      {label}
      <Spinner className="text-white" show={pending} />
    </Button>
  );
}
