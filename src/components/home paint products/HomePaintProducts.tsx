import Image from 'next/image'
import React from 'react'
import {Container,Box1, Text, WrapBox, Title, Wrapper, Wrap, ImageBox, IconWrap, Icon, PriceBox,Price, Discount, Box} from './HomePaintProducts.style'
import HomeLoadMoreButton from '../buttons/load more btn/home load more btn/HomeLoadMoreButton'
import HomePaintProduct from '@/lib/paintProducts.json'


const ImageStyle = {
  borderRadius: '10px'
}

const HomePaintProducts = () => {

  
  return (
    <>
          <Container>
              <Title>Home Paint Products</Title>
        <WrapBox>  
          {HomePaintProduct.map(product => {
            
            return (
              <Wrapper key={product.id}>
                <Wrap>
                  <ImageBox>
                    <Image style={ImageStyle} src={product.imageUrl} alt={`nerzpaints ${product.product} image`} fill />
                  </ImageBox>
                  <Box1>
                    <Box>{product.litre }</Box>
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
              </Wrapper>
            )
          }).slice(0, 8)}
        </WrapBox>
         
   <HomeLoadMoreButton/>
          </Container>      
    </>
  )
}

export default HomePaintProducts