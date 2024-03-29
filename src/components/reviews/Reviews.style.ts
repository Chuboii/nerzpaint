'use client'

import styled from 'styled-components'

export const Container = styled.section`
margin-top: 5rem;
padding: 0rem 2rem;



@media screen and (max-width:768px){
  padding:.5rem;
  margin: 0;
  margin-top: 2rem;
}
 `
export const H4 = styled.h4`
  text-align: center;
 `
export const Title = styled.h1`
text-align: center;
font-size: 40px;
margin: .5rem 0;
font-weight: 900;
margin-bottom: 3rem;
margin-top:2rem;
@media screen and (max-width:768px){
    font-size:25px;
    margin-bottom: 1rem;
 }
 `
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
 `
export const Wrap = styled.div`
  width: 100%;
  border-radius: 20px;
border: 1px solid #4E5CC4;
  /* border-image: linear-gradient(to right, darkblue, darkorchid) 1; */
  padding:2rem 3rem;
  background-color:#F8F9FB;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 `
export const Icon = styled.i`
 font-size: 40px;
 color:black;
 `
export const Text = styled.p`
   font-size:30px;
  font-weight: 700;
  padding:0 1rem;
  border-left: 4px solid #4E5CC4;
 `

export const Comment = styled.p`
  color: rgba(0,0,0,.7);
  text-align: center;
  margin: 1rem 0;
  word-wrap: break-word; 
 `
export const Name = styled.p`
  margin: 1rem 0;
  color: black;
  text-transform:capitalize;
 `
export const ImageBox = styled.div`
 
 `
