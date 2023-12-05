import React, { useState } from 'react';
import './register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'Field ini harus diisi';
      }
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak sesuai';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration form submitted:', formData);
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      registeredUsers.push(formData);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      localStorage.setItem('currentUsername', formData.username);
      setShowSuccessMessage(true);
      setFormData({
        fullName: '',
        username: '',
        phoneNumber: '',
        birthDate: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      console.log('Form contains errors. Please fill in all fields correctly.');
    }
  };

  return (
    <div className="register-container">
      {/* Sisi Kiri */}
      <div className="left-side">
      <img src="/images/regist.png" alt="Gambar Registrasi" />
      </div>

      {/* Sisi Kanan */}
      <div className="right-side">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Registrasi</h2>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Masukkan Nama Lengkap"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Masukkan Username Anda"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="phoneNumber">No HP</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Masukkan Nomor HP"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="birthDate">Tanggal Lahir</label>
              <input
                type="date"
                name="birthDate"
                placeholder="Masukkan Tanggal Lahir Anda"
                value={formData.birthDate}
                onChange={handleChange}
              />
              {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Alamat Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-group gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Laki-Laki"
                  checked={formData.gender === 'Laki-Laki'}
                  onChange={handleChange}
                />
                Laki-Laki
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Perempuan"
                  checked={formData.gender === 'Perempuan'}
                  onChange={handleChange}
                />
                Perempuan
              </label>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Masukkan Kembali Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>
          {showSuccessMessage && (
            <div className="success-message">
              Registrasi berhasil! Silakan login.
            </div>
          )}
          <button type="submit" className="register-btn">
            Register
          </button>
          <p className="login-link">
            Sudah punya akun? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
