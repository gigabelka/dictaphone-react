/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// import { useState, useEffect } from "react";
import { useSpeechRecognition } from "./SpeechRecognition/SpeechRecognition";
import SpeechRecognition from "./SpeechRecognition/SpeechRecognition";
import "./Dictaphones.css";

export default () => {
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  console.log(transcript);

  // const [showFirstWidget, setShowFirstWidget] = useState<boolean>(true);

  const onClickStart = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "ru-RU",
    });
  };

  const onClickStop = () => {
    SpeechRecognition.stopListening;
  };

  const onClickAbort = () => {
    SpeechRecognition.abortListening;
  };

  const onClickCopy = () => {
    //
  };

  const onClickClear = () => {
    //
  };

  const onClickClearPolyfill = () => {
    SpeechRecognition.removePolyfill;
  };

  return (
    <div className="wrapper">
      <h1>Speech Recognition - Dictaphone</h1>
      <textarea className="final_text"></textarea>
      <div className="interim_text"></div>
      {/* <input type="text" className="interim_text" /> */}
      <div className="buttons">
        <button className="start" onClick={onClickStart}>
          Старт
        </button>
        <button className="stop" onClick={onClickStop}>
          Стоп
        </button>
        <button className="abort" onClick={onClickAbort}>
          Сброс
        </button>
        <button className="copy" onClick={onClickCopy}>
          Копия
        </button>
        <button className="clear" onClick={onClickClear}>
          Очистить
        </button>
        <button className="clear" onClick={onClickClearPolyfill}>
          Очистить полифилы
        </button>
      </div>
    </div>
  );
};
