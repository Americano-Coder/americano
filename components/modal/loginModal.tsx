import React from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import Router from 'next/router';

import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
} from '@nextui-org/react';

export const ModalLogin = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);

   const [username, setUsername] = React.useState("");
   const [loginPassword, setLoginPassword] = React.useState("");
   const [pesan, setPesan] = React.useState("");

   const loginHandler = async () => {
      const url = 'http://34.101.154.14:8175/hackathon/user/auth/token';
      const body = { "username": username, "loginPassword": loginPassword };
      const headers = {
         'Content-Type': 'application/json',
      };

      try {
         // Send data to the server using the Fetch API
         const response = await axios(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
         });

         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const data = await response.json();

         // Set token on cookies
         Cookies.set('token', data.accessToken);

         // Redirect to dashboard
         Router.push('/dashboard');
      } catch (error) {
         // Assign error to state "validation"
         setPesan("Login error, please check your username/password");
      }
   };


   const closeHandler = () => {
      setVisible(false);
   };


   return (
      <div>
         <Navbar.Link onPress={handler}>Login</Navbar.Link>
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               <Text id="modal-title" size={18}>
                  Login to{' '}
                  <Text b size={18}>
                     Americano
                  </Text>
               </Text>
            </Modal.Header>
            <Text color="error" size={18}>
               {pesan}
            </Text>
            <Modal.Body>
               <Input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Username"
               />
               <Input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  onChange={(e) => setLoginPassword(e.target.value)}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Password"
               />
               <Row justify="space-between">
                  <Checkbox>
                     <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forget Password?</Text>
               </Row>
            </Modal.Body>
            <Modal.Footer>
               <Button auto flat color="error" onPress={closeHandler}>
                  Close
               </Button>
               <Button auto onPress={loginHandler}>
                  Login
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
