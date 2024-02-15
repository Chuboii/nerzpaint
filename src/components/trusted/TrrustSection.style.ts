'use client'
import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding:.5rem 2rem;
  margin-top:5rem;
  @media screen and (max-width:768px){
    flex-direction: column;
    padding: .5rem ;
    position: relative;
    bottom: 8rem;
 }
`
export const Wrapper = styled.div`
 
`
export const Title = styled.h1`
  font-size:30px;
  font-weight: 700;
  padding:0 1rem;
  border-left: 4px solid #4E5CC4;
`
export const Text = styled.p`
 margin: 1.5rem 0;
 max-width:500px;
 @media screen and (max-width:768px){
   
 }
`
export const MoreButton = styled.button`
padding: 1rem 1.2rem;
background-color:#4E5CC4;
color:white;
border-radius: 7px;
margin:1rem 0;
`
export const Grid = styled.div`
  display: grid;
  width: 50%;
  margin-left: 5rem;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width:768px){
    margin:0;
    width: 100%;
    margin-top: 1rem;
 }
`
export const Wrap = styled.div`
@media screen and (max-width:768px){
    margin:1rem;
 }
`
export const Span = styled.span`
 
`
export const Count = styled.div`
  font-size: 50px;
  font-weight: 900;
  @media screen and (max-width:768px){
    font-size:35px;
  }
`
export const Icon = styled.i`
 
`