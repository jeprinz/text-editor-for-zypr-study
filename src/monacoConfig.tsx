// import loader from "@monaco-editor/loader";
import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { MutableRefObject, ReactElement, useRef } from "react";

/*
This function sets up some configuration for monaco.
This is global state which defines a new "language" called mylang.
The monaco component in the react DOM can then access this language,
allowing me to define custom syntax highlighting etc.

I certianly wish that configuration didn't have to be defined
through global state like this, but hey I'm not the one who designed it.
Also, monaco wasn't originally designed to run through React, so that
adds a layer of hackiness as well.

Some webpages explaning how to do some things related to monaco and
monaco-react:

https://www.npmjs.com/package/@monaco-editor/react
https://ohdarling88.medium.com/4-steps-to-add-custom-language-support-to-monaco-editor-5075eafa156d
https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-tokens-and-colors
 */

/*
For some reason it seems like things don't work if you're not
connected to the internet. Is it getting monaco from a cdn?
*/

export const monacoConfig2 = () => {
    loader.config({monaco}); // makes it use the instance of monaco provided by webpack/node instead of the one at a central CDN
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
}

// export type MonacoError {
    // 
// }

// export function pusherror(errors){
//     // loader.init().then(monaco => {
//     //     // monaco.editor.setModelMarkers(monaco.editor.getModel(), "owner", errors);
//     //     monaco.editor.setModelMarkers()
//     // });
//         monaco.editor.setModelMarkers(monaco.editor.getModel(), "owner", [])
// }

/*
Issue to solve: it looks like monaco is being loaded from the internet.
I should figure out how to make it part of the webpack instead.
 */