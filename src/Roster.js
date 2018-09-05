import {
	Switch,
	Route
} from 'react-router-dom'
import React, {
	Component
} from 'react';



export default class Roster extends Component {



	render() {
		return (<div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' render={()=><h1>111</h1>}/>
      <Route path='/roster/:number' render={(e)=><h1>222</h1>}/>
    </Switch>
  </div>)
	}

}