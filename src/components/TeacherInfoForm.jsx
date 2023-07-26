import React, { useState } from 'react';
import './TeacherInfoForm.css'; // Import the CSS file for styling

const TeacherInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    designation: '',
    religion: '',
    sex: '',
    dateOfBirth: '',
    fatherName: '',
    motherName: '',
    presentAddress: '',
    permanentAddress: '',
    mobileNumber: '',
    NIDNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action with the collected data here (e.g., API call, validation).
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="teacher-info-form-container">
        <h1>Teacher's Info</h1>
      <form onSubmit={handleSubmit} className="teacher-info-form">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="designation">Designation:</label>
        <input type="text" name="designation" value={formData.designation} onChange={handleChange} />

        <label htmlFor="religion">Religion:</label>
        <input type="text" name="religion" value={formData.religion} onChange={handleChange} />

        <label htmlFor="sex">Sex:</label>
        <input type="text" name="sex" value={formData.sex} onChange={handleChange} />

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

        <label htmlFor="fatherName">Father's Name:</label>
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />

        <label htmlFor="motherName">Mother's Name:</label>
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />

        <label htmlFor="presentAddress">Present Address:</label>
        <input
          type="text"
          name="presentAddress"
          value={formData.presentAddress}
          onChange={handleChange}
        />

        <label htmlFor="permanentAddress">Permanent Address:</label>
        <input
          type="text"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
        />

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />

        <label htmlFor="NIDNumber">NID Number:</label>
        <input type="text" name="NIDNumber" value={formData.NIDNumber} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TeacherInfoForm;
