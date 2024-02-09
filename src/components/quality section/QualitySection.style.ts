'use client'
import styled from "styled-components"

export const Container = styled.section`
  display: flex; 
  justify-content:space-between;
  margin-top: 11rem;
  padding: 0 1rem;
  align-items: flex-start;

  @media screen and (max-width:768px){
    display: block;
    margin-top: 2rem;
  }
`
export const Wrap = styled.div`
  position: relative;
  width:100%;
  height:560px;
  margin-top:0rem;
`
export const Title = styled.h1`
  font-weight: 700;
       text-transform: uppercase;
        color: #4E5CC4;
        font-family: 'Kanit', sans-serif;
        letter-spacing: 1px;
`
export const ImageBox = styled.div`
  width:55px;
  height:55px;
  position: relative;
 
`
export const Name = styled.div`
  font-weight: 600;
`
export const Desc = styled.div`
  color:orangered;
`
export const WrapBox = styled.div`
 display: flex;
 margin-top: 3rem;
`
export const Text = styled.div`
  color:#727695;
  margin-top: 1.3rem;
`
export const Intro = styled.h1`
  font-weight: 700;
  margin-top: .5rem;
  font-size: 38px;
  text-transform: capitalize;
  margin-bottom:1rem;
`
export const WrapText = styled.div`
margin-left: 1rem;
`
export const ImageBoxLine = styled.div`
 position:relative;
 width:250px;
 height:5px;
 margin: 1.2rem 0;
`
export const Box = styled.div`
width:50%;
position:relative;
left:0rem;
top:3rem;
@media screen and (max-width:768px){
   width:100%;
   left:0;
   top:2rem;
}
`