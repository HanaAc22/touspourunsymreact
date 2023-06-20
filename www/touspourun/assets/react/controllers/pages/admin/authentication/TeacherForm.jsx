import React from 'react';
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
// import { motion } from "framer-motion";
>>>>>>> sarah

const TeacherForm = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title">Location Info</div>
            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <input
                type="text"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            />
            <input
                type="text"
                placeholder="Zipcode"
                value={formData.zipcode}
                onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
            />

            <button onClick={() => {setPage(page + 1);}}>
                Next
            </button>
            <br />
            <button onClick={() => {setPage(page - 1);}}>
                Previous
            </button>
        </div>
    );
};

export default TeacherForm;