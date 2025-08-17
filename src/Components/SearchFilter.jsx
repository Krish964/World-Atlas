import React from 'react'

function SearchFilter({ search, setSearch, filter, setfiiter }) {
  
  const handleInputChange = (e) => {
    e.preventDefault()
     setSearch(e.target.value)
  }

  const handleSelectChange = (e) => {
    e.preventDefault()
    setfiiter(e.target.value)
  }

  return (
    <section className='mb-12 flex justify-between'>
      <input className='px-5 py-2 text-white border-1 border-white rounded-xl' type="text" name="Search" placeholder='Search' value={search} onChange={handleInputChange} />
      
      <div>
        <select className='px-5 py-2  border-1 border-white rounded-xl' placeholder = 'Select' name="select" id="select" value={filter} onChange={handleSelectChange} >
          <option className='text-black' value="All">All</option>
          <option className='text-black' value="Asia">Asia</option>
          <option className='text-black' value="France">France</option>
          <option className='text-black' value="Japan">Japana</option>
          <option className='text-black' value="London">Londonca</option>
          <option className='text-black' value="Australia">Australiaa</option>
        </select>
      </div>
    </section> 
  )
}

export default SearchFilter
