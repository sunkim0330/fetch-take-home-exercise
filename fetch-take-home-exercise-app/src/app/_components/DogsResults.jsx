import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchDogs } from "@/utils/api";

export default function DogsResult() {
  const [resultIds, setResultIds] = useState([]);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [filters, setFilters] = useState({});
  const [dogDetails, setDogDetails] = useState([]);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async (query = "") => {
    try {
      const response = await searchDogs(query);

      const data = await response.json();
      setResultIds(data.resultIds);
      setTotal(data.total);
      setNextPage(data.next);
      setPrevPage(data.prev);
      fetchDogDetails(data.resultIds); // Fetch details for initial resultIds
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDogDetails = async (ids) => {
    try {
      const response = await fetchDogDetails(ids);
      const data = await response.json();
      setDogDetails(data);
    } catch (error) {
      console.error("Error fetching dog details:", error);
    }
  };

  return <Flex></Flex>;
}
