import React, { useEffect } from 'react';

// HOC untuk logging aktivitas komponen
function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>, name: string) {
  const ComponentWithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`✅ ${name} Mounted`);
      return () => console.log(`❌ ${name} Unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLogger;
}

// Komponen dasar
const Message: React.FC<{ text: string }> = ({ text }) => {
  return <p>{text}</p>;
};

// Komponen hasil HOC
const LoggedMessage = withLogger(Message, 'MessageComponent');

const HocDemo: React.FC = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div style={{ border: '2px solid orange', padding: '20px', marginBottom: '20px' }}>
      <h2>Tugas 3: Higher-Order Component (HOC)</h2>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'Unmount Komponen' : 'Mount Komponen'}
      </button>
      {show && <LoggedMessage text="Ini komponen dengan logger!" />}
    </div>
  );
};

export default HocDemo;
