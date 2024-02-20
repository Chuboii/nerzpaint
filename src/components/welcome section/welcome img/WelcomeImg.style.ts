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
  top: 8rem;
      width:450px;
    height: 250px;
    position: absolute;
    display:none;
    /* transform:rotate(180deg); */
    display: flex;
  right: 0rem;
  transition: all .5s;
    &:hover{
      transform: rotate(180deg) scale(1.02);
    }
    @media screen and (min-width:0) and (max-width:768px){
       width:500px;
        position:relative;
       height: 300px;
       top: 0;
       right:3rem;
    }
  @media screen and (min-width:768px) and (max-width:1100px){
    width: 600px;
    height:400px;
    position:absolute;
       right:0rem;
       top: 9rem;
       display:none;
  }

  


`