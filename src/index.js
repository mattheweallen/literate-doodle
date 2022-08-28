import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));

//update from react 16 to 18
//https://stackoverflow.com/questions/62773674/react-suspense-concurrent-mode-not-working
//https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//ReactDOM.render(<Game />, document.getElementById('root'));



