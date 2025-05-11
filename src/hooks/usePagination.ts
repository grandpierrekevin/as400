import { useState, useMemo } from "react";

export function usePagination<T>(data: T[], pageSize: number) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.length / pageSize);

  const paginated = useMemo(() => {
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  const nextPage = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const resetPage = () => setPage(0);

  return {
    page,
    setPage,
    totalPages,
    paginated,
    nextPage,
    prevPage,
    resetPage,
  };
}
