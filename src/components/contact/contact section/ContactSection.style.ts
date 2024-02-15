'use client'
import styled from "styled-components";


export const Container = styled.section` 
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 2rem;
   margin-top: 5rem;

`
export const Title = styled.h1`
font-size:35px;
font-weight: 700;
margin-bottom: 3rem;
`
export const ImageBox = styled.div`
width: 100%;
position: relative;
right: 1rem;

@media screen and (max-width:768px){
   right:0;
}
`
export const Wrapper = styled.div`
display: flex; 
  justify-content: space-between;
  
  @media screen and (max-width:768px){
     display:flex;
     align-items:center; 
     flex-direction:column;
    }
`
export const Box = styled.div`
 position: relative;
 width: 450px; 
 margin-right:1rem;
 height: 450px;
right: 2rem;

@media screen and (max-width:768px){
       width:300px;
       height:300px;
       right:0;
    }
`
export const BoxWrap = styled.div`
 position: absolute;
 width: 230px; 
 border-radius: 50%;
 right: 0;
 bottom: 0;
 box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
 margin-right:1rem;
 height: 230px;
 border: 10px solid rgba(255, 255, 255, .4);

 @media screen and (max-width:768px){
      right: -1rem;
      width: 160px;
      height: 160px;
    }
`