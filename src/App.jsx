import AnimeCard from "./components/AnimeCard"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AnimeDetail from "./pages/AnimeDetail"
import Favourites from "./pages/Favourites"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  )
}


export default App