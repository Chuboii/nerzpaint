'use client'
import Image from 'next/image'
import { Container, Wrap, LineImageBox,Wrapper, Text, Box, Card, Title, Icon, ImageBox } from './ProductCards.style'
import { useRouter } from 'next/navigation'
import ScrollToTop from '@/components/scroll to top/ScrollToTop'

const ProductsCard = () => {
  const router = useRouter()

  const navigateToMarinePaintProducts = () => router.push('/product-cards/marine-paint/products')
 
  const navigateToHomePaintProducts = () => router.push('/product-cards/home-paint/products')
 
  return (
    <>
        <ScrollToTop />
        <meta name="choose your preference paint" content="select your desirable paint product" />
        <meta property="og:select a paint product" content="My Open Graph Title" />
        <meta property="og:choose your preference paint products - nerzpaints" content="view all nerzpaint paint products" />
        <meta name="keywords" content="paints paint product home comfort painting painter choose" />
        <title>Choose your desired paint product - nerzpaints</title>

    <Container>
      <Wrap>
      <Text>Choose your preference</Text>
      <LineImageBox>
                <Image src='/area-line.png'alt='' fill/>
          </LineImageBox>
      </Wrap>
      <Wrapper>
      <Card onClick={navigateToHomePaintProducts}>
        <Box>
      <ImageBox>
                  <Image src='/layers.png'alt='' fill/>
          </ImageBox>
          </Box>
              <Title>Home Paint Products</Title>
            <Icon className="fa fa-arrow-right" aria-hidden="true"></Icon>
          </Card>

      <Card onClick={navigateToMarinePaintProducts}>
        <Box>
      <ImageBox>
                  <Image src='/outline.png'alt='' fill/>
          </ImageBox>
          </Box>
              <Title>Marine Paint Products</Title>
            <Icon className="fa fa-arrow-right" aria-hidden="true"></Icon>
        </Card>
        </Wrapper>
      </Container>
    </>
  )
}

export default ProductsCard