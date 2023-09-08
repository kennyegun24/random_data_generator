import "./App.css";

import { useState } from "react";
import {
  copyFunction,
  downloadJson,
  formAge,
  formBool,
  formCarCompany,
  formCarModel,
  formColors,
  formCountry,
  formGender,
  formLastName,
  formNames,
  formRandomNumbers,
  formRandomPhone,
  formStates,
  formYesNo,
  generateIpAddress,
  generatePassword,
  generateRandomDob,
  generateRandomSentencesArray,
  generateUserName,
} from "./helpers/functionalities";
// import { user_names } from "./data/user_names";
// import { usernames } from "./data/user_names";

function App() {
  const numberOfTimesOfArrays = 5;
  const [defaultValues, setDefaultValues] = useState({
    name: null,
    option: "",
    no: 1,
    null: false,
    null_percent: null,
  });
  const [fields, setFields] = useState([
    { name: null, option: "", no: 1, null: false, null_percent: null },
  ]);

  const [arr, setArr] = useState();

  const generateJson = () => {
    return new Array(numberOfTimesOfArrays).fill(0).map((arr, index) => {
      const joined = [defaultValues, ...fields];
      const fieldObjects = joined.map((each) => ({
        [each.name]:
          each.option === "user_name"
            ? generateUserName(each.null, each.null_percent)
            : each.option === "ip"
            ? generateIpAddress(each.null, each.null_percent)
            : each.option === "age"
            ? formAge(each.null, each.null_percent)
            : each.option === "dob"
            ? generateRandomDob(each.null, each.null_percent)
            : each.option === "id"
            ? index + 1
            : each.option === "sentence"
            ? generateRandomSentencesArray(
                each.no,
                each.null,
                each.null_percent
              )
            : each.option === "phone"
            ? formRandomPhone(each.null, each.null_percent)
            : each.option === "randDigits"
            ? parseInt(formRandomNumbers(each.null, each.null_percent))
            : each.option === "name"
            ? formNames(each.null, each.null_percent)
            : each.option === "password"
            ? generatePassword()
            : each.option === "last-name"
            ? formLastName(each.null, each.null_percent)
            : each.option === "sex"
            ? formGender(each.null, each.null_percent)
            : each.option === "bool"
            ? JSON.parse(formBool(each.null, each.null_percent))
            : each.option === "yes-no"
            ? formYesNo(each.null, each.null_percent)
            : each.option === "state"
            ? formStates(each.null, each.null_percent)
            : each.option === "country"
            ? formCountry(each.null, each.null_percent)
            : each.option === "car-model"
            ? formCarModel(each.null, each.null_percent)
            : each.option === "car-company"
            ? formCarCompany(each.null, each.null_percent)
            : each.option === "colors"
            ? formColors(each.null, each.null_percent)
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
              <option value="ip">IP address</option>
              <option value="dob">Date of birth</option>
            </select>
            <div className="flex align_center gap05rem">
              <input
                type="checkbox"
                id=""
                name="bool"
                max={5}
                onChange={(e) => updateSingleField(e.target.checked, "null")}
              />
              <span className="font10px">null?</span>
            </div>
            {defaultValues.option === "sentence" && (
              <div className="flex align_center gap05rem">
                <input
                  type="number"
                  id=""
                  style={{ width: "30px" }}
                  max={5}
                  onChange={(e) =>
                    updateSingleField(parseInt(e.target.value), "no")
                  }
                />
                <span className="font10px">how many sentences</span>
              </div>
            )}
            {defaultValues.null && (
              <div className="flex align_center gap05rem">
                <input
                  type="number"
                  id=""
                  style={{ width: "30px" }}
                  max={5}
                  onChange={(e) =>
                    updateSingleField(parseInt(e.target.value), "null_percent")
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
                <option value="ip">IP address</option>
              </select>
              <div className="flex align_center gap05rem">
                <input
                  type="checkbox"
                  id=""
                  name="bool"
                  max={5}
                  onChange={(e) => updateField(index, "null", e.target.checked)}
                />
                <span className="font10px">null?</span>
              </div>
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
              {field.null && (
                <div className="flex align_center gap05rem">
                  <input
                    type="number"
                    id=""
                    style={{ width: "30px" }}
                    max={5}
                    onChange={(e) =>
                      updateField(
                        index,
                        "null_percent",
                        parseInt(e.target.value)
                      )
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
            <button onClick={() => downloadJson(arr)}>Download JSON</button>
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
