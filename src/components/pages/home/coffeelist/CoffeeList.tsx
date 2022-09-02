import { CoffeeCard } from '../coffeecard/CoffeeCard'
import { WholeCoffeeList, CoffeeListStyles } from './CoffeeListStyle'

export function CoffeeList() {
  return (
    <WholeCoffeeList className="container">
      <h2>Nossos cafés</h2>

      <CoffeeListStyles>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />

        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />

        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeListStyles>
    </WholeCoffeeList>
  )
}
