import React from 'react';
import { useState } from "react";
import "../../../../styles/subscribe.css";
import { SignUp } from "../admin/authentication/SignUp";
import { AssociationForm } from "../admin/authentication/AssociationForm";
import { TeacherForm } from "../admin/authentication/TeacherForm";
import { CommonInfo } from "../admin/authentication/CommonInfo";


const Subscribe = () => {
    const [page, setPage] = useState(0);
    const [x, setX] = useState(0);
    const componentList = [
        <CommonInfo
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <TeacherForm
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <AssociationForm
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
        <SignUp
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
        />,
    ];
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
        nickname: "",
        email: "",
        address: "",
        nationality: "",
        zipcode: "",
        highestQualification: "",
        occupation: "",
        about: "",
    });

    return (
        <div style={{padding: 100}}>
            <h1>Je suis le future multistep form</h1>

            <div className="subscribe">
                <div className="progress-bar">
                    <div style={{width: page === 0? "25%": page === 1? "50%": page === 2? "75%" : "100%"}}></div>
                </div>
                <div>{componentList[page]}</div>
            </div>
        </div>
    );
};

export default Subscribe;