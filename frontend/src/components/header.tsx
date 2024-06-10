import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";
import { AddContact } from "./add-contact";
import { Button } from "./ui/button";
//import { Input } from "./ui/input";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center m-8">
      <Dialog open={open} onOpenChange={setOpen}>
        <AddContact />
      </Dialog>

      {/* <Input className="w-52 rounded-xl" placeholder="Search" /> */}
      <Button
        onClick={() => {
          localStorage.clear();
          window.location.href = `${window.location.origin}/login`;
        }}
        variant={"outline"}
      >
        Logout
      </Button>
    </div>
  );
}
