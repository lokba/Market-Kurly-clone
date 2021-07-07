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


// 1. 이미지 롤링 구현하기
// 2. 카테고리 “컬리의 추천” 구현
// 3. 카테고리 이미지 달리하기
// 4. 카테고리 fixed 하기
// 5. Location 페이지 업로드시 뜨게하기
// 6. MD의 추천 수정하기
// 7. 상태 값 담아보기(회원가입, 로그인 관련)
// 8. 장바구니 ui 만들어보기
// 9. 상품검색 ui 만들어보기& 디자인 변경
