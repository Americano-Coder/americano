import React from 'react';
import { Button, Row, Link, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import axios from "axios";
import Router from 'next/router';
import Feedback from "../../../public/utils/feedback";

export const DeleteButton = ({asdosOrNot}) => {

  const router = useRouter()
  const { pid } = router.query

  const deleteHandler = async () => {
    

    const headers = {
       'Authorization': 'Bearer ' + Cookies.get('token')
    };

    //send data to server
    await axios.delete(`api`, { headers })
    .then((response) => {

        // redirect to dashboard
        Cookies.remove("token");
        Router.push('/');
        
    })
    .catch((error) => {

        // assign error to state "validation"
        Feedback.notifyError("Error when deleting an account");
    })
  };

  return (
    <Row justify="flex-end">
        {asdosOrNot ? <Button size="sm" as={Link} href="/service/dashboard">Dashboard</Button> : <Button size="sm" as={Link} href="/service/history">History</Button>}
        <Spacer x={1} />
        <Button size="sm" color="error" onPress={deleteHandler}>Delete Account</Button>
    </Row>
        
  )
};
