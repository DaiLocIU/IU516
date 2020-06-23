import React from 'react'
import './index.css'
const HdLayerM : React.FC = () => {
    const handleClose = () => {
        const hd_layer_m = document.getElementById('hd_layer_m');
        hd_layer_m?.classList.remove('on')
        /* hd_dim at Header_Wrap */
        const hd_dim = document.getElementById('hd_dim');
        hd_dim?.classList.remove('on')
        document.body.style.overflow = 'inherit'
        document.body.style.height = 'auto'
    }
   
    return (
        <div id="hd_layer_m" onTouchMove={handleClose}>
            <div className="layer_box">
                <div className="layer_close" onClick={handleClose}>
                    <div className="hd_all_btn2_m">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
       


}
export default HdLayerM