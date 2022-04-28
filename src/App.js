
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

//COLORES: primary, secondary, error, success, warning, default, inherit, info

function App() {
  return (
    <Router>
      <nav>
        {MenuElems.map((item)=>{
            return (<Button variant="contained" className={item.class} key={uuid()}> <Link to={item.path}>{item.text}</Link></Button>);
          } )}

      </nav>
      {MenuElems.map(function showRoutes(item){
        return (<Route path={item.path} key={uuid()} exact={item.defaultRoute}>{item.componentSite}</Route>);
      })}



    </Router>
  );
} 

export default App;

