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
export const ImageBox2 = styled.div`
  top: 8rem;
      width:450px;
    height: 450px;
    position: absolute;
    border-radius:50%;

    /* transform:rotate(180deg); */
    display: flex;

  right: 6rem;

  transition: all .5s;
    &:hover{
      transform: scale(1.02);
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
export const ImageBox1 = styled.div`
   width:250px;
   z-index:1;
   position:relative;
   height:250px;
   right:1rem;
   top:21rem;
   border:15px solid rgba(255, 255, 255, .3);
   border-radius:50%;
`