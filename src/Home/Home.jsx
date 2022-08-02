import React, { useState } from 'react'
import styled from 'styled-components'
import background from './../data/bg-intro-desktop.png'
import backgroundMobile from './../data/bg-intro-mobile.png'
import {mobile} from './../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1000px;
  width: 1440px;
  justify-content: space-around;
  margin: auto;
  color: white;
  background:  hsl(0, 100%, 74%) url(${background});
  ${mobile({flexDirection: 'column'})};
  ${mobile({width: '375px'})};

`
const ContainerInfo = styled.div`
  width: 40%;
  font-family: 'Poppins', sans-serif;
  ${mobile({width: '75%'})};
`
const Title = styled.h1`
  font-size: 50px;
  line-height: 60px;
  ${mobile({margin: 'auto'})};
  ${mobile({width: '60%'})};
  ${mobile({fontSize: '20px'})};
  ${mobile({lineHeight: '25px'})};
`
const P = styled.p`
  text-align: center;
  font-weight: 300;
  margin-left: 80px;
  ${mobile({fontSize: '15px'})};
  ${mobile({marginLeft: '0px'})};
`
const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  box-shadow: 0px 10px 0px rgba(0,0,0,0.2);
  ${mobile({width: '75%'})};
`
const ContainerFree = styled.div`
  position: absolute;
  top: -90px;
  left: 0px;
  padding: 20px;
  background-color:hsl(248, 32%, 49%);
  width: 590px;
  border-radius: 10px;
  box-shadow: 0px 10px 0px rgba(0,0,0,0.2);
  ${mobile({width: '90%'})};
  ${mobile({top: '-120px'})};
`
const InputFirstName = styled.input`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 2px solid lightgray;
`
const InputLastName = styled.input`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 2px solid lightgray;
`
const InputEmail = styled.input`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 2px solid lightgray;

`
const InputPassword = styled.input`

  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 2px solid lightgray;
  `
const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  background-color: hsl(154, 59%, 51%);
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 5px solid #2E8B57;
  font-size: 20px;
  color: white;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`
const FormP = styled.p`
  color: lightgray;
`
const FormPBold = styled.span`
  color:hsl(0, 100%, 74%);
  font-weight: bold;
`

const ContainerFormP = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  ${mobile({fontSize: '12px'})};
`

const Home = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorFN, setErrorFN] = useState('');
  const [errorLN, setErrorLN] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  

  const handleOnChangeName = (e) => {
    setFirstName(e.target.value);
  }
  const handleOnLastName = (e) => {
    setLastName(e.target.value);
  }
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const Validation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}]?)/g

    if(email === ''){
        setErrorEmail('Email cannot be empty!');
    }else if(!regEx.test(email)){
        setErrorEmail('Looks like this is not a email!');
    }else if(firstName === ''){
        setErrorFN("First Name cannot be empty!")
    }else if(lastName === ''){
      setErrorLN('Last Name cannot be empty!')
    }else if(password === ''){
      setErrorPassword('Password cannot be empty!')
    }
}
  const Error = styled.span`
    color: red;
  `

  return (
    <Container>
      <ContainerInfo>
        <Title>Learn to code by watching others</Title>
        <P>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable.</P>
      </ContainerInfo>
      
      <ContainerForm>
      <ContainerFree><b>Try it free 7 days</b> then $20/mo. thereafter</ContainerFree>
        <InputFirstName placeholder='First Name ' value={firstName} onChange={handleOnChangeName} /> <Error>{errorFN}</Error>
        <InputLastName placeholder='Last Name ' value={lastName} onChange={handleOnLastName} /> <Error>{errorLN}</Error>
        <InputEmail placeholder='Email Address' value={email} onChange={handleOnChangeEmail} /> <Error>{errorEmail}</Error>
        <InputPassword placeholder='Password' value={password} onChange={handleOnChangePassword} /> <Error>{errorPassword}</Error>
        <Button onClick={Validation}>CLAIN YOUR FREE TRIAL</Button>
        <ContainerFormP>
          <FormP>By clicking the button, you are agreeing to our <FormPBold>Terms and Services</FormPBold></FormP>
        </ContainerFormP>
      </ContainerForm>
    </Container>
  )
}

export default Home