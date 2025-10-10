import React, { useState, useEffect } from "react";

export default function WindowSizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Fungsi untuk memperbarui ukuran saat window diubah
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Tambahkan event listener saat komponen dipasang
    window.addEventListener("resize", handleResize);
    console.log("Event listener resize ditambahkan");

    // Cleanup: hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener resize dihapus");
    };
  }, []); // Array kosong → hanya dijalankan sekali saat mounting

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Pelacak Ukuran Jendela</h2>
      <p>Lebar: {size.width}px</p>
      <p>Tinggi: {size.height}px</p>
    </div>
  );
}
