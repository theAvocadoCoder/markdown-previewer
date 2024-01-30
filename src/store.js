import { create } from "zustand";

const useStore = create((set) => ({
    text: "",
    editText: (newText) => set({ text: newText }),
}));

export default useStore;