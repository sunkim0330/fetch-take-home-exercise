import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { fetchDogsInformation } from "@/utils/api";

export default function DogsResult(props) {
  const [dogDetails, setDogDetails] = useState([]);

  useEffect(() => {
    fetchDogDetails(resultIds);
  }, [resultIds]);

  const fetchDogDetails = async (ids) => {
    try {
      const response = await fetchDogsInformation(ids);
      const data = await response.json();
      setDogDetails(data);
    } catch (error) {
      console.error("Error fetching dog details:", error);
    }
  };

  return (
    <Flex>
      <Text>available for possible match!</Text>
    </Flex>
  );
}
