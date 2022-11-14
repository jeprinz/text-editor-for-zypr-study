import React, { useRef, ReactElement } from "react";
import * as ReactDOM from 'react-dom';

import Editor  from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import { monacoConfig2 } from "./monacoConfig";

monacoConfig2();

function App() : ReactElement{
  const editorRef = useRef(null);
  function handleEditorDidMount(editor:any, monaco:any){
    editorRef.current = editor;
  }
  // see in @monaco-editor/react page, looks for getValue later!
  function doThing(){
     // @ts-ignore
    const editor = editorRef.current;
     // @ts-ignore
    var markers = [{
        severity: monaco.MarkerSeverity.Error,
     // @ts-ignore
        message: "You are not allowed to type " + editor.getValue().split("\n")[0],
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: 1,
     // @ts-ignore
        endColumn: editor.getModel().getLineLength(1) + 1
    }];
     // @ts-ignore
    monaco.editor.setModelMarkers(editor.getModel(), "owner", markers)
  }
  return (
   <>
    <button onClick={doThing}>Check for errors</button>
    <Editor
      height="90vh"
      defaultLanguage="mylang"
      defaultValue="test134"
      onMount={handleEditorDidMount}
    />
   </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
