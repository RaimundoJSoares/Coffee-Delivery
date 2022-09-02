import { Minus, Plus } from 'phosphor-react'
import { IconeWrapper, QuantityInputStyles } from './QuantityInputStyles'

export function QuantityInput() {
  return (
    <QuantityInputStyles>
      <IconeWrapper>
        <Minus size={14} weight="fill" />
      </IconeWrapper>

      <input type="number" readOnly value={1} />

      <IconeWrapper>
        <Plus size={14} weight="fill" />
      </IconeWrapper>
    </QuantityInputStyles>
  )
}
