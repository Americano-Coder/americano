import { Box } from '../../styles/box';
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
  const [balance, setBalance] = React.useState("");
  const [pesan, setPesan] = React.useState("");


  const createAccountHandler = async () => {
    // initialize formData
    const body = {"balance" : balance};
    const headers = { 
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + Cookies.get('token'),
    };

    // send data to server
    await axios.post('http://34.101.154.14:8175/hackathon/bankAccount/create', body, headers)
      .then((response) => {

        // set token on cookies
        Cookies.set('token', response.data.data.accessToken);

        // redirect to dashboard
        Router.push('/service/dashboard');
      })
      .catch((error) => {
        setPesan("Error creating account, please try again");
      })
  };

  return (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
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
            Insert{' '}
            <Text b size={24} weight="bold">
              Balance
            </Text>
          </Text>
          <Text color="error" size={18}>
            {pesan}
          </Text>
          <Input
            type="number"
            id="balance"
            name="balance"
            onChange={(e) => setBalance(e.target.value)}
            clearable
            fullWidth
            underlined
            color="primary"
            size="lg"
            placeholder="Balance"
          />
          <Spacer y={1} />
          <Button onPress={createAccountHandler}>Create</Button>
          <Spacer y={1} />
          <Button color="warning" css={{
            as: 'center',
          }} as={Link} href="/">
            Back to Home
          </Button>
        </Card>
      </Container>
    </Box>
  )
};
