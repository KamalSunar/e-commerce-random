import React, { useState, useMemo, createContext } from "react";

export const pagesMapping = {
  home: "home",
  details: "details",
};

export const RoutingContext = createContext({ page: pagesMapping.home });
export default function Router({ children }) {
  let urlPath = window.location.pathname.slice(1).toLowerCase();
  const [page, setPage] = useState(urlPath || pagesMapping.home);
  const value = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
}
