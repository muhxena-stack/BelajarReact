import React from 'react';
import UseRefDemo from './components/UseRefDemo';
import PortalModal from './components/PortalModal';
import HocDemo from './components/withLogger';
import RenderPropsDemo from './components/RenderPropsDemo';

const App: React.FC = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h1>Advanced Hooks & Patterns</h1>
      <UseRefDemo />
      <PortalModal />
      <HocDemo />
      <RenderPropsDemo />
    </div>
  );
};

export default App;
