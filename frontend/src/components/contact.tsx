import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SheetTrigger } from "./ui/sheet";

type ContactProps = {
  url: string;
  name: string;
  number: string;
};

export function Contact(props: ContactProps) {
  return (
    <SheetTrigger>
      <div className="flex items-center gap-4">
        <Avatar className="size-12">
          <AvatarFallback className="bg-purple-200">cn</AvatarFallback>
          <AvatarImage src={props.url} />
        </Avatar>

        <div className="flex flex-col text-start">
          <p className="text-xl font-bold">{props.name}</p>
          <p className="text-muted-foreground">{props.number}</p>
        </div>
      </div>
    </SheetTrigger>
  );
}
