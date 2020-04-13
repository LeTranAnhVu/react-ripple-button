import React, {useRef} from "react";
import './RippleButton.scss';

const RippleButton = ({color, children, onClick, isDisabled, style, size, ...attr}) => {
    const refDot = useRef(null);
    const refDiv = useRef(null);
    const hoverEffect = (e) => {
        let statics = refDiv.current.getBoundingClientRect();
        let dx = e.clientX - statics.left;
        let dy = e.clientY - statics.top;
        refDot.current.style.clipPath = `circle(150% at ${dx}px ${dy}px)`;
    };

    const releaseEffect = (e) => {
        let statics = refDiv.current.getBoundingClientRect();
        let dx = e.clientX - statics.left;
        let dy = e.clientY - statics.top;
        refDot.current.style.clipPath = `circle(0% at ${dx}px ${dy}px)`;
    };
    return (
        <div ref={refDiv} onMouseOut={releaseEffect} onMouseEnter={hoverEffect} className='' {...attr} style={style}
             onClick={onClick}
             className={`bubble-button-div ${size} ${isDisabled ? 'disabled' : ''} ${color ? color : 'blue'}`}>
            <div ref={refDot} className='dot'/>
            <button className='bubble-button'>
                {children}</button>
        </div>
    )
};

export default RippleButton;
