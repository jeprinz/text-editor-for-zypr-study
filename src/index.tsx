import React from "react";
import * as ReactDOM from 'react-dom';

import Editor  from "@monaco-editor/react";

import { monacoConfig2 } from "./monacoConfig";

// monacoConfig2();

function App() {
  return (
   <Editor
     height="90vh"
     defaultLanguage="mylang"
     defaultValue="// some comment"
   />
  );
}

function App2() {
  return (
    <div>hello there</div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// ReactDOM.render(<App2/>, rootElement);