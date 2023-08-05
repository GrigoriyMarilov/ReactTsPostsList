import {create} from "zustand";

interface IPopUpStore{
    isVisible : boolean;
    id: number;
    show: (id: number)=>void;
    hide: ()=>void;
}
export const usePopUpStore = create<IPopUpStore>((set)=>({
    isVisible: false,
    id: 1,
    //Открыть попап
    show: (id: number) => set(() => ({
        isVisible: true,
        id: id,
    })),
    //Закрыть попап
    hide: () => set(() => ({
        isVisible: false,
    })),
}))