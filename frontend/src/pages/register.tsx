import { Card } from "@/components/card";
import { InputPersonalInformation } from "@/components/input-personal-information";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { type SubmitHandler, useForm } from "react-hook-form";
import image from "../assets/images/image-2.jpg";
import { useSession } from "@/shared/session-provider";
import { SessionData } from "@/context/auth";
import { Navigate } from "react-router-dom";

interface Input {
  username: string;
  email: string;
  password: string;
}

export function Register() {
  const { register, handleSubmit } = useForm<Input>();
  const { session, setSession } = useSession();

  const registerSubmit: SubmitHandler<Input> = async (data) => {
    try {
      const response = await axios.post<SessionData>(
        "http://localhost:8000/signup",
        data
      );
      setSession(response.data)
      return <Navigate to="/" replace />
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      console.error("Registration failed:", error.response.data);
    }
    console.log("por facovr funcionandoan", data);
  };

  if (session) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="flex min-h-screen justify-center items-center py-4">
      <div className="w-full h-full text-foreground max-w-3xl mx-auto p-16">
        <h1 className="text-start text-2xl">Hi, nice to see you!</h1>

        <div className="mt-8">
          <form onSubmit={handleSubmit(registerSubmit)}>
            <InputPersonalInformation
              title="Name"
              id="name"
              placeholder="John Doe"
              typeInput="input"
              register={register("username")}
            />

            <InputPersonalInformation
              title="Email"
              id="email"
              placeholder="john.doe@email.com"
              typeInput="email"
              register={register("email")}
            />

            <InputPersonalInformation
              title="Password"
              id="password"
              placeholder=""
              typeInput="password"
              register={register("password")}
            />

            <div className="w-full">
              <Button type="submit" className="w-full mt-8 mb-8">
                Register
              </Button>
            </div>
          </form>

          <a className=" text-purple-600 hover:text-purple-800" href="/login">
            Do you have an account? Login
          </a>
        </div>
      </div>

      <Card image={image} />
    </main>
  );
}
