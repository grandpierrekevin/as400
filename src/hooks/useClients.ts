import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useClients() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {    
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    placeholderData: [],
  });
  return { clients: data, isLoading };
}
