'use client'
import styled from "styled-components"

export const Container = styled.section`
  margin-top: 9rem;

`
export const Card = styled.div`
  max-width: 300px;
  width:100%;
  height: 300px;
  margin: 1rem;
display: flex;
flex-direction:column;
justify-content: center; 
  transition: all .5s;
align-items: center;
cursor: pointer;
height: 280px;
border-radius: 10px;
  box-shadow:0 0 20px 0 rgb(224, 231, 253);
&:hover{
  transform: scale(1.03);
}
`
export const LineImageBox = styled.div`
  position: relative;
  width: 200px;
  margin: 1rem 0;;
  height:6px;
`
export const Wrap = styled.div`
 display: flex;
flex-direction:column;
justify-content: center; 
align-items: center;


`
export const Wrapper = styled.div`
  display: flex;
  align-items:  center;
  width: 100%;
  justify-content: center;
  @media screen and (max-width:768px){
    flex-direction: column;
  }
`

export const Text = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: 900px;
  text-transform: capitalize;
`

export const Title = styled.p`
 font-weight: 500;
 font-size: 18px;
 margin:1rem 0;
`
export const ImageBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`

export const Box = styled.div`
     background-color: #F7F8FE;
     padding:1.5rem;
     border-radius:50%;
     
`

export const Icon = styled.i`
  margin-top: 2rem;
  color: #4E5CC4;
  background-color:#F7F8FE;
  padding: 1rem;
  border-radius: 50%;
`