'use client'
import styled from "styled-components";

export const Container = styled.form`
border-radius: 10px;
margin: auto;
padding: 4rem;
max-width: 800px;
width: 100%;
box-shadow:0 0 20px 0 rgb(224, 231, 253);

@media screen and (max-width: 768px) {
   padding:1rem;
 }
`
export const Group = styled.div`

`
export const Input = styled.input`
   background:#F4F4F4;
  width: 100%;
margin: .5rem ;
  padding:.8rem 1rem;
  border-radius: 5px;
`
export const Textarea = styled.textarea`
width: 100%;
height: 200px;
margin: .5rem;
background:#F4F4F4;
border-radius: 5px;
padding:.8rem 1rem;
`
export const Span = styled.span`
margin: .5rem;
color:orangered;
display: none;
`

export const Button = styled.button`
background-color: orangered;
color: white; 
padding:1.3rem 1.5rem;
border-radius: 7px;
margin: auto;
margin-top: 1rem;
width:100%;
max-width: 400px;
position: relative;
left: 50%;
transform: translate(-50%);
`
