// Importiamo le pagine 
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
// Importiamo il layout
import DefaultLayout from "./layouts/DefaultLayout"
// Importiamo la gestione delle rotte dal modulo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom"





function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
