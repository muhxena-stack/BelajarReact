// Materi 1. a

// import React, { useRef, FC } from 'react';

// interface TextInputWithFocusButtonProps {}

// const TextInputWithFocusButton: FC<TextInputWithFocusButtonProps> = () => {
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <h2>useRef: Mengakses DOM</h2>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusInput}>Fokus pada Input</button>
//     </div>
//   );
// };

// interface PersistentCounterProps {}

// const PersistentCounter: FC<PersistentCounterProps> = () => {
//   const countRef = useRef<number>(0);

//   const increment = () => {
//     countRef.current += 1;
//     console.log('Count (ref):', countRef.current);
//   };

//   return (
//     <div>
//       <h2>useRef: Menyimpan Nilai Persisten</h2>
//       <p>Nilai dalam ref (cek konsol): {countRef.current}</p>
//       <button onClick={increment}>Tambah Ref</button>
//       <p>
//         *Perubahan nilai ref tidak memicu re-render. Untuk melihat perubahan di UI,
//         Anda perlu memicu re-render secara manual (misalnya dengan state lain).
//       </p>
//     </div>
//   );
// };

// const App: FC = () => {
//   return (
//     <div>
//       <TextInputWithFocusButton />
//       <hr />
//       <PersistentCounter />
//     </div>
//   );
// };

// export default App;

// =========================================

// b

import React, { useRef, forwardRef, FC } from 'react';

interface InputKustomProps {
  placeholder?: string;
  style?: React.CSSProperties;
}

const InputKustom = forwardRef<HTMLInputElement, InputKustomProps>((props, ref) => {
  return (
    <input type="text" ref={ref} {...props} style={{ padding: '8px', border: '1px solid #ccc', ...props.style }} />
  );
});

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = 'Fokus dari Induk!';
    }
  };

  return (
    <div>
      <h2>forwardRef: Meneruskan Ref ke Komponen Kustom</h2>
      <InputKustom ref={inputRef} placeholder="Ketik sesuatu..." />
      <button onClick={handleClick}>Fokus dan Isi Input Kustom</button>
    </div>
  );
};

export default App;