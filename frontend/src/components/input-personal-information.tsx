// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type PersonalProps = {
  id: string;
  title: string;
  typeInput: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
} & ComponentProps<"input">;

export function InputPersonalInformation(props: PersonalProps) {
  return (
    <div className="mt-4 gap-4">
      <Label className="text-right" htmlFor={props.id}>
        {props.title}
      </Label>
      <Input
        className="mt-2"
        type={props.typeInput}
        {...props.register}
        {...props}
      />
    </div>
  );
}
