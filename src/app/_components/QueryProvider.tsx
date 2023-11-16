"use client";

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const QueryProvider = (props: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      {props.children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default QueryProvider;
