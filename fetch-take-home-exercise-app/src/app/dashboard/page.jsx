import { Button, Flex, HStack, Heading, Input } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Heading>Search for your favorite dog</Heading>
      <HStack spacing={12}>
        <Input placeholder="Search Dog"></Input>
        <Button size="sm">Search</Button>
      </HStack>
    </Flex>
  );
}
