import { ContactList } from "@/components/contact-list";
import { Header } from "@/components/header";
import { useSession } from "@/shared/session-provider";
import { useEffect } from "react";

export function Home() {
  const { session, setSession } = useSession();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!session) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      setSession(JSON.parse(localStorage.getItem("session")!));
    }
  }, []);

  return (
    <main className="bg-[#F4F7FF] min-h-screen py-4">
      <div className="w-full h-full bg-[#FFFFFF] text-foreground max-w-3xl mx-auto p-16 rounded-2xl">
        <p>Hey, {session?.username}</p>

        <Header />

        <h1 className="mt-8 text-3xl font-bold">Contacts</h1>

        <div className="mt-8">
          <ContactList />
        </div>
      </div>
    </main>
  );
}
