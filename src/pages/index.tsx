import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>My page</Title>
}
