import { styled } from "styled-components"
import { moblie } from "../responsive"


const Container = styled.div`
height: 30px;
background-color:teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
${moblie({fontSize:'12px'})};
`

const Announcement = () => {
  return (
<Container>
    Super Deal Free Shipping and Order Over $50
</Container>
  )
}

export default Announcement