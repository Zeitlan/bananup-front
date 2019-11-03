/* eslint-disable react/prop-types */

import React from 'react'
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from 'react-pose';

import Home from '@/pages/home'
import Video from '@/pages/video'
import Categories from '@/pages/categories'
import Videos from '@/pages/videos'
import PrivacyPolicy from '@/components/privacy/privacy';
import InfoPage from '@/pages/misc/info-page';

function CustomRouter() {
  return (
    <PosedRouter>
      <Home path="/"/>
      <Video path="/video/:videoId"/>
      <Videos path="/categorie/:categoryId"/>
      <Categories path="/categories"/>
      <PrivacyPolicy path="/privacy"/>
      <InfoPage title="404" message={"Hey, what are you doing here buddy?"} default/>
      <InfoPage path="/login/success" title="Congratulations" message={"You just joined Bananup's community!"}/>
      <InfoPage path="/login/failure" title="Oops..." message={"Something went wrong... Retry later!"}/>
    </PosedRouter>)
}

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

export default CustomRouter
