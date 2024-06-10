import { FaTrash } from "react-icons/fa";
import { InputPersonalInformation } from "./input-personal-information";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Contact } from "./contact-list";

export function ContactDetail(props: Contact) {
  return (
    <SheetContent>
      <SheetHeader className="items-center gap-4">
        <SheetTitle>Edit profile</SheetTitle>

        <Avatar className="size-20">
          <AvatarFallback>cn</AvatarFallback>
          <AvatarImage src={props.imageUrl} />
        </Avatar>
      </SheetHeader>

      <div className="grid gap-4 py-4">
        <InputPersonalInformation
          id="name"
          title="Name"
          placeholder="John Doe"
          value={props.name}
          typeInput="string"
        />
        <InputPersonalInformation
          id="email"
          title="Email"
          placeholder="john.doe@email.com"
          value={props.email}
          typeInput="email"
        />
        <InputPersonalInformation
          id="number"
          title="Number"
          placeholder="999-9999-999"
          value={props.number}
          typeInput="string"
        />
        <InputPersonalInformation
          id="dateBirth"
          title="Date of Birth"
          value={formatDate(props.dateOfBirth)}
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

function formatDate(date: string) {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
