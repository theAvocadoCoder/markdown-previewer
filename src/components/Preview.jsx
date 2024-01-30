import Markdown from "react-markdown";
import useStore from "../store.js";

function Preview() {
    const sourceText = useStore((state) => state.text);

    return (
        <div className="bg-slate-200 border-2 border-slate-300 shadow-md shadow-stone-300 min-h-[15rem] min-w-[15rem] sm:min-w-[20rem] md:min-w-[30rem] xl:min-w-[37rem] rounded-lg pb-4 px-1">
            <div className="flex justify-between items-center px-2 py-3">
                <p className="text-2xl text-slate-500 font-semibold">Preview</p>
            </div>
            <div className={`prose min-w-full w-full min-h-[calc(1.75rem*7)] px-2 py-3 bg-stone-100 border border-slate-300`}>
                <Markdown>
                    {sourceText}
                </Markdown>
            </div>
        </div>
    )
}

export default Preview