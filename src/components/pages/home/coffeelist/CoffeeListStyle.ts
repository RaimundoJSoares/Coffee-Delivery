import styled from 'styled-components'

export const WholeCoffeeList = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-background']};
  border-radius: 6px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
`
export const CoffeeListStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
