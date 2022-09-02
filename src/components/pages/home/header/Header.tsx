import {
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
} from './HeaderStyles'
import Logo from '../../../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Campinas, SP
          </HeaderButton>

          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
