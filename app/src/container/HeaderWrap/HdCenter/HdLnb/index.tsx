import React from 'react';

import './index.css';

const HdLnb : React.FC = () => (
  <ul className="hd_m_lnb">
    <li>
      <a href="#" className="hd_m_cart">
        <strong>0</strong>
      </a>
      <span style={{ display: 'none' }}>Shopping Cart</span>
    </li>
    <li>
      <a href="#" className="hd_m_search" />
      <span style={{ display: 'none' }}>Search</span>
    </li>
  </ul>
);

export default HdLnb;
