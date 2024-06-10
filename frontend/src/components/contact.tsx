import type { Contact } from "./contact-list";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SheetTrigger } from "./ui/sheet";

// type ContactProps = {
//   imageUrl: string;
//   name: string;
//   number: string;
// };

export function Contact(props: Omit<Contact, "email" | "dateOfBirth">) {
  return (
    <SheetTrigger>
      <div className="flex items-center gap-4">
        <Avatar className="size-12">
          <AvatarFallback className="bg-purple-200">cn</AvatarFallback>
          <AvatarImage src={props.imageUrl} />
        </Avatar>

        <div className="flex flex-col text-start">
          <p className="text-xl font-bold">{props.name}</p>
          <p className="text-muted-foreground">{props.number}</p>
        </div>
      </div>
    </SheetTrigger>
  );
}
