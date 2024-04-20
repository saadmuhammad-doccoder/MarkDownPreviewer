import { useState } from "react";
import Markdown from "react-markdown";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import remarkGfm from 'remark-gfm';
import "./App.css";

const previewString = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' \&\& lastLine \=\= \'\`\`\`\'\) \{
    return multiLineCode\;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

function App() {
  const [text, setText] = useState(previewString);

  const changeHandler = (event) => setText(event.target.value);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mw-100 main">
    <h1 className="text-white">MarkDown Previewer</h1>
    <div className="w-100">
      <div className="main container-fluid bg-dark d-flex justify-content-around align-items-center h-100 w-100 p-3">
        <textarea
          onChange={changeHandler}
          value={text}
          name=""
          id="editor"
          cols="30"
          rows="20"
          className="w-50 mh-75 fs-5 p-3"
        ></textarea>
        <div id="preview" className="markdown container w-50 mh-75 mx-3 bg-secondary text-white align-self-start p-3">
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
