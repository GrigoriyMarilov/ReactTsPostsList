import Spinner from "./Components/Spinner";
import {FunctionComponent, useEffect, useState} from "react";
import Search from "./Components/Search";
import "./app.css";
import getPosts from "./api/getPosts.ts";
import PostList from "./Components/PostList";
import {usePostStore} from "./state/postStore.ts";
import {usePopUpStore} from "./state/modalStore.ts";
import PopUp from "./Components/PopUp";

const App: FunctionComponent = () => {
    const [isSpinner, setIsSpinner] = useState<boolean>(true)
    const isPopUpVisible = usePopUpStore(state => state.isVisible)
    const fillList = usePostStore(state => state.fillList)
    const fetchedPostList = usePostStore(state => state.PostList)
    const selectedPost = usePopUpStore(state => state.id)
    const filteredList = usePostStore(state => state.filteredPostList)
    const isFiltered = usePostStore(state => state.isFiltered)
    useEffect(() => {
        getPosts().then(res => {
            fillList(res?.data)
            setIsSpinner(false)
        }).catch(() => {
            alert('Ошибка')
        })
    }, [])

    return (
        <div className='app'>
            <header>
                <Search/>
            </header>
            <main>
                {isSpinner ? <Spinner/> : !isFiltered ? <PostList list={fetchedPostList}/> :
                    <PostList list={filteredList}/>}
            </main>
            {isPopUpVisible ? !isFiltered ?
                <PopUp title={fetchedPostList[selectedPost].title} id={selectedPost}
                       tags={fetchedPostList[selectedPost].tags}
                       views={fetchedPostList[selectedPost].views}
                       text={fetchedPostList[selectedPost].text} date={fetchedPostList[selectedPost].date}
                       img={fetchedPostList[selectedPost].img}
                       img_2x={fetchedPostList[selectedPost].img_2x}/> :
                <PopUp title={filteredList[selectedPost].title} id={selectedPost}
                       tags={filteredList[selectedPost].tags}
                       views={filteredList[selectedPost].views}
                       text={filteredList[selectedPost].text} date={filteredList[selectedPost].date}
                       img={filteredList[selectedPost].img}
                       img_2x={filteredList[selectedPost].img_2x}/> : ''}
        </div>
    )
}
export default App
