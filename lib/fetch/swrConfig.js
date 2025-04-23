import fetcher from "./fetcher";

// swr configuration to set reload intervals etc.
const swrConfig = {
  fetcher,
  shouldRetryOnError: true,
  revalidateOnFocus: true,
  refreshInterval: 500, // in ms
};

export default swrConfig;
