'use client'
import styled from "styled-components";


export const Container = styled.section`
  margin-top: 5rem;

`
export const Wrapper = styled.div`
  background-image: linear-gradient(to right, #CED1ED, white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 1rem;
`
export const Title = styled.h1`
 font-size: 55px;
 font-weight: 700;
 max-width: 500px;
 text-align: center;

 @media screen and (max-width: 768px) {
   font-size: 45px;
 }
`
export const SubText = styled.p`
 max-width: 700px;
 text-align: center;
 margin-top: 1rem;
`
export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
export const Textarea = styled.textarea`
 border: 1px solid rgba(0,0,0,.4);
  width: 100%;
  padding: 1rem 2.5rem;
  border-radius: 10px;
  height: 200px;
`
export const Form = styled.form`
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
export const Wrap = styled.div`
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
  margin:0;
 }
`
export const Label = styled.label`
  margin: 1rem 0;
  display: inline-block;
  font-size: 15px;
  @media screen and (max-width: 768px) {
   margin:.5rem 0 ;
 }
`
export const Input = styled.input`
 border: 1px solid rgba(0,0,0,.4);
  width: 100%;
  padding: 1rem 2.5rem;
  border-radius: 10px;
`
export const Icon = styled.div`
  position: absolute;
  left: 1rem;
  
  &:nth-of-type(3){
    top:0;
  }
`
export const Span = styled.span`
color: #4E5CC4;
`
export const FaqSection = styled.div`
  padding:0 7rem;

  @media screen and (max-width: 768px) {
   padding: 0 1rem;
 }
`
export const ContactGroup = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  margin:10rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
 }
`
export const WrapContact = styled.div`
  border-right:1px solid rgba(0,0,0,.5);
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items: center;
  margin:1.5rem;
  
  &:last-child{
    border:none;
  }

  @media screen and (max-width: 768px) {
   margin:1.5rem 0;
 }
`
export const ImageBox = styled.div`
  position: relative;
  width:80px;
  height: 80px;
`
export const Text = styled.p`
  margin:1rem 0;
  font-weight:700;

`
export const Contact = styled.div`
  max-width:300px;
  text-align:center;
`
export const FaqTitle = styled.p`
  text-align:center;
   margin:1rem 0;
   font-size:40px;
   font-weight:700;
   width:100%;
   @media screen and (max-width: 768px) {
   font-size: 30px;
 }
`
export const FaqText = styled.p`
 text-align:center;
 color: #4E5CC4;
 font-weight:700;
`














