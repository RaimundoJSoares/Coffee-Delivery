import styled from 'styled-components'
import IntroBacground from '../../../../assets/Intro-background.svg'

export const MainContainer = styled.main`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${IntroBacground}) no-repeat center`};
  background-size: cover;
`
export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
