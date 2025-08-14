import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Country from './Components/Country'
import Layout from './Components/Layout'
import CountryDetails from './Components/CountryDetails'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="country" element={<Country />} />
          <Route path='country/:id' element={ <CountryDetails/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
