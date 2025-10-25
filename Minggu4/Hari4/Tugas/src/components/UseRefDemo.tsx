import React, { useRef } from 'react';

const UseRefDemo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const scrollBox = () => {
    boxRef.current?.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div style={{ border: '2px solid teal', padding: '20px', marginBottom: '20px' }}>
      <h2>Tugas 1: useRef - DOM Access</h2>
      <input ref={inputRef} type="text" placeholder="Ketik sesuatu..." />
      <button onClick={focusInput} style={{ marginLeft: '10px' }}>
        Fokus Input
      </button>

      <div
        ref={boxRef}
        style={{
          border: '1px solid gray',
          height: '100px',
          overflowY: 'scroll',
          marginTop: '20px',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <p key={i}>Item ke-{i + 1}</p>
        ))}
      </div>

      <button onClick={scrollBox}>Scroll ke bawah</button>
    </div>
  );
};

export default UseRefDemo;
