'use client'
import styled from 'styled-components'

export const Container = styled.section`
  padding:2rem 3rem;
  margin-top: 4rem;

  
  @media screen and (max-width:768px){
    margin-top: 1rem;
    padding: 1rem;
  }
`
export const Title = styled.p`
 color: #4E5CC4;
 margin:1rem 0;
 font-weight: 600;
 text-transform: uppercase;
`
export const LineImage = styled.div`
  position:relative;
  width:200px;
  height:5px;
  margin:2rem 0;
`
export const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;
 
 @media screen and (max-width:768px){
  flex-direction: column;
 }
`
export const WrapText = styled.div`
  margin-right: 2rem;
  width: 100%;

  @media screen and (max-width:768px){
    margin: 0;
  }
`
export const Ul = styled.ul`

`
export const List = styled.li`
  margin:1.5rem 0;
  display:flex;
  cursor: pointer;
`
export const IconBox = styled.div`
 width:35px;
 height:35px;
 margin-right: 1rem;
  border-radius: 50%;
  color:black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0,0, .05);
  transition:all .4s;

  ${List}:hover & {
    color: white;
    background-color: #4E5CC4;
  }
`


export const Icon = styled.i`


`
export const WrapImage = styled.div`
  width:100%;

`
export const ImageBox2 = styled.div`
width:400px;
  height:300px;
  position:relative;
  bottom:10rem;
  z-index:-1;
  display:none;
`

export const ImageBox = styled.div`
  max-width:550px;
  width:100%;
  height: 450px;
  position: relative;
  top:5rem;
 
 
  @media screen and (max-width:768px){
    margin: 0;
    left: 0;
    top:0;
  }
`
export const Text = styled.p`
  margin-bottom: 2rem;
  
`
export const ImageBoxFaq = styled.div`
  max-width:900px;
  width:100%;
  height: 450px;
  position: relative;
  margin-right: 2rem;
  @media screen and (max-width:768px){
   display: none;
  }
`
export const SubTitle = styled.h1`
  font-size: 40px;
  font-weight:700;
  text-transform: capitalize;
  @media screen and (max-width:768px){
   font-size: 30px;
  }
`
