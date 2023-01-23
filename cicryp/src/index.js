import React from "react";
import ReactDOM from "react-dom/client";
import App from '../src/App';
import Layout from './Components/Layout/Layout';
// import Pages from '../src/Components/Pages/Home/Banner'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
<App/>
</Layout>
);

