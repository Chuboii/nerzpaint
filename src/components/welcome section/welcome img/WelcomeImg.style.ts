'use client'

import styled from "styled-components"

export const Container = styled.section`
    position: absolute;
    right: 0rem;
    top: 0rem;

    @media screen and (max-width:1008px){
       position:relative;
       top:1rem;
    }

`
export const ImageBox = styled.div`
   max-width:1020px;
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
  top: 7rem;
      width:750px;
    height: 450px;
    position: absolute;
    display: flex;
  right: 0rem;
  @media screen and (max-width:1100px){
       width:500px;
        position:relative;
       height: 300px;
       top: 0;
       right:3rem;
    }
`