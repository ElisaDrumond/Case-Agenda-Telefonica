import { Contact } from "./contact";
import { ContactDetail } from "./contact-detail";
import { Sheet } from "./ui/sheet";

export function ContactList() {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 10 }).map((item) => (
        
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <Sheet>
          <Contact
            url="https://github.com/ElisaDrumond"
            name="Elisa"
            number="999-999-999"
          />
          <ContactDetail />
        </Sheet>
      ))}
    </div>
  );
}
