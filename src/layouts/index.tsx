import { Outlet } from 'react-router-dom'
import { Header } from '../components/pages/home/header/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}