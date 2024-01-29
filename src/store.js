import { create } from "zustand";

export const useStore = create((set) => ({
    text: "",
    editText: (newText) => set({ text: newText }),
}))