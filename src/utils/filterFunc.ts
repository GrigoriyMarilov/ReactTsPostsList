import IPost from "../models/IPost.ts";

export const filterFunc = (value: string, addInFilterList : (element: IPost)=>void, changeIsFilter : (value: boolean)=>void, clearFilter: ()=>void, postList: Array<IPost>) => {
    clearFilter()
    if (value.length === 0) {
        changeIsFilter(false)
        return
    }
    changeIsFilter(true)
    postList.filter((element) => {
        if (element.title.includes(value) || element.tags.includes(value)) {
            addInFilterList(element)
        }
    })
}