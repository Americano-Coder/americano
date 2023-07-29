import React from "react";
import {Layout} from '../../components/navbar/layout';
import {Box} from '../../components/styles/box';
import {Content} from '../../components/content/register/registerContent';


export default function RegisterPage() {
  return (
    <Layout >
      <Box as="main">
        <Content />
      </Box>
    </Layout>
  )
}