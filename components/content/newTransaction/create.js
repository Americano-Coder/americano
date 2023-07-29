import { Input, Card, Button, Divider, Text, Link, Spacer } from '@nextui-org/react';
import React from 'react';
import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Router from 'next/router';
import axios from "axios";

export const Content = () => {
   const [senderAccountNo, setSenderAccountNo] = React.useState("");
   const [receiverAccountNo, setReceiverAccountNo] = React.useState("");
   const [amount, setAmount] = React.useState("");
   const [pesan, setPesan] = React.useState("");

   const newTransactionHandler = async () => {
      // initialize formData
      const body = { "senderAccountNo": senderAccountNo, "receiverAccountNo": receiverAccountNo, "amount": amount };
      const headers = {
         'Content-Type': 'application/json',
      };

      // send data to server
      await axios.post('https://34.101.154.14:8175/hackathon/bankAccount/transaction/create', body, headers)
         .then((response) => {

            // set token on cookies
            Cookies.set('token', response.data.token);

            // redirect to dashboard
            Router.push('/service/dashboard');
         })
         .catch((error) => {
            setPesan("error creating new transaction, please try again");
         })
   };

   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Card css={{ mw: '420px', p: '20px' }} variant="flat" style={{ background: 'white' }}>
               <Text
                  size={24}
                  css={{
                     as: 'center',
                     mb: '20px',
                  }}
               >
                  New{' '}
                  <Text b size={24} weight="bold">
                     Transaction
                  </Text>
               </Text>
               <Input
                  type="digit"
                  id="senderAccountNo"
                  name="senderAccountNo"
                  onChange={(e) => setSenderAccountNo(e.target.value)}
                  clearable
                  fullWidth
                  underlined
                  color="primary"
                  size="lg"
                  placeholder="Sender Account No"
               />
               <Spacer y={1} />
               <Input
                  type="digit"
                  id="receiverAccountNo"
                  name="receiverAccountNo"
                  onChange={(e) => setReceiverAccountNo(e.target.value)}
                  clearable
                  fullWidth
                  underlined
                  color="primary"
                  size="lg"
                  placeholder="Receiver Account No"
               />
               <Spacer y={1} />
               <Input
                  type="digit"
                  id="amount"
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  clearable
                  fullWidth
                  underlined
                  color="primary"
                  size="lg"
                  placeholder="Amount"
               />
               <Spacer y={1} />
               <Button onClick={newTransactionHandler}>Create</Button>
               <Spacer y={1} />
               <Button color="warning" css={{
                  as: 'center',
               }} as={Link} href="/">
                  Back to Home
               </Button>
            </Card>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <Image src="/transaction.svg" alt="transaction" width={100} height={100} />
            </Box>
         </Flex>
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
         />
      </>
   );
};
