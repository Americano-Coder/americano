"use client";
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './resets.css';
import RootLayout from '../layout';

const root = ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootLayout>
      <div>
        <App />
      </div>
    </RootLayout>,
);
