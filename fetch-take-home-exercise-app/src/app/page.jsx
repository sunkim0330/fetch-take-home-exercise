"use client";
import { Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Page() {
  const router = useRouter();
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      console.log("response", response);
      router.push("/dashboard");
    } else {
      const errorData = await response.json();
      toast({
        title: "Login Failed",
        description: errorData.message || "Unknown error",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading size="2xl">Hello, Welcome to Pupfect Match 🐶</Heading>
      <Heading>Please login</Heading>
      <Input
        placeholder="Enter Your Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Button size="sm" onClick={handleClick}>
        Submit
      </Button>
    </Flex>
  );
}
