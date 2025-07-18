import { Layout } from '@/components/Layout'
import { Food } from '@/pages/Food'
import { Meal } from '@/pages/Meal'
import { BrowserRouter, Route, Routes } from 'react-router'
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Meal />} />
          <Route path='/refeicoes' element={<Meal />} />
          <Route path='/alimentos' element={<Food />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}


