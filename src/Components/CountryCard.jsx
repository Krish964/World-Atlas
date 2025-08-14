import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
function CountryCard({ country }) {
  const { name, capital, population, languages, flags, region } = country;
  const [currentPage , setCurrentPage] = useState(1)
  const itemsPerPage = 12;
  return (
    <li className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg shadow-black/50 border border-white/20 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center py-3">
      {/* Flag */}
      <img
        src={flags?.svg || flags?.png}
        alt={`${name.common} flag`}
        className="w-[300px] text-center h-44 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-5 text-white flex flex-col gap-2">
        <h2 className="text-2xl  mb-3 text-teal-300">
          {name.common.length > 10 ? name.common.slice(0 , 10) + "..." : name.common}
        </h2>

        <p className="text-sm mb-1">
          <span className="font-semibold text-teal-500">Capital:</span> {capital?.[0] || "N/A"}
        </p>

        <p className="text-sm mb-1">
          <span className="font-semibold text-teal-500">Region:</span> {region}
        </p>

        <p className="text-sm mb-1">
          <span className="font-semibold text-teal-500">Population:</span> {population.toLocaleString()}
        </p>

        <p className="text-sm">
          <span className="font-semibold text-teal-500">Languages:</span> {languages ? Object.values(languages).join(", ") : "N/A"}
        </p>

        <NavLink to={`/country/:${name.common}`}>
          <button className='border rounded-xl px-8 py-2 my-4'>
            Read More
          </button>
        </NavLink>
      </div>

     
    </li>
  );
}

export default CountryCard;
