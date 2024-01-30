import Editor from "./components/Editor.jsx";
import Preview from "./components/Preview.jsx";

function App() {
  return (
    <div className="min-h-screen bg-stone-100 p-1 sm:p-3 md:p-5 w-full">
      <h1 className="w-fit text-slate-500 text-3xl font-bold mb-5 mx-auto">Markdown Previewer</h1>

      <details className="mb-5 mx-auto cursor-pointer max-w-[35rem] text-center text-slate-500">
        <summary className="w-fit mx-auto text-xl font-bold">Start typing your marked text in the editor below!</summary>
        <p className="my-3">{`Don't know markdown syntax? We got you. Tap the Tips button in the editor panel to view some basic markdown syntax tips`} from <a className="text-blue-600 underline" target="_blank" rel="noreferrer" href="https://commonmark.org/">CommonMark</a></p>

        <p>{`We've also gone ahead to set up the editor with a cool Markdown Cheat Sheet from`} <a className="text-blue-600 underline" href="https://www.markdownguide.org" target="_blank" rel="noreferrer">The Markdown Guide</a>.</p>
      </details>

      <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-center lg:items-start w-full">
        <Editor />
        <Preview />
      </div>

    </div>
  )
}

export default App
