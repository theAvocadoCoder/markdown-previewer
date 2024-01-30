import React, { useRef, useState, useEffect } from "react";
import useStore from "../store.js";
import cheatsheet from "../cheatsheet.js";
import Markdown from "react-markdown";

function Editor() {
  const editText = useStore((state) => state.editText);
  const [isDialogOpen, toggleIsDialogOpen] = useState(false);
  const editorRef = useRef(null);
  const dialogRef = useRef(null);

  const tips = [
    ["*Italic*"],
    ["**Bold**"],
    ["# Heading 1"],
    ["## Heading 2"],
    ["[Link](http://a.com)", "[Link](https://commonmark.org)"],
    ["![Image](http://url/a.png)", "![Image](https://commonmark.org/help/images/favicon.png)"],
    ["> Blockquote"],
    ["<p>* List 1</p><p>* List 2</p><p>* List 3</p>", "* List 1\n* List 2\n* List 3"],
    ["<p>1. One</p><p>2. Two</p><p>3. Three</p>", "1. One\n2. Two\n3. Three"],
    ["<p>Horizontal rule:</p><p>---<p>","Horizontal rule:\n\n---\n\n"],
    ["`Inline code` with backticks"],
    ["<p>```</p><p># code block</p><p>print '3 bacticks or'</p><p>print 'indent 4 spaces'</p><p>```</p>", "```\n# code block\nprint '3 backticks or'\nprint 'indent 4 spaces'\n```"]
  ]

  useEffect(() => {
    editorRef.current.value = cheatsheet;
    editText(cheatsheet);
    isDialogOpen
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "unset";
  }, [isDialogOpen, editorRef, editText])

  function showTips() {
    dialogRef.current.showModal();
    toggleIsDialogOpen(state => !state);
  }

  function closeTips() {
    dialogRef.current.close();
    toggleIsDialogOpen(state => !state);
  }

  function closeTipsOnBackdropClick(e) {
    let dialogBox = e.target.getBoundingClientRect();

    if (dialogBox.left > e.clientX ||
        dialogBox.right < e.clientX ||
        dialogBox.top > e.clientY ||
        dialogBox.bottom < e.clientY
    ) {
      closeTips();
    }
      
  }

  return (
    <div className="bg-slate-200 border-2 border-slate-300 shadow-md shadow-stone-300 min-h-[15rem] h-fit min-w-[19rem] sm:min-w-[25rem] md:min-w-[30rem] xl:min-w-[37rem] rounded-lg pb-3 px-1">
      <div className="flex justify-between items-center px-2 py-3">
        <p className="text-2xl text-slate-500 font-semibold">Editor</p>
        <button 
          className="border-2 border-slate-500 px-3 rounded-md text-slate-500 font-semibold hover:bg-slate-500 hover:text-slate-50"
          onClick={showTips}
        >Tips</button>
      </div>

      <dialog className="bg-slate-200 border-2 border-slate-300 shadow-md shadow-stone-300 h-[20rem] sm:h-[35rem] xl:h-[40rem] min-w-[19rem] sm:min-w-[35rem] md:min-w-[40rem] lg:min-w-[50rem] xl:min-w-[70rem] rounded-lg pt-3 px-1 backdrop:fixed backdrop:top-0 backdrop:left-0 backdrop:bottom-0 backdrop:right-0 backdrop:overflow-hidden backdrop:h-screen" ref={dialogRef} onClick={closeTipsOnBackdropClick}>
        <div className="w-full h-[calc(100%-3.25rem)] overflow-y-scroll active:outline-none px-2 py-3 bg-stone-100 border border-slate-300">
          <p>Here are some Markdown tips from <a target="_blank" rel="noreferrer" href="https://commonmark.org/help/">CommonMark</a>:</p>
          <table>
            <thead>
              <th>Type</th>
              <th>... to Get</th>
            </thead>
            <tbody>
              {
                tips.map((tip, index) => (
                  <tr key={index}>
                    <td dangerouslySetInnerHTML={{__html: tip[0]}} />
                    <td>
                      <Markdown className="prose [&_img]:w-10 [&_img]:h-auto">
                        {tip.length == 1 ? tip[0] : tip[1]}
                      </Markdown>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center px-2 py-3">
          <button autoFocus onClick={closeTips} className="border-2 border-slate-500 px-3 rounded-md text-slate-500 font-semibold hover:bg-slate-500 hover:text-slate-50">Close</button>
        </div>
      </dialog>

      <textarea 
        className="w-full min-h-full max-h-min active:outline-none px-2 py-3 bg-stone-100 border border-slate-300"
        onChange={(e) => editText(e.target.value)}
        ref={editorRef}
        rows={7}
      ></textarea>
    </div>
  )
}

export default Editor