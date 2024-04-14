import "./App.css";

function App() {
  // let final_transcript = "";
  // let recognizing = false;

  // const speechRecognition =
  //   window.SpeechRecognition || window.webkitSpeechRecognition;
  // // Создаем экземпляр `SpeechRecognition`
  // const recognition = new speechRecognition();
  // // Свойство `continuous` определяет, продолжается ли распознавание речи после получения первого финального результата
  // recognition.continuous = true;
  // // обработка промежуточных результатов
  // recognition.interimResults = true;
  // // максимальное количество альтернатив распознанного слова
  // recognition.maxAlternatives = 3;
  // // язык
  // recognition.lang = "ru-RU";

  // recognition.onstart = () => {
  //   console.log("Распознавание голоса запущено");
  // };

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // recognition.onerror = (error: any) => {
  //   console.error(error);
  // };

  // recognition.onend = () => {
  //   console.log("Распознавание голоса закончено");
  //   if (!recognizing) return;
  //   recognition.start();
  // };

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // recognition.onresult = (e: any) => {
  //   // Промежуточные результаты обновляются на каждом цикле распознавания
  //   let interim_transcript = "";
  //   // Перебираем результаты с того места, на котором остановились в прошлый раз
  //   for (let i = e.resultIndex; i < e.results.length; i++) {
  //     // Атрибут `isFinal` является индикатором того, что речь закончилась
  //     if (e.results[i].isFinal) {
  //       // Редактируем промежуточные результаты
  //       const result = editInterim(e.results[i][0].transcript);
  //       // и добавляем их к финальному результату
  //       final_transcript += result;
  //     } else {
  //       // В противном случае, записываем распознанные слова в промежуточный результат
  //       interim_transcript += e.results[i][0].transcript;
  //     }
  //   }
  //   // Записываем промежуточные результаты в `input`
  //   final_transcript = editFinal(final_transcript);
  //   // Редактируем финальный результат
  //   final_text.value = final_transcript;
  //   // и записываем его в `textarea`
  //   interim_text.value = interim_transcript;
  // };

  // const DICTIONARY = {
  //   точка: ".",
  //   запятая: ",",
  //   вопрос: "?",
  //   восклицание: "!",
  //   двоеточие: ":",
  //   тире: "-",
  //   абзац: "\n",
  //   отступ: "\t",
  // };

  // function editInterim(s: string) {
  //   return s
  //     .split(" ")
  //     .map((word: string) => {
  //       word = word.trim();
  //       return DICTIONARY[word] ? DICTIONARY[word] : word;
  //     })
  //     .join(" ");
  // }

  // function editFinal(s) {
  //   return s.replace(/\s([\.+,?!:-])/g, "$1");
  // }

  // buttons.onclick = ({ target }) => {
  //   switch (target.className) {
  //     case "start":
  //       final_transcript = "";
  //       recognition.start();
  //       recognizing = true;
  //       final_text.value = "";
  //       interim_text.value = "";
  //       break;
  //     case "stop":
  //       recognition.stop();
  //       recognizing = false;
  //       break;
  //     case "abort":
  //       recognition.abort();
  //       recognizing = false;
  //       break;
  //     case "copy":
  //       navigator.clipboard.writeText(final_text.value);
  //       target.textContent = "Готово";
  //       const timerId = setTimeout(() => {
  //         target.textContent = "Копия";
  //         clearTimeout(timerId);
  //       }, 3000);
  //       break;
  //     case "clear":
  //       final_text.value = "";
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const onClickStart = () => {
    //
  };
  const onClickStop = () => {
    //
  };
  const onClickAbort = () => {
    //
  };
  const onClickCopy = () => {
    //
  };
  const onClickClear = () => {
    //
  };

  return (
    <div className="wrapper">
      <h1>Speech Recognition - Dictaphone</h1>
      <textarea className="final_text"></textarea>
      <input type="text" className="interim_text" />
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
      </div>
    </div>
  );
}

export default App;
