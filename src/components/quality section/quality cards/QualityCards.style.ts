'use client'
import styled from "styled-components";


export const Container = styled.section`
 width: 50%;
 display: flex; 
 flex-wrap: wrap;
 justify-content: flex-end;
 position: relative;
 right: 3rem;
 @media screen and (max-width:768px){
      width:100%;
      right: 0;
    }
`
export const ImageBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  
`
export const Icon = styled.i`
 color: #585FC7;
 
`

export const WrapBox = styled.div`
background-color:#F7F8FE ;
 border-radius:50%;
 margin-top:1rem;
 width:50px;
 height:50px;
 display:flex;
 justify-content: center; 
 align-items:center;
`

export const Box = styled.div`
     background-color: #F7F8FE;
     padding:1.5rem;
     border-radius:50%;
     
`

export const Card = styled.div`
width: 250px;
margin: 1rem;
display: flex;
flex-direction:column;
justify-content: center; 
align-items: center;
height: 280px;
border-radius: 10px;
  box-shadow:0 0 20px 0 rgb(224, 231, 253);

  &:nth-of-type(1){
    position:relative;
    top:8rem;
  }

  @media screen and (max-width:768px){
       position:relative;
       top:1rem;
       margin: .5rem;
       width:100%;
   &:nth-of-type(1){
    position:relative;
    top:0;
  }
    }

    @media screen and (min-width:768px) and (max-width:1100px){
       position:relative;
       top:1rem;
       margin: .5rem;
       width:80%;
   &:nth-of-type(1){
    position:relative;
    top:0;
  }
    }
`
export const Text = styled.p`
  margin-top:2rem;
`