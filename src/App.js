import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Main from '../src/components/Main/MainComponent';
import ProductProvider from '../src/contextt';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
