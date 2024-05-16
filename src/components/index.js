import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../contexts/App';
import reportWebVitals from '../contexts/reportWebVitals';
import { RestaurantProvider } from './contexts/RestaurantContext';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RestaurantProvider>
        <App />
    </RestaurantProvider>
);
 
reportWebVitals();