import IPost from "../../models/IPost.ts";
import './style.css'
import React from "react";
import {useRef} from "react";
import {usePopUpStore} from "../../state/modalStore.ts";


const PopUp = ({title, text, tags, img_2x, date, views}: IPost) => {
    const ref = useRef<null | HTMLDivElement>(null)
    const hidePopUp = usePopUpStore(state => state.hide)
    const overflowHandler = (e: React.MouseEvent<HTMLDivElement>)=>{
        if(e.target === ref.current){
            hidePopUp()
        }
    }
    return (
        <div className={'popup_overflow'} onClick={(e)=>overflowHandler(e)} ref={ref}>
            <div className={'modal-window'} >
                <button className={'close-popup'} onClick={()=>{hidePopUp()}}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
                <h6 className={'modal-title'}>{title}</h6>
                <p className={'modal-text'}>{text}</p>
                <img src={img_2x} className={'modal-img'} alt=""/>
                <div className={'modal-info'}>
                    <span className={'modal-date'}>{date}</span>
                    <span className={'modal-views'}>
                         <svg className={'view-icon'} width="auto" height="20px" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
                              fill="#000000"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                              fill="#000000"/>
                    </svg>
                        {views}</span>
                    <span className={'modal-tags'}>#{tags}</span>
                </div>
            </div>
        </div>

    );
};

export default PopUp