import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../Api/PostApi';
import Loader from './Loader';
import CountryCard from './CountryCard';

// MUI imports
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // kitne cards ek page par

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      setCountries(response.data);
    });
  }, []);

  const totalPages = Math.ceil(countries.length / itemsPerPage);

  // Current page ka data slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="bg-black min-h-screen text-white px-8 py-10">
      {/* Countries Grid */}
      <section className='mx-20'>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentCountries.map((currCountry, index) => (
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
              backgroundColor: 'rgba(255,255,255,0.09)',
              borderRadius: '8px',
              padding: '8px 16px',
              '& .MuiPaginationItem-root': {
                color: '#fff',
              },
              '& .Mui-selected': {
                backgroundColor: '#1976d2 !important',
                color: '#fff',
              }
            }}
          />
        </Stack>
      </div>

    </div>
  );
}

export default Country;
