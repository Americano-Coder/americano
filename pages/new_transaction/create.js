import React from 'react';
import { Layout } from '../../components/navbar/layout';
import { Nav } from '../../components/navbar/navbar';
import { Box } from '../../components/styles/box';
import { Content } from '../../components/content/newTransaction/create';

export default function newTransactionPage() {
  return (
    <Layout >
      <Nav />
      <Box as="main">
        <Content />
      </Box>
    </Layout>
  )
}