import React from 'react';
import { createRoot } from 'react-dom/client';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<App />);
}

export default {};
