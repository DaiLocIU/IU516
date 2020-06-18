import React from 'react';
import HdTop from './HdTop';
import HdCenter from './HdCenter';
import './index.css';

const HeaderWrap : React.FC = () => (
  <div id="header_wrap">
    <div id="header">
      <div className="hd_wrapper">
        <HdTop />
        <HdCenter />
      </div>
    </div>
  </div>
);
export default HeaderWrap;
