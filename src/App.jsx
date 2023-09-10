import "./App.css";

import { useState } from "react";
import {
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
  generateUrls,
  generateUserName,
} from "./helpers/functionalities";
import Preview from "./component/Preview";

function App() {
  const [fields, setFields] = useState([
    {
      name: null,
      option: "",
      no_of_sentences: 1,
      null: false,
      null_percent: null,
      max_words: 500,
    },
  ]);
  const [noOfRows, setnoOfRows] = useState(1);
  const [arr, setArr] = useState();
  const [show, setShow] = useState(false);
  const [generate, setGenerate] = useState(null);
  const [err, setErr] = useState(null);

  const generateJson = () => {
    return new Array(noOfRows).fill(0).map((arr, index) => {
      // const joined = [defaultValues, ...fields];
      const fieldObjects = fields.map((each) => ({
        [each.name]:
          each.option === "user_name"
            ? generateUserName(each.null, each.null_percent)
            : each.option === "ip"
            ? generateIpAddress(each.null, each.null_percent)
            : each.option === "age"
            ? formAge(each.null, each.null_percent)
            : each.option === "url"
            ? generateUrls(each.null, each.null_percent)
            : each.option === "dob"
            ? generateRandomDob(each.null, each.null_percent)
            : each.option === "id"
            ? index + 1
            : each.option === "sentence"
            ? generateRandomSentencesArray(
                each.no_of_sentences,
                each.null,
                each.null_percent,
                each.max_words
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

  const removeField = (index) => {
    const newField = fields.filter((_, ind) => ind !== index);
    setFields(newField);
  };

  const preview = () => {
    json();
    setShow(true);
  };

  const [dataAction, setDataAction] = useState({
    table: "",
    action: "",
  });

  return (
    <div className="container">
      <div className="header flex column gap1rem">
        <h3 className="headerText">
          JSON, RUBY (migrations), CSV | EXCEL and SQL generators
        </h3>

        <h3 className="headerText">
          Looking for where to generate mockup data for your backend or populate
          your database with...? Try our generator...
        </h3>
      </div>

      <div>
        <div className="flex gap1rem column inputDiv">
          <div className="flex gap2rem justify_around">
            <h5 className="inputLabel">Fields</h5>
            <h5 className="inputLabel">Options</h5>
            <h5 className="inputLabel">Type</h5>
          </div>

          <div className="flex column gap1rem">
            {fields.map((field, index) => (
              <div ey={index} className="flex gap2rem">
                <input
                  type="text"
                  onChange={(e) => updateField(index, "name", e.target.value)}
                  value={field.name}
                  className="input"
                />
                <select
                  name=""
                  className="input"
                  onChange={(e) => updateField(index, "option", e.target.value)}
                  value={field.option}
                  id=""
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
                  <option value="url">Links</option>
                </select>
                <div className="flex gap05rem">
                  <div className="flex gap05rem align_center">
                    <label className="font12px">Blank:</label>
                    <input
                      type="checkbox"
                      name="bool"
                      max={5}
                      onChange={(e) =>
                        updateField(index, "null", e.target.checked)
                      }
                      className="inputOption"
                      id=""
                    />
                  </div>
                  {field.null && (
                    <div className="flex gap05rem align_center">
                      <label className="font12px">Blank %:</label>
                      <input
                        className="inputOption"
                        type="number"
                        onChange={(e) =>
                          updateField(
                            index,
                            "null_percent",
                            parseInt(e.target.value)
                          )
                        }
                        id=""
                      />
                    </div>
                  )}
                  {field.option === "sentence" && (
                    <>
                      <div className="flex gap05rem align_center">
                        <label className="font12px">
                          Max no. of Sentences:
                        </label>
                        <input
                          type="number"
                          className="inputOption"
                          id=""
                          onChange={(e) =>
                            updateField(
                              index,
                              "no_of_sentences",
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </div>
                      <div className="flex gap05rem align_center">
                        <label className="font12px">Max. words:</label>
                        <input
                          type="number"
                          className="inputOption"
                          id=""
                          onChange={(e) =>
                            updateField(
                              index,
                              "max_words",
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={() => removeField(index)}
                  class="pointer cancelIcon"
                >
                  &#10006;
                </button>
              </div>
            ))}
          </div>
          <div class="flex gap1rem align_end">
            <button onClick={addField} class="addButton button">
              ADD FIELD
            </button>
            <div class="flex gap05rem align_center white">
              <input
                max={1000}
                min={1}
                type="number"
                class="inputOption"
                name=""
                id="rows"
                onChange={(e) => setnoOfRows(parseInt(e.target.value))}
              />
              <label class="white font12px" for="rows">
                Number of rows
              </label>
            </div>
          </div>
        </div>
        <div class="flex gap1rem marginTop2rem align_center">
          <select onChange={(e) => setGenerate(e.target.value)} class="button">
            <option value="Generate" selected>
              Generate
            </option>
            <option value="json">JSON</option>
            <option value="ruby">Ruby</option>
            <option value="SQL">SQL</option>
            <option value="excel">Excel</option>
          </select>
          <button
            onClick={() =>
              noOfRows > 1501
                ? setErr("Number of rows should not be more than 1500")
                : dataAction.action === "" || dataAction.table === ""
                ? setErr("Table name and Action must be present...")
                : preview()
            }
            class="button"
          >
            Preview
          </button>
          {(generate === "ruby" || generate === "SQL") && (
            <>
              <input
                type="text"
                className="input"
                placeholder="Table name..."
                name="table"
                onChange={(e) =>
                  setDataAction({
                    ...dataAction,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="input"
                placeholder="Action..."
                name="action"
                onChange={(e) =>
                  setDataAction({
                    ...dataAction,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </>
          )}
        </div>
        {err &&
          setTimeout(() => {
            setErr(null);
          }, 2000) && <p className="red font12px">{err}</p>}
      </div>
      {show && (
        <Preview
          arr={arr}
          generateType={generate}
          setShow={setShow}
          dataAction={dataAction}
        />
      )}
    </div>
  );
}
export default App;
