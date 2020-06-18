import React from 'react';
import './index.css';
import logo from '../../../img/banner/madeedam.jpg';
import HdSmSlide from './HdSmSlide';
import HdSearchWrap from './HdSearchWrap/index';

const HdCenter : React.FC = () => (
  <div className="hd_center">
    <div className="w_custom_center">
      <HdSmSlide />
      <h1>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </h1>
      <HdSearchWrap />
    </div>
  </div>
);
export default HdCenter;
