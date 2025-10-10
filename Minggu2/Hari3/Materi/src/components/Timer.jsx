import React, { useState, useEffect } from "react";

// Komponen Timer — menampilkan waktu yang terus bertambah setiap detik
export default function Timer() {
  // State untuk menyimpan waktu dalam satuan detik
  const [time, setTime] = useState(0);

  // useEffect dipakai untuk menjalankan efek samping (side effect)
  // dalam hal ini: membuat interval agar waktu bertambah setiap detik
  useEffect(() => {
    // Buat interval yang berjalan setiap 1000ms (1 detik)
    const intervalId = setInterval(() => {
      // Gunakan functional update agar pembaruan state selalu akurat
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Fungsi cleanup: akan dijalankan ketika komponen di-unmount
    // Tujuannya agar interval berhenti dan tidak menyebabkan memory leak
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Array kosong → efek hanya dijalankan sekali saat komponen pertama kali dimount

  // Tampilkan waktu ke layar
  return (
    <div>
      <h2>Timer: {time} detik</h2>
    </div>
  );
}
