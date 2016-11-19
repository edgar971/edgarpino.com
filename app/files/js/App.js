import MainApp from './components/Main';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import Styles from '../scss/all.scss';

injectTapEventPlugin();

ReactDOM.render(<MainApp />, document.getElementById('app-render'));