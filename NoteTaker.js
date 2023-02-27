import React, { useState } from "react";
import Dropzone from "react-dropzone";

function NoteTaker() {
  const [noteText, setNoteText] = useState("");
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleNoteTextChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with noteText and image data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={noteText}
          onChange={handleNoteTextChange}
          placeholder="Write your note here..."
        />
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop an image, or click to select file</p>
            </div>
          )}
        </Dropzone>
        <button type="submit">Save Note</button>
      </form>
      {image && (
        <div>
          <img src={image} alt="Note Image" />
        </div>
      )}
    </div>
  );
}

export default NoteTaker;
