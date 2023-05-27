import React, { useState }  from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { validEmail } from "../../_utils/Regex";
import "../../../../styles/contact.css"

export const Contact = () => {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const validate = () => {
     if (!validEmail.test(email)) {
        setEmailErr(true);
     }
    };

    return (
        <div className='containerContact'>
            <h1>page contact</h1>
        </div>
    );
};
