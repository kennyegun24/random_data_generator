import "./App.css";
import { article, nouns, pronoun, verbs } from "./data/words";
import { mobile_nums } from "./data/numbers";
import { names } from "./data/names";
import { useMemo, useState } from "react";

function App() {
  const numberOfTimesOfArrays = 1000;
  const sentences = 4;
  const [fields, setFields] = useState([{ name: "", option: "" }]);
  const [choice, setChoice] = useState({
    name: "",
    option: "",
  });

  function formRandomSentence() {
    const randomArticle = names[Math.floor(Math.random() * names.length)];
    const randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomArticle.word} ${randomPronoun} ${randomVerb} ${randomNoun}.`;
  }

  function formRandomSentenc() {
    const randumMobileNums =
      mobile_nums[Math.floor(Math.random() * mobile_nums.length)];

    return `${randumMobileNums}`;
  }

  function generateRandomSentencesArray() {
    const sentenceCount = Math.floor(Math.random() * (sentences - 1)) + 2;
    const sentenceArray = new Array(sentenceCount)
      .fill(0)
      .map(() => formRandomSentence());

    return sentenceArray.join(" ");
  }

  function generatePhoneNumbers() {
    const sentenceArray = new Array(1).fill(0).map(() => formRandomSentenc());

    return sentenceArray.join(" ");
  }

  const arr = useMemo(() => {
    return new Array(numberOfTimesOfArrays).fill(0).map(() => {
      const sentenceArray = generateRandomSentencesArray();
      const sentencArray = generatePhoneNumbers();

      return {
        // ...(fields.option === "name" && { [fields.name]: sentenceArray }),
        // ...(fields.option === "phone" && {
        //   [fields.name]: sentencArray,
        // }),
        sentence: sentenceArray,
        numbers: sentencArray,
      };
    });
  }, [fields.option, fields.name]);

  function downloadJson() {
    const json = JSON.stringify(arr, null, 2).replace(/"([^"]+)":/g, "$1:");
    const blob = new Blob([json], { type: "application/ruby" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.rb";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function copyFunction() {
    const copyText = document.querySelector("code").textContent;
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        console.log("Text copied to clipboard successfully");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  }

  const addField = () => {
    setFields([...fields, { name: fields.name, option: "" }]);
  };

  const updateField = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    console.log(updatedFields);
    setFields(updatedFields);
  };

  return (
    <div className="container padding1rem">
      <h1>Data generator (JSON and Ruby formats)</h1>

      <div className="flex justify_between">
        <div className="flex column gap2rem">
          {fields.map((field, index) => (
            <div key={index} className="flex align_center gap1rem">
              <input
                className="padding05rem"
                type="text"
                onChange={(e) => updateField(index, "name", e.target.value)}
                value={field.name}
              />
              <select
                className="profilePostsButton"
                onChange={(e) => updateField(index, "option", e.target.value)}
                value={field.option}
              >
                <option value="name">username</option>
                <option value="first-name">first name</option>
                <option value="last-name">last name</option>
                <option value="city">city</option>
                <option value="state">state</option>
                <option value="country">country</option>
                <option value="phone">mobile number</option>
                <option value="randDigits">random digits</option>
                <option value="sentences">sentences</option>
                <option value="word">word</option>
              </select>
              <strong>
                <h1>X</h1>
              </strong>
            </div>
          ))}
          <button onClick={addField} id="button" className="profilePostsButton">
            ADD FIELD
          </button>
        </div>
        <div className="width50">
          <div className="flex gap05rem">
            <button onClick={downloadJson}>Download JSON</button>
            <button onClick={copyFunction}>Copy</button>
          </div>
          <pre>
            <code className="prettyprint">
              {JSON.stringify(arr, null, 2)?.replace(/"([^"]+)":/g, "$1:")}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
