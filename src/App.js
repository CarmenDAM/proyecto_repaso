
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import uuid from 'react-uuid';
import MenuElems from './data/MenuElems';
import Button from '@mui/material/Button';

//import Button from 'react-native';
//import 'react-native';

function App() {
  return (
    <Router>
      <nav>
        {MenuElems.map((item)=>{
            return (<Button key={uuid()}> <Link to={item.path}>{item.text}</Link></Button>);
          } )}

      </nav>
      {MenuElems.map(function showRoutes(item){
        return (<Route path={item.path} key={uuid()} exact={item.defaultRoute}>{item.componentSite}</Route>);
      })}



    </Router>
  );
} 

export default App;

