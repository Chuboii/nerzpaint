'use client'

import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 2rem;
  position: relative;
  bottom: 0rem;
  margin-top:8rem;
  @media screen and (max-width:768px){
    padding:0 .5rem;
    bottom: 8rem;
 }
`
export const Wrapper = styled.div`
  padding: 1rem .7rem;
  transition:all .5s;
  &:hover{
   transform: scale(1.03);
  }

`


export const Wrap = styled.div`
   
`
export const ImageBox = styled.div`
  position: relative;
  width:100%;
  height: 270px;

  @media screen and (max-width:768px){
   height:170px;
 }
`
export const IconWrap = styled.div`

`
export const Text = styled.div`
 font-weight: 600;
 font-size: 22px;
`

export const Box = styled.div`

`
export const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding:.5rem 0;
`
export const WrapBox = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 margin-top: 2rem;

 @media screen and (max-width:768px){
    grid-template-columns: 1fr 1fr;
 }

 @media screen and (min-width:768px) and (max-width:1100px){
    grid-template-columns: 1fr 1fr 1fr;
 }

 
`
export const PriceBox = styled.div`
  display: flex;
  margin-top: .3rem;
`
export const Price = styled.p`

`
export const Discount = styled.p`
text-decoration: line-through;
margin-left: .5rem;
`
export const Title = styled.h1`
  font-size:30px;
  font-weight: 700;
  padding:0 1rem;
  border-left: 4px solid #4E5CC4;
`

export const Icon = styled.div`
 color: orange;
 
 @media screen and (max-width:768px){
    font-size:14px;
 }
`
