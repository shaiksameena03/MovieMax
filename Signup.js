import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Signup.scss"; 

const Signup = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation check
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Mock signup process (replace with API call if needed)
        console.log("User signed up:", formData);

        // Redirect to Sign In page after successful signup
        navigate("/login");
    };

    return (
        <div className="signup-page">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                    <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
                <p className="already-account">Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </div>
    );
};

export default Signup;