import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    uname: '',
    password: '',
    gender: '',
    language: '',
    termsAndConditions: false,
  });

  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = true;
    const errors = {};
    if (!formData.uname.trim()) {
      errors.uname = 'Please enter a username';
      error = false;
    }
    if (!formData.password.trim() && error) {
      error = false;
      errors.password = 'Please enter a password';
    }
    if (!formData.gender && error) {
      error = false;
      errors.gender = 'Please select a gender';
    }
    if (!formData.language && error) {
      error = false;
      errors.language = 'Please select a language';
    }

    if (!formData.termsAndConditions && error) {
      error = false;
      errors.termsAndConditions = 'Please accept the terms and conditions';
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
    } else {
      setErrorMessage({});
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Uname : </label>
        <input type='text' name='uname' onChange={handleChange} value={formData.uname} />
        {errorMessage.uname && <p style={{ color: 'red' }}>{errorMessage.uname}</p>}
        <br />
        <label>Password : </label>
        <input type='password' name='password' onChange={handleChange} value={formData.password} />
        {errorMessage.password && <p style={{ color: 'red' }}>{errorMessage.password}</p>}
        <br />
        <label>Gender : </label>
        <input type='radio' name='gender' value='male' onChange={handleChange} />
        Male
        <input type='radio' name='gender' value='female' onChange={handleChange} />
        Female
        <input type='radio' name='gender' value='other' onChange={handleChange} />
        Other
        {errorMessage.gender && <p style={{ color: 'red' }}>{errorMessage.gender}</p>}
        <br />
        <label htmlFor='language'>Language : </label>
        <select name='language' onChange={handleChange} value={formData.language}>
          <option value=''>Select</option>
          <option value='English'>English</option>
          <option value='Spanish'>Spanish</option>
          <option value='Japanese'>Japanese</option>
        </select>
        {errorMessage.language && <p style={{ color: 'red' }}>{errorMessage.language}</p>}
        <br />
        <input type='checkbox' name='termsAndConditions' onChange={handleChange} />
        Terms and Conditions
        {errorMessage.termsAndConditions && (
          <p style={{ color: 'red' }}>{errorMessage.termsAndConditions}</p>
        )}
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
