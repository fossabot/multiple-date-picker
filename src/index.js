import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ko';
// Components
import MultiDatePicker from '@Cal/MultiDatePicker';

const App = () => {
  return (
    <React.StrictMode>
      <MultiDatePicker />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
