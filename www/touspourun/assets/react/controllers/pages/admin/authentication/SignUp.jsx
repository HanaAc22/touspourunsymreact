import React from 'react';
import { motion } from "framer-motion";

const SignUp = ({ page, setPage, formData, setFormData }) => {
    return (
        <motion.div                            //updated the div tag
            initial={{ x: x }}
            transition={{ duration: 1 }}
            animate={{ x: 0 }}
        >
            <div className="card">
                <div className="step-title">Sign Up</div>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="form-group"
                    value={formData.fullName} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })  //setting the formData to the value input of the textfield
                    }
                />
                <input
                    type="text"
                    className="form-group"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
                <input
                    type="text"
                    className="form-group"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                <button onClick={() => {setPage(page + 1); setX(-1000); }}>
                    Next
                </button>
            </div>
        </motion.div>
    );
};

export default SignUp;