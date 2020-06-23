import React from 'react';
import './index.css';

const HdAll : React.FC = () => {
  const handleOnClick = () => {
    const hd_layer_m = document.getElementById('hd_layer_m')
    hd_layer_m?.classList.add('on')
    /* hd_dim at Header_Wrap */
    const hd_dim = document.getElementById('hd_dim')
    hd_dim?.classList.add('on')
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  }
  return (
    <div className="hd_all" onClick={handleOnClick}>
      <div className="hd_all_btn_m">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
;
export default HdAll;
