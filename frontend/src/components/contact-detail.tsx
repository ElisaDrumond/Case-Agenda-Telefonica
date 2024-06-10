import { FaTrash } from "react-icons/fa";
import { InputPersonalInformation } from "./input-personal-information";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

type DetailsProps = {
  url?: string;
  name?: string;
  number?: string;
  email?: string;
  dateOfBirth?: string;
};

export function ContactDetail(props: DetailsProps) {
  return (
    <SheetContent>
      <SheetHeader className="items-center gap-4">
        <SheetTitle>Edit profile</SheetTitle>

        <Avatar className="size-20">
          <AvatarFallback>cn</AvatarFallback>
          <AvatarImage src={props.url} />
        </Avatar>
      </SheetHeader>

      <div className="grid gap-4 py-4">
        <InputPersonalInformation
          id="name"
          title="Name"
          placeholder="John Doe"
          typeInput="string"
        />
        <InputPersonalInformation
          id="email"
          title="Email"
          placeholder="john.doe@email.com"
          typeInput="email"
        />
        <InputPersonalInformation
          id="number"
          title="Number"
          placeholder="999-9999-999"
          typeInput="string"
        />
        <InputPersonalInformation
          id="dateBirth"
          title="Date of Birth"
          placeholder=""
          typeInput="date"
        />
      </div>

      <div className="flex justify-end items-center gap-4">
        <Button className="mt-3" variant="outline" size="icon" type="button">
          <FaTrash />
        </Button>

        <SheetClose asChild>
          <Button className="mt-3" type="submit">
            Save changes
          </Button>
        </SheetClose>
      </div>
    </SheetContent>
  );
}
