import {
  nouns,
  pronouns,
  verbs,
  articles,
  conjunctions,
  // adjectives,
  prepositions,
} from "../data/speech";
import { mobile_nums } from "../data/numbers";
import { first_names } from "../data/names";
import { countries } from "../data/countries";
import { states } from "../data/states";
import { last_names } from "../data/last_names";
import { bool, sex, yes_no } from "../data/arrays";
import { car_model } from "../data/car_model";
import { car_company } from "../data/car_company";
import { colors } from "../data/colors";
import { user_names } from "../data/user_names";

const formRandomSentence = (nul) => {
  const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomArticle = articles[Math.floor(Math.random() * articles.length)];
  const randomConjuction =
    conjunctions[Math.floor(Math.random() * conjunctions.length)];
  const randomPreposition =
    prepositions[Math.floor(Math.random() * prepositions.length)];

  return `${randomArticle} ${randomNoun} ${randomVerb} ${randomPreposition} ${randomVerb} ${randomPreposition} ${randomArticle} ${randomNoun} ${randomConjuction} ${randomPronoun} ${randomVerb} ${randomVerb}..`;
};

export const generateRandomSentencesArray = (num, nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const sentenceCount = Math.floor(Math.random() * (num - 1)) + 2;
    const sentenceArray = new Array(sentenceCount)
      .fill(0)
      .map(() => formRandomSentence());

    return sentenceArray.join(" ");
  }
};

export const formRandomNumbers = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomNumbers = Math.floor(Math.random() * 99999999999);
    // console.log(randomNumbers);
    return randomNumbers;
  }
};

export const formRandomPhone = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randumMobileNums =
      mobile_nums[Math.floor(Math.random() * mobile_nums.length)];

    return `${randumMobileNums}`;
  }
};

export const formNames = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomNames =
      first_names[Math.floor(Math.random() * first_names.length)];

    return `${randomNames.word}`;
  }
};

export const formLastName = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomNames =
      last_names[Math.floor(Math.random() * last_names.length)];

    return `${randomNames.word}`;
  }
};

export const generatePassword = () => {
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

export const formGender = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomGender = sex[Math.floor(Math.random() * sex.length)];

    return `${randomGender}`;
  }
};
export const formYesNo = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomYesNo = yes_no[Math.floor(Math.random() * yes_no.length)];

    return `${randomYesNo}`;
  }
};
export const formBool = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomBool = bool[Math.floor(Math.random() * bool.length)];

    return `${randomBool}`;
  }
};
export const formStates = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomState = states[Math.floor(Math.random() * states.length)];

    return `${randomState}`;
  }
};
export const formCountry = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];

    return `${randomCountry}`;
  }
};

export const formCarModel = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomCarModel =
      car_model[Math.floor(Math.random() * car_model.length)];

    return `${randomCarModel.word}`;
  }
};

export const formCarCompany = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomCarCompany =
      car_company[Math.floor(Math.random() * car_company.length)];

    return `${randomCarCompany.word}`;
  }
};

export const formColors = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return `${randomColor.word}`;
  }
};
export const formAge = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const randomAges = Math.floor(Math.random() * 100);
    return randomAges + "yrs";
  }
};

export const generateUserName = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const userName =
      user_names[Math.floor(Math.random() * user_names.length)] +
      Math.floor(Math.random() * 3298);
    return userName;
  }
};