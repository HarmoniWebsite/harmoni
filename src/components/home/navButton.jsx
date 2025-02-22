import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import arrRight from '../../assets/arrRight.svg';
import arrRightW from '../../assets/arrRightW.svg';
import arrLeft from '../../assets/arrLeft.svg';
import arrLeftW from '../../assets/arrLeftW.svg';

function NavButton() {
    const swiper = useSwiper();
    const [left, setLeft] = useState(arrLeft)
    const [right, setRight] = useState(arrRight)

    return (
        <div className="arrow">
            <div onMouseOver={() => setLeft(arrLeftW)} onMouseOut={() => setLeft(arrLeft)} onClick={() => swiper.slidePrev()} className="arrLeft">
                <img src={left} className="left" />
            </div>
            <div onMouseOver={() => setRight(arrRightW)} onMouseOut={() => setRight(arrRight)} onClick={() => swiper.slideNext()} className="arrRight">
                <img src={right} className="right" />
            </div>
        </div>
    )
}

export default NavButton;