import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';
import React from 'react';
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Container,
    Link,
} from '@nextui-org/react';
import Cookies from 'js-cookie';
import Router from 'next/router';

export const Content = () => {
    const cookie = Cookies.get('token');

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

    if (cookie == undefined) return (
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
                <Spacer x={1} />
                <Box
                    css={{
                        pt: '$13',

                        display: 'flex',
                        flexDirection: 'column',
                        gap: '$5',
                    }}
                >
                    <Box
                        css={{
                            maxWidth: '600px',
                        }}
                    >
                        <Text
                            h1
                            css={{
                                display: 'inline',
                            }}
                        >
                            Add{' '}
                        </Text>
                        <Text
                            h1
                            css={{
                                display: 'inline',
                            }}
                            color="primary"
                        >
                            Balance
                        </Text>
                    </Box>

                    <Text
                        css={{
                            color: '$accents8',
                            maxWidth: '400px',
                        }}
                        size={'$lg'}
                        span
                    >
                        Please Log in or sign up to use this feature.
                    </Text>

                    <Flex
                        css={{
                            gap: '$8',
                            pt: '$4',
                        }}
                        wrap={'wrap'}
                    >
                    </Flex>
                    <Flex
                        wrap={'wrap'}
                        css={{
                            'gap': '$8',
                            'py': '$7',
                            '@sm': {
                                py: '$4',
                            },
                        }}
                    >
                        <Flex
                            css={{
                                color: '$accents7',
                                alignItems: 'center',
                            }}
                        >
                        </Flex>
                        <Flex
                            css={{
                                color: '$accents7',
                                alignItems: 'center',
                            }}
                        >
                        </Flex>
                        <Flex
                            css={{
                                color: '$accents7',
                                alignItems: 'center',
                            }}
                        >
                        </Flex>
                    </Flex>
                </Box>
                <Box
                    css={{
                        '& img': {
                            width: '775px',
                            objectFit: 'contain',
                        },
                    }}
                >
                </Box>
            </Flex>
        </>
    )

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
