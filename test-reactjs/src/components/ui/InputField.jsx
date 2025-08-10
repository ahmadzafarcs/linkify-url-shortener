import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function InputField({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  title,
  description,
}) {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label className="text-sm/6 font-medium text-white">{title}</Label>
        <Description className="text-sm/6 text-white/50">
          {description}
        </Description>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
          )}
        />
      </Field>
    </div>
  );
}
