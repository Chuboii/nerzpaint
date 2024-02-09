'use client'
import styled from "styled-components"


export const Container = styled.main`

`

export const ImageBox = styled.div`
  width:60px;
  height: 60px;
  top: 32rem;
  left: -2rem;
  position: absolute;

`
export const ImageBox2 = styled.div`
  width:60px;
  height: 60px;
  right: -2rem;
  position: absolute;
  @media screen and (max-width:768px){
    right:0;
    top:0;
    display:none;
  }
`
export const ImageBox3 = styled.div`
  width:40px;
  height: 40px;
  top: 7rem;
  left: 50%;
  transform: translate(-50%);

  @media screen and (max-width:768px){
    top:1rem;
    display:none;
  }
`