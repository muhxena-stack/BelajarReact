import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h1 className="page-title">Hubungi Kami</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea 
              id="message" 
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda di sini..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">Kirim Pesan</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;