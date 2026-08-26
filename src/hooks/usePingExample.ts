import { useQuery } from "@tanstack/react-query";
import type { TPingResponse } from "../ignore/handlers";

export function usePingExample() {
	const { data } = useQuery({
		queryKey: ["ping"],
		queryFn: async () => {
			const response = await fetch("/api/ping");
			const data: TPingResponse = await response.json();
			return data;
		},
	});

	return { pongData: data };
}
