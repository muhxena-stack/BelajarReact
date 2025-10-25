import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          minWidth: '300px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          color: '#000',
        }}
      >
        {children}
        <br />
        <button
          onClick={onClose}
          style={{
            marginTop: '15px',
            backgroundColor: '#6b46c1',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Tutup
        </button>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

const PortalModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: '2px solid purple',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '10px',
      }}
    >
      <h2>Tugas 2: React Portal Modal</h2>
      <button
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: 'purple',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Buka Modal
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3>Halo dari Modal Portal!</h3>
        <p>Ini dirender di luar root utama React.</p>
      </Modal>
    </div>
  );
};

export default PortalModal;
