import React from 'react'
import {Button, Link, Navbar} from '@nextui-org/react';
import Cookies from 'js-cookie';
import jwt from 'jwt-decode';

export const Profile = () => {
    let user;
    let url;
    const cookie = Cookies.get('token');

    
    if (cookie) {
        user = jwt(cookie);
        url = `/users/${user.id}`;
    }

    return (
        <Navbar.Item>
            <Button auto flat href="#">
                <Link href={ url }>
                    Profile
                </Link>
            </Button>
        </Navbar.Item>
    );
};