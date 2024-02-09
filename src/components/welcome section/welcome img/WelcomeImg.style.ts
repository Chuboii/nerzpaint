'use client'

import styled from "styled-components"

export const Container = styled.section`
    position: absolute;
    right: 2rem;
    top: -1.5rem;

    @media screen and (max-width:1008px){
       position:relative;
       top:1rem;
    }

`
export const ImageBox = styled.div`
   width:520px;
    height: 370px;
    position:absolute;
    display: flex;
    right: 6rem;
    top: 0rem;
    @media screen and (max-width:1008px){
       position:relative;
       top:1rem;
    }
`
export const ImageBox2 = styled.div`
  top: 10rem;
      width:250px;
    height: 250px;
    position: absolute;
    display: flex;
  right: 0rem;
  @media screen and (max-width:1008px){
       top: 0rem;
       right:-1rem;
       display: none;
       transform: rotate(45deg);
    }
`