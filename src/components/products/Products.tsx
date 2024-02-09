import Image from 'next/image'
import React from 'react'
import {Container, Title, Wrapper, Wrap, ImageBox} from './Products.style'

const Products = () => {
  return (
    <>
          <Container>
              <Title>Products</Title>
              
              <Wrapper>
                  <Wrap>
                      <ImageBox>
                          <Image src={'' } alt="" fill/>
                      </ImageBox>
                  </Wrap>
              </Wrapper>
          </Container>      
    </>
  )
}

export default Products