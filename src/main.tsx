import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
	if (!import.meta.env.DEV) {
		return;
	}

	const { worker } = await import("./ignore/mocks.ts");

	// `worker.start()` returns a Promise that resolves
	// once the Service Worker is up and ready to intercept requests.
	return worker.start();
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60_000,
			retry: 1,
		},
	},
});

const entryNode = document.getElementById("root");

enableMocking().then(() => {
	if (!entryNode) {
		throw new Error("Root element #root not found");
	}

	createRoot(entryNode).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</StrictMode>,
	);
});
