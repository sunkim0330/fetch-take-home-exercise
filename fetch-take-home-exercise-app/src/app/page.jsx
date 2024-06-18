"use client";
import { Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import { Router } from "next/router";
import { useState } from "react";
export default function Page() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    console.log("clicked");
    const response = await fetch("api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      console.log("response", response);
      Router.push("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        status: "error",
        position: "top",
      });
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading size="2xl">Hello, Welcome to Purpect Match 🐶</Heading>
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
