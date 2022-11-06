import React from 'react';
import { Reset } from 'styled-reset';
import {
  Main,
  LoginMain,
  LoginProfile,
  Bookmark,
  Event,
  MyPage,
  MyPost,
  MyReview,
  Notice,
  QnA,
  UserInfo,
  Community,
  Review,
  Search,
  NotFound,
  Map,
} from '../pages/Index';
// import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={LoginMain} />
          <Route path="/login/profile" exact component={LoginProfile} />
          <Route path="/mypage/bookmark" exact component={Bookmark} />
          <Route path="/mypage/event" exact component={Event} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/mypage/post" exact component={MyPost} />
          <Route path="/mypage/review" exact component={MyReview} />
          <Route path="/mypage/qna" exact component={QnA} />
          <Route path="/mypage/notice" exact component={Notice} />
          <Route path="/mypage/userInfo" exact component={UserInfo} />
          <Route path="/community" exact component={Community} />
          <Route path="/review" exact component={Review} />
          <Route path="/search" exact component={Search} />
          <Route path="/map" exact component={Map} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
