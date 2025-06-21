"use client"

import { Button, Divider, Form, Input, Link, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

export default function App() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Login submitted");
    };

    return (
        <div className="bg-[#171717] flex min-h-screen items-center justify-center p-4">
            <div className="bg-orange-500/20 backdrop-blur-md flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
                    <h2 className="text-xl font-medium text-white">Welcome Back</h2>
                    <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <Input
                            isRequired
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                            classNames={{
                                label: "text-white",
                                input: "text-white placeholder:text-white/50",
                            }}
                        />
                        <Input
                            isRequired
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                            classNames={{
                                label: "text-white",
                                input: "text-white placeholder:text-white/50",
                            }}
                        />
                        <Button className="w-full bg-orange-600 text-white" type="submit">
                            Sign In
                        </Button>
                    </Form>
                    <Divider className="bg-white/30" />
                    <div className="flex flex-col gap-2">
                        <Button
                            className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium shadow-sm hover:bg-neutral-100 transition rounded-lg"
                            radius="none"
                        >
                            <Icon icon="logos:google" width={50} />
                            <span>Continue with Google</span>
                        </Button>
                        <Button
                            className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium shadow-sm hover:bg-neutral-100 transition rounded-lg"
                            radius="none"
                        >
                            <Icon icon="logos:github-icon" width={24} />
                            <span>Continue with GitHub</span>
                        </Button>

                    </div>
                    <p className="text-small text-center text-white">
                        Need an account?{" "}
                        <Link href="#" size="sm" className="text-orange-300">
                            Sign Up
                        </Link>
                    </p>
                </div>
                <div className="hidden md:block w-1/2 relative">
                    <Image
                        src="https://img.heroui.chat/image/ai?w=800&h=600&u=orange-abstract"
                        alt="Abstract orange design"
                        className="object-cover w-full h-full"
                        removeWrapper
                    />
                </div>
            </div>
        </div>
    );
}