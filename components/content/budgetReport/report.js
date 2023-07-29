import { Button, Divider, Text, Link, Spacer } from '@nextui-org/react';
import React from 'react';
import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import PieChart from '../../chart/categoryAmount';
import chartPage from '../../chart/incomeOutcome'

export const Content = () => {
    const chartData = [
        ['Task', 'Hours per Day'],
        ['Food', 11],
        ['Beauty', 2],
        ['Transportation', 2],
        ['Social Life', 2],
        ['Cash', 7],
      ];
    
    const incomeOutcomeData = [
        ['Month', 'Income', 'Expense'],
        ['Jan', 1000, 400],
        ['Feb', 1170, 460],
        ['Mar', 660, 1120],
        ['Apr', 1030, 540],
        ['May', 1030, 540],
        ['Jun', 1030, 540],
        ['Jul', 1030, 540],
        ['Aug', 1030, 540],
        ['Sep', 1030, 540],
        ['Oct', 1030, 540],
        ['Nov', 1030, 540],
        ['Dec', 1030, 540],
        ];

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
                            Budget{' '}
                        </Text>
                        <Text
                            h1
                            css={{
                                display: 'inline',
                            }}
                            color="primary"
                        >
                            Report
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
                        Keep track of your budget.
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
            <PieChart data={chartData} />
            <chartPage data={incomeOutcomeData} />
            <Divider
                css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
            />
        </>
    );
};
