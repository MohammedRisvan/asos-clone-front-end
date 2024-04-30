// import { useSelector } from 'react-redux';
// const Appcounter=()=>{
//     const globeldata=useSelector(state => state);
//     // console.log(useselector,"hellow this is redux displaypart");
// return(<div>
//     <h1>Hello counter</h1>
//     <h2>{globeldata.DATAS+":- "+globeldata.count}</h2>
// </div>)
// }

// export default Appcounter;

import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyEditor = () => {
  
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [datas, setDatas] = useState([]);

  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleUnderline = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handleList = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };
  
  const handleSubmit = () => {
    setDatas([...datas, editorState.getCurrentContent().getPlainText()]);
    setEditorState(EditorState.createEmpty()); // Clear the editor after submission
  };

  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex gap-1'>
      <button className='bg-blue-700 rounded px-2 py-2  text-white text-sm font-light' onClick={handleBold}>Bold</button>
      <button className='bg-blue-700 rounded px-2 py-2  text-white text-sm font-light' onClick={handleItalic}>Italic</button>
      <button className='bg-blue-700 rounded px-2 py-2  text-white text-sm font-light' onClick={handleUnderline}>Underline</button>
      <button className='bg-blue-700 rounded px-2 py-2  text-white text-sm font-light' onClick={handleList}>List</button>
    </div>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <Editor editorState={editorState} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {datas.map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default MyEditor;



