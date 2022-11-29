import styled from 'styled-components'

export const CardsContainer = styled.section`
  @media all and (max-width: 768px){
    display: none;
  }
  @media all and (min-width: 768px) {
    display: ${props => props.displayMode==='Grid' && 'grid'};
    grid-template-columns: ${props => props.displayMode==='Grid' && 'repeat(3, 50%)'};
    column-gap: ${props => props.displayMode==='Grid' && '2rem'};
    max-width: ${props => props.displayMode==='Grid' && '62%'};
  }
`