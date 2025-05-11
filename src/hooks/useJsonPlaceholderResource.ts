import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useJsonPlaceholderResource<T = any>(resource: string) {
  return useQuery<T[]>({
    queryKey: ["jsonplaceholder", resource],
    queryFn: async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      return res.data;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    placeholderData: [],
  });
}
