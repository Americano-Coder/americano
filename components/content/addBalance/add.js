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
    const [receiverAccountNo, setReceiverAccountNo] = React.useState("");
    const [pesan, setPesan] = React.useState("");


    const addBalanceHandler = async () => {
        // initialize formData
        const body = { "balance": balance, "receiverAccountNo": receiverAccountNo };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookies.get('token'),
        };

        var requestOptions = {
            method: 'POST',
            headers: headers,
            body: body
        };

        console.log(requestOptions)
        console.log(Cookies.get('token'))

        // send data to server
        fetch('http://34.101.154.14:8175/hackathon/bankAccount/addBalance', requestOptions)
            .then((response) => {

                console.log(response)

                // redirect to dashboard
                Router.push('/');
            })
            .catch((error) => {
                setPesan("error adding balance, please try again");
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
                    <Input
                        type="number"
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
                    <Button onPress={addBalanceHandler}>Add</Button>
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
