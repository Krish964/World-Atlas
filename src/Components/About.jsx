import React from 'react';
import CountryFacts from "../Api/countryData.json";

function About() {
  return (
    <div className="bg-black min-h-screen text-white py-10">
      <section className="Container flex flex-col justify-center items-center gap-18">

        {/* Heading */}
        <div className="paragraph">
          <p className="text-4xl font-bold text-center font-mono">
            Here is Some Interesting Facts
            <br />
            We're Proud of
          </p>
        </div>

        {/* Grid Cards Layout */}
        <div className="gradientCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {CountryFacts.map((CountryData) => {
            const { id, country, capital, population, interesting_fact } = CountryData;

            return (
              <div
                className="cards bg-gradient-to-l border-1 from-gray-950 via-gray-800 to-gray-950 p-7 
                rounded-tl-3xl rounded-br-3xl  shadow-lg flex flex-col gap-4"
                key={id}
              >
                <div className="Country">
                  <span className="font-bold text-2xl">{country}</span>
                </div>
                <p>
                  <span className="capital">Capital: {capital}</span>
                </p>
                <p>
                  <span className="Population">Population: {population}</span>
                </p>
                <p>
                  <span className="fact">Interesting Fact: {interesting_fact}</span>
                </p>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
}

export default About;
