import { Route } from 'react-router';
import GlobalStyle from './component/common/GlobalStyle/index';
import BestPage from './pages/BestPage';
import CartPage from './pages/CartPage';
import EventPage from './pages/EventPage';
import FindPage from './pages/FindPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NewPage from './pages/NewPage';
import SalePage from './pages/SalePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Route component={MainPage} path="/" exact />
      <Route component={BestPage} path="/shop/goods/goods_list/best" exact />
      <Route component={NewPage} path="/shop/goods/goods_list/new" exact />
      <Route component={SalePage} path="/shop/goods/goods_list/sale" exact />
      <Route component={EventPage} path="/shop/goods/event" exact />
      <Route component={JoinPage} path="/shop/member/join" exact />
      <Route component={LoginPage} path="/shop/member/login" exact />
      <Route component={FindPage} path="/shop/member/login/:find" exact />
      <Route component={CartPage} path="/shop/goods/goods_cart" exact />
    </>
  );
}

export default App;
