import styled from 'styled-components'

/* eslint-disable-next-line */
export interface UuiProps {}

const StyledUui = styled.div`
  color: pink;
`

export function Uui(props: UuiProps) {
  return (
    <StyledUui>
      <h1>Welcome to Uui!</h1>
    </StyledUui>
  )
}

export default Uui
