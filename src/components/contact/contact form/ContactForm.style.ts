'use client'

import styled from "styled-components"

export const Container = styled.form`
display: flex;
flex-direction: column;
align-items:flex-start;
width: 100%;

@media screen and (max-width:768px) {
  margin-top:2rem;
}
`
export const Input = styled.input`
  background:#F4F4F4;
  width: 100%;
margin: .5rem ;
  padding:.8rem 1rem;
  border-radius: 5px;
`
export const Textarea = styled.textarea`
width: 95%;
height: 200px;
margin: .5rem;
background:#F4F4F4;
border-radius: 5px;
padding:.8rem 1rem;
`
export const Button = styled.button`
background-color: orangered;
color: white; 
padding:1rem 1.5rem;
border-radius: 7px;
margin-top: 1rem;
`
export const Wrap = styled.div`
display: flex;
width: 100%;
`