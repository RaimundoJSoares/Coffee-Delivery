import { CoffeeList } from './home/coffeelist/CoffeeList'
import { MainText } from './home/main/MainText'
import { HomePageStyles } from './HomePageStyles'

export function HomePage() {
  return (
    <HomePageStyles>
      <MainText />
      <CoffeeList />
    </HomePageStyles>
  )
}
