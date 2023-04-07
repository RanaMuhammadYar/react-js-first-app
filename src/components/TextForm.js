import React, { useState } from "react";

export default function TextForm(props) {
  const handeUpClick = () => {
    setText(text.toUpperCase());
  };
  const handeLowClick = () => {
    setText(text.toLowerCase());
  };

  const handeClearClick = () => {
    setText("");
  };

  const handleUnderlineClick = () => {
    const element = document.getElementById("textarea");
    element.style.textDecoration = "underline";
    element.style.textDecorationColor = "red";
  };
  const [text, setText] = useState("");
  const setOnchange = (event) => {
    setText(event.target.value);
  };

  // const wordsCount = (text) => {
  //   let word = text.split(" ");
  //   let count = 0;
  //   word.forEach((element) => {
  //     if (element.length > 0) {
  //       count++;
  //     }
  //   });
  //   setWordCount(count);
  // };

  return (
    <>
      <div className={`container mt-5 bg-${props.mode} text-white`}>
        <form>
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">
              <h1 className="text-enter">{props.text}</h1>
            </label>
            <textarea
              name=""
              id="textarea"
              className={`form-control bg-${props.mode} text-${props.usetext}`}
              rows="8"
              onChange={setOnchange}
              value={text}
              cols="3"
            ></textarea>
          </div>
          <button
            type="button"
            className={`btn btn-${props.mode} text-${props.usetext} mx-3`}
            onClick={handeUpClick}
          >
            Conver To UperCase
          </button>

          <button
            className={`btn btn-${props.mode} text-${props.usetext} mx-3`}
            onClick={handeLowClick}
            type="button"
          >
            convert To LowCase
          </button>
          <button
            className={`btn btn-${props.mode} text-${props.usetext} mx-3`}
            onClick={handeClearClick}
            type="button"
          >
            convert To Clear Text
          </button>
          <button
            className={`btn btn-${props.mode} text-${props.usetext} mx-3`}
            onClick={handleUnderlineClick}
            type="button"
          >
            convert To UnderLine
          </button>
        </form>
      </div>
      <div className="container mt-5">
        bs5-grid-row
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
