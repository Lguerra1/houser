import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';


export default (
    <Switch>

       <Route component={ Dashboard} path="/Dashboard" /> 
       <Route component={ Wizard } path="/Wizard" />


    </Switch>
)




