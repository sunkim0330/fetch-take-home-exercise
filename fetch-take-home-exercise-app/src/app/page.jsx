"use client";
import { login } from "@/utils/api";
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
    try {
      await login(name, email);
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message || "Unknown error",
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
