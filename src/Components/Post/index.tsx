import IPost from "../../models/IPost.ts";
import "./style.css"
import {usePopUpStore} from "../../state/modalStore.ts";
const Post = ({title, text, tags, img,  date, views, id}: IPost) => {
    const openModal = usePopUpStore(state => state.show)

    return (
        <li className={'post'} onClick={()=>openModal(id)}>
            <h6 className={'post-title'}>{title}</h6>
            <p className={'post-text'}>{text}</p>
            <img src={img} className={'post-img'} alt=""/>
            <div className={'post-info'}>
                <span className={'post-date'}>
                    {date}
                </span>
                <span className={'post-views'}>
                    <svg className={'view-icon'} width="auto" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#000000"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#000000"/>
                    </svg>
                    {views}</span>
                <span className={'post-tags'}>#{tags}</span>
            </div>

        </li>
    );
};

export default Post;