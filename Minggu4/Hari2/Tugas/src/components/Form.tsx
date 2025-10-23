import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const [data, setData] = useState<FormData>({ name: "", email: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert(`Nama: ${data.name}, Email: ${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Input</h3>
      <input
        type="text"
        name="name"
        placeholder="Nama"
        onChange={handleChange}
        value={data.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={data.email}
      />
      <button type="submit">Kirim</button>
    </form>
  );
};

export default Form;
