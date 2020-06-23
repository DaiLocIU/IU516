import React from 'react';
import './index.css';
import krLogo from '../../../img/commonimg/ico_kr.png';
import usLogo from '../../../img/commonimg/ico_us.png';
import cnLogo from '../../../img/commonimg/ico_cn.png';

const HdTop : React.FC = () => {
  const handleOnClickBookmark = (e:React.MouseEvent) => {
    e.preventDefault();
    alert(`${navigator.userAgent.toLocaleLowerCase().indexOf('mac') !== -1
      ? 'Cmd' : 'Ctrl'
    }+D You can register as a favorite by pressing the key`);
  };

  return (
    <div className="hd_top">
      <div className="hd_top_flex w_custom">
        <div className="hd_left">
          <a href="#" id="bookmark" onClick={handleOnClickBookmark}>Favorites</a>
          <a href="#">FAQ</a>
          <a href="#">1:1 inquiry</a>
        </div>
        <div className="hd_right">
          <div className="top_country_list_0">
            <ul>
              <li>
                <a href="#">
                  <img src={krLogo} alt="kr" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={usLogo} alt="us" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={cnLogo} alt="cn" />
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">MyPage</a></li>
            <li>
              <a href="#">
                Shopping Cart
                <strong>0</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HdTop;
