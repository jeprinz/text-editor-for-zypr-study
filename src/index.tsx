/*
Resources for learning how to use monaco:
https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-tokens-and-colors
https://ohdarling88.medium.com/4-steps-to-add-custom-language-support-to-monaco-editor-5075eafa156d
https://www.npmjs.com/package/@monaco-editor/react
*/


import React from "react";
import * as ReactDOM from 'react-dom';

import Editor  from "@monaco-editor/react";

import loader from "@monaco-editor/loader";

loader.init().then(monaco => {
  const wrapper = document.getElementById("root");
  // wrapper.style.height = "100vh";
  const properties = {
    value: "function hello() {\n\talert(\"Hello world!\");\n}",
    language:  "javascript",
  }

  let keywords = ['bingus', 'bongus', 'let'];

  monaco.languages.register({
      id: 'mylang'
  })

  monaco.languages.setMonarchTokensProvider('mylang', {
      keywords,
      tokenizer: {
          root: [
              [ /@?[a-zA-Z][\w$]*/, {
                  cases: {
                      '@keywords': 'keyword',
                      '@default': 'variable',
                  }
              }],
              [/".*?"/, 'string'],
              [/\/\//, 'comment']
          ]
      }
  });
  // monaco.editor.create(wrapper,  properties);
});

function App() {
  return (
   <Editor
     height="90vh"
     defaultLanguage="mylang"
     defaultValue="// some comment"
   />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);