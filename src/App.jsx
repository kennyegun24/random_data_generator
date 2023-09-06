import "./App.css";
import { nouns, pronoun, verbs } from "./data/words";
import { mobile_nums } from "./data/numbers";
import { names } from "./data/names";
import { useState } from "react";

function App() {
  const numberOfTimesOfArrays = 1000;
  const sentences = 4;
  const [defaultValues, setDefaultValues] = useState({ name: "", option: "" });
  const [fields, setFields] = useState([{ name: "", option: "" }]);

  const [arr, setArr] = useState();

  function formRandomSentence() {
    const randomArticle = names[Math.floor(Math.random() * names.length)];
    const randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomArticle.word} ${randomPronoun} ${randomVerb} ${randomNoun}.`;
  }

  function generateRandomSentencesArray() {
    const sentenceCount = Math.floor(Math.random() * (sentences - 1)) + 2;
    const sentenceArray = new Array(sentenceCount)
      .fill(0)
      .map(() => formRandomSentence());

    return sentenceArray.join(" ");
  }

  function formRandomNumbers() {
    const randomNumbers = Math.floor(Math.random() * 99999999999);
    // console.log(randomNumbers);
    return randomNumbers;
  }

  function generateNumbers() {
    const numbers = new Array(1).fill(0).map(() => formRandomNumbers());
    // console.log(numbers.join(""));
    return numbers.join(" ");
  }

  function generatePhoneNumbers() {
    const sentenceArray = new Array(1).fill(0).map(() => formRandomPhone());

    return sentenceArray.join(" ");
  }

  function formRandomPhone() {
    const randumMobileNums =
      mobile_nums[Math.floor(Math.random() * mobile_nums.length)];

    return `${randumMobileNums}`;
  }

  function formNames() {
    const randomNames = names[Math.floor(Math.random() * mobile_nums.length)];

    return `${randomNames.word}`;
  }

  function generateNames() {
    const names = new Array(1).fill(0).map(() => formNames());

    return names.join(" ");
  }

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
      .then(() => {})
      .catch((error) => {});
  }

  const addField = () => {
    setFields([...fields, { name: fields.name, option: "" }]);
  };

  const updateField = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const updateSingleField = (value, name) => {
    setDefaultValues({
      ...defaultValues,
      [name]: value,
    });
  };

  const removeField = (index) => {
    const newField = fields.filter((_, ind) => ind !== index);
    setFields(newField);
  };

  const generateJson = () => {
    return new Array(numberOfTimesOfArrays).fill(0).map(() => {
      const joined = [...fields, defaultValues];
      // console.log(joined);
      const fieldObjects = joined.map((each) => ({
        [each.name]:
          each.option === "sentence"
            ? generateRandomSentencesArray()
            : each.option === "phone"
            ? generatePhoneNumbers()
            : each.option === "randDigits"
            ? // ? int(generateNumbers())
              parseInt(generateNumbers())
            : each.option === "name"
            ? generateNames()
            : null,
      }));
      // fieldObjects will produce multiple objects in an array, depending on how many objects are present in fields state.
      return Object.assign({}, ...fieldObjects);
      //The {} is the target object, and ...fieldObjects spreads the elements of the fieldObjects array into the Object.assign() function, merging all the objects into a single object.
    });
  };

  const json = () => {
    setArr(generateJson);
  };

  return (
    <div className="container padding1rem">
      <h1>Data generator (JSON and Ruby formats)</h1>

      <div className="flex justify_between">
        <div className="flex column gap2rem">
          <div className="flex align_center gap1rem">
            <input
              className="padding05rem"
              type="text"
              onChange={(e) => updateSingleField(e.target.value, "name")}
              value={defaultValues.name}
            />
            <select
              className="profilePostsButton"
              onChange={(e) => updateSingleField(e.target.value, "option")}
              value={defaultValues.option}
            >
              <option value="option">OPTIONS</option>
              <option value="name">username</option>
              <option value="first-name">first name</option>
              <option value="last-name">last name</option>
              <option value="city">city</option>
              <option value="state">state</option>
              <option value="country">country</option>
              <option value="phone">mobile number</option>
              <option value="randDigits">random digits</option>
              <option value="sentence">sentences</option>
              <option value="word">word</option>
            </select>
          </div>
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
                <option value="option">OPTIONS</option>
                <option value="name">username</option>
                <option value="first-name">first name</option>
                <option value="last-name">last name</option>
                <option value="city">city</option>
                <option value="state">state</option>
                <option value="country">country</option>
                <option value="phone">mobile number</option>
                <option value="randDigits">random digits</option>
                <option value="sentence">sentences</option>
                <option value="word">word</option>
              </select>
              <button
                style={{
                  color: "#111",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "24px",
                  border: "none",
                  background: "transparent",
                }}
                onClick={() => removeField(index)}
              >
                X
              </button>
            </div>
          ))}
          <button onClick={addField} id="button" className="profilePostsButton">
            ADD FIELD
          </button>
          <button onClick={json} className="profilePostsButton">
            Generate
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
