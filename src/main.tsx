import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../src/store/basket/store';
import { AppRouter } from './router/AppRouter';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <AppRouter/>
      </BrowserRouter>
     
    </Provider>
    
  
  // </React.StrictMode>,
)
