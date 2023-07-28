import {Link, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal/loginModal';
import {Auth} from './auth';
import {Profile} from './profile';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';

export const Nav = () => {
   const [cookie, setCookie] = useState('');
   useEffect(() => setCookie(Cookies.get('token')), []);
   const collapseItems = [
      'Home',
      'Create Question',
      'Questions',
   ];


   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <Text b color="inherit" hideIn="xs">
               Americano
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link href="/">Home</Navbar.Link>
               <Navbar.Link href="/service/create-question">Fitur 1</Navbar.Link>
               <Navbar.Link href="/service/questions">Fitur 2</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href={item=="Home" ? "/" : "/service/" + item.toLowerCase().replace(" ", "-")}
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
         </Navbar.Collapse>
         <Navbar.Content gap={cookie ? "$3" : "$10"}>
            {cookie ? <Profile /> : <ModalLogin />}
            <Auth />
         </Navbar.Content>
      </Navbar>
   );
};