import React, { useState } from 'react';

const ContactCard = (props) => {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    console.log("Converting to uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpChange = (event) => {
    console.log("On change clicked");
    setText(event.target.value);
  };

  const handleLwClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText(""); // Set the text to an empty string to clear it
    console.log("Text cleared");
  };

  const handleRemoveSpaceClick = () => {
    const newTextWithoutSpaces = text.replace(/\s/g, ''); // Remove white spaces using a regular expression
    setText(newTextWithoutSpaces);
    console.log("White spaces removed");
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label my-3">Enter Text</label>
        <textarea style={{backgroundColor:props.mode ==='light'?'white':'gray'}} value={text} onChange={handleUpChange} className="form-control" id="myBox" rows="14"></textarea>

        <button onClick={handleUpClick} className="btn btn-danger my-3">Convert to uppercase</button>
        <button onClick={handleLwClick} className="btn btn-primary my-3 mx-5">Convert to lowercase</button>
        <button onClick={handleClearClick} className="btn btn-danger my-3 mx-5">Clear</button>
        <button onClick={handleRemoveSpaceClick} className="btn btn-warning my-3">Remove Whitespace</button>
      </div>
     
    </>
  );
};

export default ContactCard;
