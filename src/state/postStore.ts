import {create} from "zustand";
import IPost from "../models/IPost.ts";

interface IPostStore{
    PostList : Array<IPost>;
    isFiltered: boolean;
    filteredPostList : Array<IPost>;
    fillList: (list: Array<IPost>)=>void;
    clearFilteredPostList: ()=>void;
    addInFilteredList: (item : IPost)=>void;
    changeIsFiltered: (value: boolean)=>void;
}

export const usePostStore = create<IPostStore>((set)=>({
    PostList: [],
    filteredPostList: [],
    isFiltered: false,
    //Изменить список
    fillList: (list: Array<IPost>) => set(() => ({ PostList: list})),

    clearFilteredPostList: () => set(() => ({ filteredPostList: []})),

    addInFilteredList: (item: IPost)=> set((state)=>({
        filteredPostList: [...state.filteredPostList, item]
    })),

    changeIsFiltered: (value: boolean)=>set(()=>({
        isFiltered: value
    }))
}))