import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        profilePicture: null,
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name,
                position: employee.position,
                profilePicture: employee.profilePicture,
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profilePicture: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Position:</label>
                <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Profile Picture:</label>
                <input
                    type="file"
                    name="profilePicture"
                    onChange={handleFileChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;