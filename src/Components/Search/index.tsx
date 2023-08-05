import './style.css'
import React, {useState} from "react";
import {usePostStore} from "../../state/postStore.ts";
import {filterFunc} from "../../utils/filterFunc.ts";


const Search = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const PostList = usePostStore(state => state.PostList)
    const addInFilteredList = usePostStore(state => state.addInFilteredList)
    const clearFilteredPostList = usePostStore(state => state.clearFilteredPostList)
    const changeIsFiltered = usePostStore(state => state.changeIsFiltered)


    document.onkeydown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            filterFunc(inputValue, addInFilteredList, changeIsFiltered, clearFilteredPostList, PostList)
        }
    }
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const searchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        filterFunc(inputValue, addInFilteredList, changeIsFiltered, clearFilteredPostList, PostList)
    }

    return (
        <div className="input-box">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input type="text" placeholder="Search here..." onChange={e => inputHandler(e)}/>
            <button className="button" onClick={e => searchHandler(e)}>Search</button>
        </div>
    );
};

export default Search;