import { Route } from 'react-router';
import Cart from './component/Cart';
import Best from './component/Category/Best';
import Event from './component/Category/Event';
import New from './component/Category/New';
import Sale from './component/Category/Sale';
import GlobalStyle from './component/common/GlobalStyle';
import Id from './component/Find/Id';
import Pwd from './component/Find/Pwd';
import Join from './component/Join';
import Login from './component/Login';
import Main from './component/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <>
        <Route component={Main} path="/" exact />
        <Route component={Best} path="/shop/goods/goods_list/best" exact />
        <Route component={New} path="/shop/goods/goods_list/new" exact />
        <Route component={Sale} path="/shop/goods/goods_list/sale" exact />
        <Route component={Event} path="/shop/goods/event" exact />
        <Route component={Join} path="/shop/member/join" exact />
        <Route component={Login} path="/shop/member/login" exact />
        <Route component={Id} path="/shop/member/find_id" exact />
        <Route component={Pwd} path="/shop/member/find_pwd" exact />
        <Route component={Cart} path="/shop/goods/goods_cart" exact />
      </>
    </>

  );
}

export default App;
