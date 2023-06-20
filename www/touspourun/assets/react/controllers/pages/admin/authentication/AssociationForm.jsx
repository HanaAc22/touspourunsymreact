import React from 'react';
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
// import { motion } from "framer-motion";
>>>>>>> sarah

const AssociationForm = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title">Other Info</div>
            <input
                type="text"
                placeholder="Highest Qualification"
            />
            <input
                type="text"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={(e) =>
                    setFormData({ ...formData, occupation: e.target.value })
                }
            />
            <textarea
                type="text"
                placeholder="About"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            />
            <br />
            <button>
                Submit
            </button>
            <br />
            <button onClick={() => {setPage(page - 1);}}>
                Previous
            </button>
        </div>
    );
};

export default AssociationForm;