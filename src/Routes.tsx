import { Route, Routes } from 'react-router-dom'
import { CompleteOrderPage } from './components/pages/completeorder/CompleteOrderPage'
import { HomePage } from './components/pages/HomePage'
import { DefaultLayout } from './layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}
