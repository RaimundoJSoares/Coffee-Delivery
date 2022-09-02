import {
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
  CarFooter,
  AddCartWrapper,
} from './CoffeeCardSyles'
import Coffee from '../../../../assets/Coffee.svg'
import { RegularText, TitleText } from '../../../Typeography'
import { QuantityInput } from '../quantityInput/QuantityInput'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Coffee} alt="" />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CarFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CarFooter>
    </CoffeeCardContainer>
  )
}
