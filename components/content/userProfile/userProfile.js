import React from 'react';
import { Box } from '../../styles/box';
import { useRouter } from 'next/router'
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';
import { Loading, Table, Spacer, Card, Grid } from "@nextui-org/react";
import { useState, useEffect } from 'react'


export const Content = () => {
    var user;
    var same;
    const router = useRouter()
    console.log(Cookies.get('token'))
    const cookie = Cookies.get('token');
    const { uid } = router.query

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    if (cookie) {
        user = jwt(cookie);
        same = user.uid == uid;
    }

    useEffect(() => {
        if (!router.isReady) return;

        setLoading(true)

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookies.get('token'),
        };

        var requestOptions = {
            method: 'POST',
            headers: headers,
        }

        console.log(requestOptions)

        // send data to server
        fetch('http://34.101.154.14:8175/hackathon/user/info', requestOptions)
            .then((response) => {
                console.log(response.json())
                return response.json()
            }
            )

    }, [router.isReady])

    if (isLoading) return (
        <Grid.Container justify="center">
            <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
            <Loading color="primary" size="lg" />
            </Box>
        </Grid.Container>
        
    )

    if (!data || data.httpStatus == "NOT_FOUND") return (
        <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
            <p>User Not Found</p>
        </Box>
    )


    return (
        <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
            <Card>
                <Card.Body css={{ py: "$10" }}>
                    <Table
                        aria-label="Example table with static content"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                    >
                        <Table.Header>
                            <Table.Column>NAME</Table.Column>
                            <Table.Column>VALUE</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell>Username</Table.Cell>
                                <Table.Cell> data.username </Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell>First Name</Table.Cell>
                                <Table.Cell> data.firstName </Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell>Last Name</Table.Cell>
                                <Table.Cell> data.lastName </Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell>Email</Table.Cell>
                                <Table.Cell> data.email </Table.Cell>
                            </Table.Row>
                            <Table.Row key="5">
                                <Table.Cell>Gender</Table.Cell>
                                <Table.Cell> data.gender </Table.Cell>
                            </Table.Row>
                            <Table.Row key="6">
                                <Table.Cell>Birth date</Table.Cell>
                                <Table.Cell> data.bod </Table.Cell>
                            </Table.Row>
                            <Table.Row key="7">
                                <Table.Cell>NIK</Table.Cell>
                                <Table.Cell> data.nik </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Card.Body>
                <Card.Divider />
            </Card>
            <Spacer y={1} />
        </Box>
    )
};
