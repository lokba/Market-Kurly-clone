import { Route } from 'react-router';
import './App.css';
import Best from './component/Best';
import Cart from './component/Cart';
import Cheap from './component/Cheap';
import Id_search from './component/Id_search';
import Login from './component/Login';
import Main from './component/Main';
import New from './component/New';
import Pw_search from './component/Pw_search';
import Register from './component/Register';
import Special from './component/Special';

function App() {
  return (
    <>
      <Route component={Best} path="/best" />
      <Route component={Cart} path="/cart" />
      <Route component={Cheap} path="/cheap" />
      <Route component={Id_search} path="/id_search" />
      <Route component={Login} path="/login" />
      <Route component={Main} path="/main" />
      <Route component={New} path="/new" />
      <Route component={Pw_search} path="/pw_search" />
      <Route component={Register} path="/register" />
      <Route component={Special} path="/speical" />
    </>

  );
}

export default App;
