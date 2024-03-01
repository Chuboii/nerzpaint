import Image from 'next/image'
import {Container,Box1,LineImage, WrapTitle, Text, WrapBox, Title, Wrapper, Wrap, ImageBox, IconWrap, Icon, PriceBox,Price, Discount, Box} from './PageProducts.style'
import ScrollToTop from '@/components/scroll to top/ScrollToTop'
import HomePaintProduct from '@/lib/paintProducts.json'

const ImageStyle = {
  borderRadius: '10px'
}

const ProductPage = () => {

  return (
      <>
        <ScrollToTop/>
        <meta name="all home paint products" content="view all home paint products" />
        <meta property="og:all products" content="My Open Graph Title" />
        <meta property="og:view all home paint products - nerzpaints" content="view all nerzpaint paint products" />
        <meta name="keywords" content="paints paint product home comfort painting painter" />
          <title>All Home Paint products - nerzpaints</title>
        
      <Container>
        <WrapTitle>
        <Title>Home Paint Products</Title>  
        <LineImage>
                      <Image fill src="/area-line.png" alt="underline"/>
            </LineImage>
        </WrapTitle>
          <WrapBox>    
         
          {HomePaintProduct.map(product => (
            <Wrapper key={product.id}>
            <Wrap>
              <ImageBox>
                <Image style={ImageStyle} src={product.imageUrl} alt={`nerzpaints ${product.product} image`} fill />
              </ImageBox>
              <Box1>
                  <Box>{product.litre}</Box>
                <IconWrap>
                  <Icon className="fa fa-star" aria-hidden="true"></Icon>
                  <Icon className="fa fa-star" aria-hidden="true"></Icon>
                  <Icon className="fa fa-star" aria-hidden="true"></Icon>
                  <Icon className="fa fa-star" aria-hidden="true"></Icon>
                  <Icon className="fa fa-star" aria-hidden="true"></Icon>
                </IconWrap>
              </Box1>
            </Wrap>
            <Text>{product.product}</Text>
            {/* <PriceBox>
              <Price>N 1000</Price>
              <Discount>N 2000</Discount>
            </PriceBox> */}
          </Wrapper>
         )) }
    
              </WrapBox>
          </Container>      
    </>
  )
}

export default ProductPage