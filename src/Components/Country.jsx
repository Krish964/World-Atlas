import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/PostApi";
import Loader from "./Loader";
import CountryCard from "./CountryCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchFilter from "./SearchFilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // kitne cards ek page par

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      setCountries(response.data);
    });
  }, []);

  // Search logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // No search, show all
  };

  // Filter by region logic
  const filterRegion = (country) => {
    if (filter === "All") return true;
    return country.region === filter;
  };

  // Combined filter
  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="bg-black min-h-screen text-white px-8 py-10">
      {/* Countries Grid */}
      <section className="mx-20">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedCountries.map((currCountry, index) => (
            <CountryCard country={currCountry} key={index} />
          ))}
        </ul>
      </section>
      {/* Pagination */}
      <div className="flex justify-center mt-8 pb-10">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            shape="rounded"
            showFirstButton
            showLastButton
            sx={{
              backgroundColor: "rgba(255,255,255,0.09)",
              borderRadius: "8px",
              padding: "8px 16px",
              "& .MuiPaginationItem-root": {
                color: "#fff",
              },
              "& .Mui-selected": {
                backgroundColor: "#1976d2 !important",
                color: "#fff",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Country;
