import Intro from "./Intro";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const Game = () => {
	return (
	  <div>
		<Router basename='/'>
		  <div className='App'>
			<Switch>
			  <Route exact path='/'>
				<Intro />
			  </Route>
			  <Route path='/scene1'>
				<Scene1 />
			  </Route>
			  <Route path='/scene2'>
				<Scene2 />
			  </Route>
			  <Route path='/scene3'>
				<Scene3 />
			  </Route>
			</Switch>
		  </div>
		</Router>
	  </div>
	)
  }
  
  export default Game
