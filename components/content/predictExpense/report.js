import { Button, Divider, Text, Link, Spacer } from '@nextui-org/react';
import React from 'react';
import { Box } from '../../styles/box';
import { Flex } from '../../styles/flex';
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';
import PredictExpense from '../../chart/predictExpense';

export const Content = () => {
   const incomeOutcomeData = [
      ['Month', 'Expense'],
      ['Jan', 400],
      ['Feb', 460],
      ['Mar', 1120],
      ['Apr', 540],
      ['May', 573],
      ['Jun', 540],
      ['Jul', 346],
      ['Aug', 546],
      ['Sep', 345],
      ['Oct', 555],
      ['Nov', 347],
      ['Dec', 356],
   ];
   console.log(Cookies);
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
                     Expense{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     Predict
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
                  We help you predict future expenses based on historical data, so ypu can plan your budgets more effectively.
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
         <PredictExpense data={incomeOutcomeData} />
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
         />
      </>
   );
};
