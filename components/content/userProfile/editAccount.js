import React from 'react';
import { Input, Button, Row, Text, Spacer, Card } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { useState } from 'react'
import Cookies from 'js-cookie';
import axios from "axios";
import Router from 'next/router';
import Feedback from "../../../public/utils/feedback";

export const EditAccount = () => {
    const router = useRouter();
    const { pid } = router.query;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");    

    const registerHandler = async () => {
       
        const body = {"firstName" : firstName, "lastName" : lastName, "password" : password};
        const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookies.get('token')
        };
    
        // send data to server
        await axios.patch(`api`, body, { headers })
        .then(() => {
            Router.reload();
        })
        .catch((error) => {
    
            // assign error to state "validation"
            Feedback.notifyError("Error when editing an account");
        })
      };

    return (
        <>
            <Card>
                <Card.Header>
                    <Text b>Edit Account</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Input
                        clearable
                        color="default"
                        label="First Name"
                        placeholder="Enter Your First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Spacer y={0.5} />
                    <Input
                        clearable
                        color="secondary"
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Spacer y={0.5} />
                    <Input.Password
                        clearable
                        color="warning"
                        type="password"
                        label="New Password"
                        placeholder="Enter Your New Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                    <Row justify="flex-end">
                        <Button size="sm" onPress={registerHandler}>Save</Button>
                    </Row>
                </Card.Footer>
            </Card>

            <Spacer y={1} />
        </>
    )
};
