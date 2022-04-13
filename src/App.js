
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import uuid from 'react-uuid';
import MenuElems from './data/MenuElems';

//import Button from 'react-native';
//import 'react-native';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {MenuElems.map( function creaEnlace(item, index){
            return (<li key={uuid()}><Link to={item.path} default>{item.text}</Link></li>);
          } )}


        </ul>
      </nav>
      {MenuElems.map(function showRoutes(item,index){
        return (<Route path={item.path} key={uuid()} exact={item.defaultRoute}>{item.componentSite}</Route>);
      })}

{/*<Button variant="primary" type="submit" onClick={this.login}>
                Submit
              </Button>*/}

    </Router>
  );
} 

export default App;

