import type { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type PersonalProps = {
  id: string;
  title: string;
  placeholder: string;
  typeInput: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
};

export function InputPersonalInformation(props: PersonalProps) {
  return (
    <div className="mt-4 gap-4">
      <Label className="text-right" htmlFor={props.id}>
        {props.title}
      </Label>
      <Input
        className="mt-2"
        type={props.typeInput}
        id={props.id}
        placeholder={props.placeholder}
        {...props.register}
      />
    </div>
  );
}
