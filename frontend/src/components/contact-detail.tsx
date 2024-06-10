import { api } from "@/lib/api";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import type { Contact } from "./contact-list";
import { InputPersonalInformation } from "./input-personal-information";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export function ContactDetail(props: Contact) {
  const [updatedContact, setUpdatedContact] = useState<Contact>({ ...props });

  async function updateContact(id: string) {
    try {
      await api.patch(`/contacts/${id}`, updatedContact);
      console.log("Contact updated successfully!");
      // Adicione feedback de sucesso, se necessário
    } catch (error) {
      console.error("Error updating contact:", error);
      // Adicione feedback de erro, se necessário
    }
  }

  async function deleteContact(id: string) {
    try {
      await api.delete(`/contacts/${id}`);
      console.log("Contact deleted successfully!");
      // Adicione feedback de sucesso, se necessário
    } catch (error) {
      console.error("Error deleting contact:", error);
      // Adicione feedback de erro, se necessário
    }
  }

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
          value={updatedContact.name}
          onChange={(e) =>
            setUpdatedContact({ ...updatedContact, name: e.target.value })
          }
          typeInput="string"
        />
        <InputPersonalInformation
          id="email"
          title="Email"
          placeholder="john.doe@email.com"
          value={updatedContact.email}
          onChange={(e) =>
            setUpdatedContact({ ...updatedContact, email: e.target.value })
          }
          typeInput="email"
        />
        <InputPersonalInformation
          id="number"
          title="Number"
          placeholder="999-9999-999"
          value={updatedContact.number}
          onChange={(e) =>
            setUpdatedContact({ ...updatedContact, number: e.target.value })
          }
          typeInput="string"
        />
        <InputPersonalInformation
          id="dateBirth"
          title="Date of Birth"
          value={formatDate(updatedContact.dateOfBirth)}
          onChange={(e) =>
            setUpdatedContact({
              ...updatedContact,
              dateOfBirth: e.target.value
            })
          }
          typeInput="date"
        />
      </div>

      <div className="flex justify-end items-center gap-4">
        <Button
          className="mt-3"
          type="submit"
          onClick={() => updateContact(props._id)}
        >
          Save changes
        </Button>
        <Button
          onClick={() => deleteContact(props._id)}
          className="mt-3"
          variant="outline"
          size="icon"
          type="button"
        >
          <FaTrash />
        </Button>
      </div>
    </SheetContent>
  );
}

function formatDate(date: string) {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(dateObject.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
