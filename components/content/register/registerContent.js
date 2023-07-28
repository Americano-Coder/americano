import {Box} from '../../styles/box';
// TODO: check if import is actually needed here
import Feedback from '../../../public/utils/feedback';
import React from 'react';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Container,
  Radio,
  Link
} from '@nextui-org/react';
import Cookies from 'js-cookie';
import Router from 'next/router';
import axios from "axios";

export const Content = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [ktpId, setKtpId] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [gender, setgender] = React.useState("");
  const [pesan, setPesan] = React.useState("");


  const registerHandler = async () => {
    // initialize formData
    const body = {"username" : username, "email" : email, "loginPassword" : loginPassword, "phoneNumber" : phoneNumber, "ktpId" : ktpId, "birthDate" : birthDate, "gender" : gender};
    const headers = { 
       'Content-Type': 'application/json',
    };

    // send data to server
    await axios.post('https://34.101.154.14:8175/hackathon/user/auth/create', body, headers)
    .then((response) => {

        // set token on cookies
        Cookies.set('token', response.data.token);

        // redirect to dashboard
        Router.push('/service/dashboard');
    })
    .catch((error) => {
      setPesan("Register error, please try again");
    })
  };
  
  return (
    <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
      <Container
          display="flex"
          alignItems="center"
          justify="center"
          css={{ minHeight: '100vh' }}
        >
          <Card css={{ mw: '420px', p: '20px' }} variant="bordered">
            <Text
              size={24}
              css={{
                as: 'center',
                mb: '20px',
              }}
            >
              Sign Up to{' '}
              <Text b size={24} weight="bold">
                  Americano
              </Text>
            </Text>
            <Text color="error" size={18}>
               {pesan}
            </Text>
            <Input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="Username"
            />
            <Spacer y={1} />
            <Input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="Email"
            />
            <Spacer y={1} />
            <Input
                type="text"
                id="loginPassword"
                name="loginPassword"
                onChange={(e) => setLoginPassword(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="Log In Password"
            />
            <Spacer y={1} />
            <Input
                type="digit"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="Phone Number"
            />
            <Spacer y={1} />
            <Input
                type="digit"
                id="ktpId"
                name="ktpId"
                onChange={(e) => setKtpId(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="NIK"
            />
            <Spacer y={1} />
            <Input
                type="date"
                id="birthDate"
                name="birthDate"
                onChange={(e) => setBirthDate(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="Birth Date"
            />
            <Spacer y={1} />
            <Input
                type="boolean"
                id="gender"
                name="gender"
                onChange={(e) => setgender(e.target.value)}
                clearable
                fullWidth
                underlined
                color="primary"
                size="lg"
                placeholder="Gender"
            />
            <Spacer y={1} />
            <Button onPress={registerHandler}>Sign Up</Button>
            <Spacer y={1} />
            <Button color="error" css={{
                as: 'center',
              }} as={Link} href="/">
                Back to Home
            </Button>
          </Card>
        </Container>
    </Box>
  )
};
