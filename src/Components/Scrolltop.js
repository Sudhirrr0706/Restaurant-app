import React from 'react'
import { useEffect,useState } from 'react';
import { useWindowScroll } from 'react-use';
import './CSS/scrollTop.css'
export const Scrolltop = () => {
    const {y: pageYOffset} = useWindowScroll();
    const[ visible,setVisibility]=useState(false);

    useEffect(()=>{
        if(pageYOffset > 40){
            setVisibility(true);
        }
        else{
            setVisibility(false);
        }
    },[pageYOffset]);

    const onClickToScrollTop=()=> window.scrollTo({top: 0 , behaviour:"smooth"})

    if(!visible){
        return false;
    }
    return (
        <div className="scroll-top" onClick={onClickToScrollTop}>
            <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}