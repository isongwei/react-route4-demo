import {
	Switch,
	Route
} from 'react-router-dom'
import React, {
	Component
} from 'react';


import Home from "./Home.js";
import Roster from "./Roster.js";
import Schedule from "./Schedule.js";

export default class Main extends Component {



	render() {
		return (<main>
    		<Switch>
      			<Route exact path='/' component={Home}/>
      			<Route path='/roster' component={Roster}/>
      			<Route path='/schedule' component={Schedule}/>
      			
    		</Switch>
  		</main>)
	}

}