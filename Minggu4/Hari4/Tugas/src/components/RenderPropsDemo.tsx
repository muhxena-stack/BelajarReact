import React, { useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (pos: MousePosition) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      style={{ border: '1px solid gray', height: '150px', position: 'relative' }}
    >
      {render(pos)}
    </div>
  );
};

const RenderPropsDemo: React.FC = () => {
  return (
    <div style={{ border: '2px solid green', padding: '20px' }}>
      <h2>Tugas 4: Render Props Pattern</h2>

      {/* Implementasi 1 - Menampilkan koordinat */}
      <MouseTracker
        render={(pos) => (
          <p style={{ position: 'absolute', top: pos.y / 10, left: pos.x / 10 }}>
            Posisi: ({pos.x}, {pos.y})
          </p>
        )}
      />

      {/* Implementasi 2 - Menampilkan bola mengikuti mouse */}
      <MouseTracker
        render={(pos) => (
          <div
            style={{
              position: 'absolute',
              top: pos.y / 4,
              left: pos.x / 4,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'red',
            }}
          />
        )}
      />
    </div>
  );
};

export default RenderPropsDemo;
