
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import { styled } from "styled-components"
import Footer from "../components/Footer"

const Container =styled.div`


`
const Wrapper =styled.div`
padding: 20px;

`
const Title =styled.h1`
font-weight: 600;
text-align: center;

`
const Top =styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;

`
const TopTexts=styled.div`

`
const TopText=styled.span`
text-decoration: underline;

cursor: pointer;
margin: 0 10px;

`

const Bottom=styled.div`
`

const Cart = () => {
  return (
   <Container>
   <Announcement/>
  <Navbar/>
  <Wrapper>
    <Title>Your Bag</Title>
    <Top>
            <TopButton>Continue Shopping</TopButton>

            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your WishList(0)</TopText>
            </TopTexts>
            <TopButton>Check Out Now</TopButton>
    </Top>
   <Bottom>

   </Bottom>
  </Wrapper>
  <Footer/>
   </Container>
  )
}

export default Cart