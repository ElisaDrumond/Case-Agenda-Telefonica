import { Contact } from "./contact";
import { ContactDetail } from "./contact-detail";
import { Sheet } from "./ui/sheet";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export type Contact = {
  name: string,
  number: string,
  email: string,
  dateOfBirth: string,
  imageUrl: string
}

export function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    (async () => {
      const {data} = await api.get("/contacts")
      setContacts(data)
    })()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      {contacts.map((contact) => (
        <Sheet>
          <Contact
            imageUrl={contact.imageUrl}
            name={contact.name}
            number={contact.number}
          />
          <ContactDetail {...contact} />
        </Sheet>
      ))}
    </div>
  );
}
