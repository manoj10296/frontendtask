import React,{Component} from 'react';
import './App.css';
import Character from './Character';
import 'tachyons';
import {Route,Switch} from 'react-router-dom'
import CharacterProfile from './Characterprofile';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <React.Fragment>
      <Switch>
       
        <Route path='/profile' component={CharacterProfile}></Route>
        <Route exact path='/' component={Character}></Route>
      </Switch>
    </React.Fragment> );
  }
}
 
export default App;