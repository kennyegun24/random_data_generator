import "./App.css";
import {
  nouns,
  pronouns,
  verbs,
  articles,
  conjunctions,
  adjectives,
  prepositions,
} from "./data/speech";
import { mobile_nums } from "./data/numbers";
import { first_names } from "./data/names";
import { useState } from "react";
import { countries } from "./data/countries";
import { states } from "./data/states";
import { last_names } from "./data/last_names";
import { bool, sex, yes_no } from "./data/arrays";
import { car_model } from "./data/car_model";
import { car_company } from "./data/car_company";
import { colors } from "./data/colors";

function App() {
  const numberOfTimesOfArrays = 1000;
  const [defaultValues, setDefaultValues] = useState({
    name: "",
    option: "",
    no: 1,
  });
  const [fields, setFields] = useState([{ name: "", option: "", no: 1 }]);
  // const [no_of_sentence, set_No_Of_Sentences] = useState({
  //   num: 0,
  // });

  const [arr, setArr] = useState();

  function formRandomSentence() {
    // const randomName =
    //   first_names[Math.floor(Math.random() * first_names.length)];
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    const randomConjuction =
      conjunctions[Math.floor(Math.random() * conjunctions.length)];
    const randomPreposition =
      prepositions[Math.floor(Math.random() * prepositions.length)];

    return `${randomArticle} ${randomNoun} ${randomVerb} ${randomPreposition} ${randomVerb} ${randomPreposition} ${randomArticle} ${randomNoun} ${randomConjuction} ${randomPronoun} ${randomVerb} ${randomVerb}..`;
  }

  function generateRandomSentencesArray(num) {
    const sentenceCount = Math.floor(Math.random() * (num - 1)) + 2;
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

  function formRandomPhone() {
    const randumMobileNums =
      mobile_nums[Math.floor(Math.random() * mobile_nums.length)];

    return `${randumMobileNums}`;
  }

  function formNames() {
    const randomNames =
      first_names[Math.floor(Math.random() * first_names.length)];

    return `${randomNames.word}`;
  }

  function formLastName() {
    const randomNames =
      last_names[Math.floor(Math.random() * last_names.length)];

    return `${randomNames.word}`;
  }

  const generatePassword = () => {
    let length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?_-(}){[]/|=+",
      retVal = "";
    let n = charset.length;
    for (let i = 0; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };

  function formGender() {
    const randomGender = sex[Math.floor(Math.random() * sex.length)];

    return `${randomGender}`;
  }

  function formYesNo() {
    const randomYesNo = yes_no[Math.floor(Math.random() * yes_no.length)];

    return `${randomYesNo}`;
  }

  function formBool() {
    const randomBool = bool[Math.floor(Math.random() * bool.length)];

    return `${randomBool}`;
  }

  function formStates() {
    const randomState = states[Math.floor(Math.random() * states.length)];

    return `${randomState}`;
  }

  function formCountry() {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];

    return `${randomCountry}`;
  }

  function formCarModel() {
    const randomCarModel =
      car_model[Math.floor(Math.random() * car_model.length)];

    return `${randomCarModel.word}`;
  }

  function formCarCompany() {
    const randomCarCompany =
      car_company[Math.floor(Math.random() * car_company.length)];

    return `${randomCarCompany.word}`;
  }

  function formColors() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return `${randomColor.word}`;
  }

  function formAge() {
    const randomAges = Math.floor(Math.random() * 100);
    return randomAges + "yrs";
  }

  const generateJson = () => {
    return new Array(numberOfTimesOfArrays).fill(0).map((arr, index) => {
      const joined = [defaultValues, ...fields];
      const fieldObjects = joined.map((each) => ({
        [each.name]:
          each.option === "age"
            ? formAge()
            : each.option === "id"
            ? index + 1
            : each.option === "sentence"
            ? generateRandomSentencesArray(each.no)
            : each.option === "phone"
            ? formRandomPhone()
            : each.option === "randDigits"
            ? parseInt(formRandomNumbers())
            : each.option === "name"
            ? formNames()
            : each.option === "password"
            ? generatePassword()
            : each.option === "last-name"
            ? formLastName()
            : each.option === "sex"
            ? formGender()
            : each.option === "bool"
            ? JSON.parse(formBool())
            : each.option === "yes-no"
            ? formYesNo()
            : each.option === "state"
            ? formStates()
            : each.option === "country"
            ? formCountry()
            : each.option === "car-model"
            ? formCarModel()
            : each.option === "car-company"
            ? formCarCompany()
            : each.option === "colors"
            ? formColors()
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

  return (
    <div className="container padding1rem">
      <h1>Data generator (JSON and Ruby formats)</h1>

      <div className="flex justify_between gap1rem">
        <div className="flex column gap1rem height100vh width50">
          <div className="flex align_center gap05rem">
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
              <option value="id">ID</option>
              <option value="user_name">username</option>
              <option value="name">first name</option>
              <option value="last-name">last name</option>
              <option value="city">city</option>
              <option value="state">state</option>
              <option value="country">country</option>
              <option value="phone">mobile number</option>
              <option value="randDigits">random digits</option>
              <option value="sentence">sentences</option>
              <option value="word">word</option>
              <option value="colors">colors</option>
              <option value="age">age</option>
              <option value="password">password</option>
              <option value="state">state</option>
              <option value="country">country</option>
              <option value="car-model">car model</option>
              <option value="car-company">car company</option>
              <option value="sex">sex</option>
              <option value="yes-no">yes/no</option>
              <option value="bool">bool</option>
            </select>
            {defaultValues.option === "sentence" && (
              <div className="flex align_center gap05rem">
                <input
                  type="number"
                  id=""
                  style={{ width: "30px" }}
                  max={5}
                  // onChange={(e) => set_No_Of_Sentences(e.target.value)}
                  onChange={(e) =>
                    updateSingleField(parseInt(e.target.value), "no")
                  }
                />
                <span className="font10px">how many sentences</span>
              </div>
            )}
          </div>
          {fields.map((field, index) => (
            <div key={index} className="flex align_center gap05rem">
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
                <option value="id">ID</option>
                <option value="user_name">username</option>
                <option value="name">first name</option>
                <option value="last-name">last name</option>
                <option value="city">city</option>
                <option value="state">state</option>
                <option value="country">country</option>
                <option value="phone">mobile number</option>
                <option value="randDigits">random digits</option>
                <option value="sentence">sentences</option>
                <option value="word">word</option>
                <option value="colors">colors</option>
                <option value="age">age</option>
                <option value="password">password</option>
                <option value="state">state</option>
                <option value="country">country</option>
                <option value="car-model">car model</option>
                <option value="car-company">car company</option>
                <option value="sex">sex</option>
                <option value="yes-no">yes/no</option>
                <option value="bool">bool</option>
              </select>
              {field.option === "sentence" && (
                <div className="flex align_center gap05rem">
                  <input
                    type="number"
                    id=""
                    style={{ width: "30px" }}
                    max={5}
                    onChange={(e) =>
                      updateField(index, "no", parseInt(e.target.value))
                    }
                  />
                  <span className="font10px">how many sentences</span>
                </div>
              )}
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

// const removeDuplicateCountry = () => {
//   return [...new Set(countries)];
// };

// const destructureStatesArray = () => {
//   // array was initially like this: arr = [{ country: '', states: ['', ''] }, { country: '', states: ['', ''] }]
//   const allStates = [];
//   for (let i = 0; i <= states.length; i++) {
//     allStates.push(states[i]?.states);
//     // console.log(states[i]);
//   }

//   return allStates.flat(); // output => ['','','','','','',]
// };

// function generateNumbers() {
//   const numbers = new Array(1).fill(0).map(() => formRandomNumbers());
//   // console.log(numbers.join(""));
//   return numbers.join(" ");
// }

// function generatePhoneNumbers() {
//   const sentenceArray = new Array(1).fill(0).map(() => formRandomPhone());

//   return sentenceArray.join(" ");
// }

// function generateNames() {
//   const names = new Array(1).fill(0).map(() => formNames());

//   return names.join(" ");
// }

// function generateLastName() {
//   const names = new Array(1).fill(0).map(() => formLastName());

//   return names.join(" ");
// }

// function generateGender() {
//   const names = new Array(1).fill(0).map(() => formGender());

//   return names.join(" ");
// }

// function generateYesNo() {
//   const names = new Array(1).fill(0).map(() => formYesNo());

//   return names.join(" ");
// }

// function generateBool() {
//   const names = new Array(1).fill(0).map(() => formBool());

//   return names.join(" ");
// }

// function generateStates() {
//   const states = new Array(1).fill(0).map(() => formStates());

//   return states.join(" ");
// }

// function generateCountries() {
//   const country = new Array(1).fill(0).map(() => formCountry());

//   return country.join(" ");
// }

// function generateCarModel() {
//   const carModel = new Array(1).fill(0).map(() => formCarModel());

//   return carModel.join(" ");
// }

// function generateCarCompany() {
//   const carCompany = new Array(1).fill(0).map(() => formCarCompany());

//   return carCompany.join(" ");
// }

// function generateColors() {
//   const colors = new Array(1).fill(0).map(() => formColors());

//   return colors.join(" ");
// }
