import React, {useRef, useState} from 'react';
import '../../../../styles/app.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Box, Link} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import axios from "axios";

export default function CreateCourse() {
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [content, setContent] = useState('');
    const [createdAt, setCreatedAt] = useState('')
    const fileInputRef = useRef('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPicture(file.name);
        }
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleDateChange = (date) => {
          setCreatedAt(date);
    };
    const handleSubmit = (e) => {

        const data = {
            title: title,
            content: content,
            createdAt: createdAt,
            picture: picture
        };


        e.preventDefault();
        axios.post('http://localhost:48000/api/courses', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log('Form Data submitted', response.data);
            window.location.href = '/blog/show';
        })
        .catch((error) => {
            console.error('Error submitting form data:', error);
        })
    };

    return (
        // <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '16%',
                }}
            >
                <form onSubmit={handleSubmit} >
                    <TextField
                        className="input-field"
                        fullWidth
                        label="Title"
                        name="title"
                        variant="outlined"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        autoFocus
                        className="input-field"
                        label="Content"
                        name="content"
                        variant="outlined"
                        multiline
                        rows={8}
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="Basic date picker"
                                    name="createdAt"
                                    value={createdAt}
                                    onChange={handleDateChange}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    {/* Add additional form fields as needed */}

                    <Button type="submit" fullWidth className="customButton" variant="contained"   sx={{ mt: 3, mb: 2 }}>
                        Submit
                    </Button>
                </form>
            </Box>
        // </div>
    )
}