import React from 'react'
import {Button, Link, Navbar} from '@nextui-org/react';
import {useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import Router from 'next/router';

export const Auth = () => {
    const [cookie, setCookie] = useState('');
    useEffect(() => setCookie(Cookies.get('token')), []);

    const logoutHandler = () => {
        Cookies.remove("token");
        Router.push('/');
     };

    if(cookie) {
        return (
            <Navbar.Item>
                <Button color="error" auto flat onPress={logoutHandler}>
                    Logout
                </Button>
            </Navbar.Item>
        );
    } else {
        return (
            <Navbar.Item>
                <Button auto flat as={Link} href="/auth/register">
                    Sign Up
                </Button>
            </Navbar.Item>
        );
    }
};