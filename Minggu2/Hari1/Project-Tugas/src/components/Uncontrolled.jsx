import React, { useRef, useState } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null); // membuat referensi ke input
  const [submittedName, setSubmittedName] = useState("");

  // Menangani submit form
  function handleSubmit(event) {
    event.preventDefault(); // cegah reload halaman
    const nameValue = nameRef.current.value; // ambil nilai langsung dari DOM
    setSubmittedName(nameValue);
    console.log("Nama yang dikirim:", nameValue);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Form Uncontrolled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama Anda"
          ref={nameRef} // hubungkan ref dengan input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "250px",
            fontSize: "16px",
          }}
        />
        <br /><br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Kirim
        </button>
      </form>

      {submittedName && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
           Nama yang dikirim: <b>{submittedName}</b>
        </p>
      )}
    </div>
  );
}

export default UncontrolledForm;
