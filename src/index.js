import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const myName = React.createElement('h1', null, 'Tianna');
const myFuture = React.createElement('p', null, 'Aspiring Software Developer');

const myTraits = [ 'Kind', 'Smart', 'Amazing'];
myTraits.map(('Kind', 'Smart', 'Amazing') )
// const myTraits1 = React.createElement('li', null, 'Kind');
// const myTraits2 = React.createElement('li', null, 'Smart');
// const myTraits3 = React.createElement('li', null, 'Amazing');

const container = React.createElement('div', "header", [myName, myFuture]);


ReactDOM.render(
  container, 
  document.getElementById('root')
);


