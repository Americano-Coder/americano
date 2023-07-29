import {Link, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal/loginModal';
import {Auth} from './auth';
import {Profile} from './profile';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

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
            <Link href="/">
               <Image src="/americano_logo.png" alt="logo" width={200} height={200} />
            </Link>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link href="/new_transaction/create">New Transaction</Navbar.Link>
               <Navbar.Link href="/add_balance/add">Add balance</Navbar.Link>
               <Navbar.Link href="/budget_report/report">Budget Report</Navbar.Link>
               <Navbar.Link href="/expense_prediction/report">Predictive Expenses</Navbar.Link>
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