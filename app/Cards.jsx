import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Card(props) {
  const { src, title, Name, play, link} = props;
  return (
    <div id="main">
      <a href={link} target="_blank"><img id="image" src={src} alt="" /></a>
      <p>
        <b>Title=</b>
        {title}
      </p>
      <p>
        <b>Artist=</b>
        {Name}
      </p>
      <span>
        <b>Preview=</b>
        <ReactAudioPlayer src={play} controls />
      </span>
    </div>
  );
}

export default Card;
