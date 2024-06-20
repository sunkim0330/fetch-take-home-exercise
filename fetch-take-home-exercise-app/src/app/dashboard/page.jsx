"use client";
import { useState, useEffect } from "react";
import { Button, Flex, HStack, Heading, Input } from "@chakra-ui/react";
import { searchDogs } from "@/utils/api";

export default function Dashboard() {
  const [resultIds, setResultIds] = useState([]);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [filters, setFilters] = useState({});

  // useEffect(() => {
  //   searchDogs();
  //   // console.log("resultIds", resultIds);
  // }, []);
  // const data = await response.json();
  // setResultIds(data.resultIds);
  // setTotal(data.total);
  // setNextPage(data.next);
  // setPrevPage(data.prev);

  const fetchDogs = async (query = "") => {
    try {
      const response = await searchDogs(query);
      console.log("response", response);
      setResultIds(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchDogs();
  };

  return (
    <Flex alignItems="center" flexDirection="column">
      <Heading>Search for your favorite dog</Heading>
      <HStack spacing={12}>
        <Input placeholder="Search Dog"></Input>
        <Button size="sm" onClick={handleClick}>
          Search
        </Button>
      </HStack>
    </Flex>
  );
}
