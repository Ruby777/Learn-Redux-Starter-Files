import React from 'react';
import { render } from 'react-dom';

//importing css
import css from './styles/style.styl';

//import Components
import Main from './components/Main.js';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

//import react router
import { Router, Route, IndexRoute, browserHistory }

render(<Main/>, document.getElementById('root'));
