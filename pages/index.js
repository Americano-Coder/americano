import React from "react";

import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Box} from '../components/styles/box';
import {Hero} from '../components/hero';

export default function Home() {
  return (
    <Layout >
      <Nav />
      <Box as="main">

        <Hero />
      </Box>
    </Layout>
  )
}
