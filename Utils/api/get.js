import useSWR from "swr";

export default function Fetcher(url, refreshInterval) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isValidating, mutate } = useSWR(url, fetcher, {
    refreshInterval: refreshInterval,
  });
  return data;
}
