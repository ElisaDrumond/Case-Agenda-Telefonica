import { Card } from "@/components/card";
import { InputPersonalInformation } from "@/components/input-personal-information";
import { Button } from "@/components/ui/button";
import image from '../assets/images/image-1.jpg'

export function Login(){
    return(
        <main className="flex min-h-screen justify-center items-center py-4">

            <div className="w-full h-full text-foreground max-w-3xl mx-auto p-16">

                <h1 className="text-start text-2xl">Hi, nice to see you!</h1>

                <div className="mt-8">

                    <InputPersonalInformation title="Email" id="email" placeholder="john.doe@email.com" typeInput="email"/>
                    <InputPersonalInformation title="Password" id="password" placeholder="" typeInput="password"/>

                    <div className="w-full">
                        <Button className="w-full mt-8 mb-8">Login</Button>
                    </div>

                    <a className=" text-purple-600 hover:text-purple-800" href="/register">Don't have an account? Register</a>

                </div>
            </div>

            <Card image={image} />

        </main>
    )
}