import Image from 'next/image'
import React from 'react'
import {Container,Box1, Text, WrapBox, Title, Wrapper, Wrap, ImageBox, IconWrap, Icon, PriceBox,Price, Discount, Box} from './MarinePaintProducts.style'
import MarineLoadMoreButton from '../buttons/load more btn/marine load more btn/MarineLoadMoreButton'

const ImageStyle = {
  borderRadius: '10px'
}

const MarinePaintProducts = () => {


  
  return (
    <>
          <Container>
              <Title>Marine Paint Products</Title>
          <WrapBox>    
          <Wrapper>
                  <Wrap>
                      <ImageBox>
                          <Image style={ImageStyle} src={'/sample 2.jpg' } alt="" fill/>
              </ImageBox>
            <Box1>
            <Box>Brand Product</Box>
            <IconWrap>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
                </IconWrap>
                </Box1>
                  </Wrap>
          <Text>Silk Emulsion Paint</Text>
          <PriceBox>
            <Price>N 1000</Price>
            <Discount>N 2000</Discount>
            </PriceBox>  
          </Wrapper>

          <Wrapper>
                  <Wrap>
                      <ImageBox>
                          <Image style={ImageStyle} src={'/sample 2.jpg' } alt="" fill/>
              </ImageBox>
            <Box1>
            <Box>Brand Product</Box>
            <IconWrap>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
                </IconWrap>
                </Box1>
                  </Wrap>
          <Text>Silk Emulsion Paint</Text>
          <PriceBox>
            <Price>N 1000</Price>
            <Discount>N 2000</Discount>
            </PriceBox>  
          </Wrapper>

          <Wrapper>
                  <Wrap>
                      <ImageBox>
                          <Image style={ImageStyle} src={'/sample 2.jpg' } alt="" fill/>
              </ImageBox>
            <Box1>
            <Box>Brand Product</Box>
            <IconWrap>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
                </IconWrap>
                </Box1>
                  </Wrap>
          <Text>Silk Emulsion Paint</Text>
          <PriceBox>
            <Price>N 1000</Price>
            <Discount>N 2000</Discount>
            </PriceBox>  
          </Wrapper>

            <Wrapper>
                  <Wrap>
                      <ImageBox>
                          <Image style={ImageStyle} src={'/sample 2.jpg' } alt="" fill/>
              </ImageBox>
            <Box1>
            <Box>Brand Product</Box>
            <IconWrap>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
              <Icon className="fa fa-star" aria-hidden="true"></Icon>
                </IconWrap>
                </Box1>
                  </Wrap>
          <Text>Silk Emulsion Paint</Text>
          <PriceBox>
            <Price>N 1000</Price>
            <Discount>N 2000</Discount>
          </PriceBox>  
          </Wrapper>

        </WrapBox>
         
   <MarineLoadMoreButton/>
          </Container>      
    </>
  )
}

export default MarinePaintProducts