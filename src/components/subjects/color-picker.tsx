"use client";

import { Check } from "lucide-react";

import { SUBJECT_COLORS } from "@/constants/subject-colors";
import { cn } from "@/lib/utils";

type ColorPickerProps = Readonly<{
  value: string;
  onChange: (color: string) => void;
}>;

export function ColorPicker({
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {SUBJECT_COLORS.map((color) => {
        const selected = value === color.value;

        return (
          <button
            key={color.value}
            type="button"
            title={color.name}
            onClick={() => onChange(color.value)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border-2 transition-all",
              selected
                ? "ring-2 ring-primary ring-offset-2"
                : "hover:scale-105"
            )}
            style={{
              backgroundColor: color.value,
            }}
          >
            {selected && (
              <Check className="size-5 text-white" />
            )}
          </button>
        );
      })}
    </div>
  );
}