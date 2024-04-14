import { useState } from "react";
import Dictaphone from "../Dictaphone";

const DictaphoneWidgetA = () => {
  const [message, setMessage] = useState("");
  const commands = [
    {
      command: "I would like to order *",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (food: any) => setMessage(`Your order is for: ${food}`),
      matchInterim: true,
    },
    {
      command: "The weather is :condition today",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (condition: any) =>
        setMessage(`Today, the weather is ${condition}`),
    },
    {
      command: ["Hello", "Hi"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: ({ command }: any) =>
        setMessage(`Hi there! You said: "${command}"`),
      matchInterim: true,
    },
    {
      command: "Beijing",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (command: any, spokenPhrase: any, similarityRatio: any) =>
        setMessage(
          `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
        ),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    {
      command: ["eat", "sleep", "leave"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (command: any) =>
        setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "clear",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: ({ resetTranscript }: any) => resetTranscript(),
      matchInterim: true,
    },
    {
      command: "* is my name",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (name: any) => setMessage(`Hi ${name}!`),
      matchInterim: true,
    },
    {
      command: "My top sports are * and *",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (sport1: any, sport2: any) =>
        setMessage(`#1: ${sport1}, #2: ${sport2}`),
    },
    {
      command: "Goodbye",
      callback: () => setMessage("So long!"),
      matchInterim: true,
    },
    {
      command: "Pass the salt (please)",
      callback: () => setMessage("My pleasure"),
    },
  ];

  return (
    <div>
      <h3>Dictaphone</h3>
      <p>{message}</p>
      <Dictaphone commands={commands} />
    </div>
  );
};

export default DictaphoneWidgetA;
