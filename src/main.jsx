import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styled from 'styled-components';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
