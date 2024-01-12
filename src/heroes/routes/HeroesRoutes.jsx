import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, AlertConfigPage } from '../pages'


export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className='container'>
            <Routes>
            <Route path="history" element={<DcPage />} />
            <Route path="home" element={<MarvelPage />} />

            <Route path="alert" element={<AlertConfigPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            <Route path="/" element={<Navigate to='/home' />} />
        </Routes>
        </div>
        
    </>
  )
}
