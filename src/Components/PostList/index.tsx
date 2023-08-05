import IPostList from "../../models/IPostList.ts";
import "./style.css"
import Post from "../Post";

const PostList = ({list}: IPostList) => {
    return (
        <div className={'post-list-container'}>
            <ul className={'post-list'}>
                {
                    list.map((element, index)=>{
                        return <Post title={element.title} img_2x={element.img_2x} tags={element.tags} img={element.img} date={element.date} text={element.text} views={element.views} key={index} id={index}/>
                    })
                }
            </ul>
        </div>

    );
};

export default PostList;