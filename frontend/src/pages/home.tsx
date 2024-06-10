import { ContactList } from "@/components/contact-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "@/shared/session-provider";
import { useEffect } from "react";

export function Home() {
  const { session, setSession } = useSession();

  useEffect(() => {
    if(!session) {
      setSession(JSON.parse(localStorage.getItem("session")!))
    }
  }, [])

  return (
    <main className="bg-[#F4F7FF] min-h-screen py-4">
      <div className="w-full h-full bg-[#FFFFFF] text-foreground max-w-3xl mx-auto p-16 rounded-2xl">
        <div className="flex justify-between items-center">
          <p>Hey, {session?.username}</p>
          <Input className="w-52 rounded-xl" placeholder="Search" />
          <Button onClick={() => {
            localStorage.clear()
            window.location.href = `${window.location.origin}/login`
          }} variant={"outline"}>Logout</Button>
        </div>

        <h1 className="mt-8 text-3xl font-bold">Contacts</h1>

        <div className="mt-8">
          <ContactList />
        </div>
      </div>
    </main>
  );
}
