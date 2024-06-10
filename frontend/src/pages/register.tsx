import { Card } from "@/components/card";
import { InputPersonalInformation } from "@/components/input-personal-information";
import { Button } from "@/components/ui/button";
import image from '../assets/images/image-2.jpg'
import { useState } from "react";
import axios from "axios";

export function Register(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/signup', formData);
            console.log('Registration successful:', response.data);
           
        } catch (error: any) {
            console.error('Registration failed:', error.response.data);
        }
    };

    return(
        <main className="flex min-h-screen justify-center items-center py-4">

            <div className="w-full h-full text-foreground max-w-3xl mx-auto p-16">

                <h1 className="text-start text-2xl">Hi, nice to see you!</h1>

                <div className="mt-8">

                    <form onSubmit={handleSubmit}>
                        <InputPersonalInformation title="Name" id="name" placeholder="John Doe" typeInput="input" onChange={handleChange}/>
                        <InputPersonalInformation title="Email" id="email" placeholder="john.doe@email.com" typeInput="email" onChange={handleChange}/>
                        <InputPersonalInformation title="Password" id="password" placeholder="" typeInput="password" onChange={handleChange}/>

                        <div className="w-full">
                            <Button type="submit" className="w-full mt-8 mb-8">Register</Button>
                        </div>

                    </form>

                    <a className=" text-purple-600 hover:text-purple-800" href="/login">Do you have an account? Login</a>

                </div>
            </div>

            <Card image={image} />

        </main>
    )
}