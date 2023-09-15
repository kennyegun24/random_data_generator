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
import { career } from "../data/careers";
import { cities } from "../data/cities";

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

export const generateRandomSentencesArray = (
  num,
  nul,
  null_percent,
  max_words
) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const sentenceCount = Math.floor(Math.random() * (num - 1)) + 2;
    const sentenceArray = new Array(sentenceCount)
      .fill(0)
      .map(() => formRandomSentence());
    const sentence = sentenceArray.join(" ");

    return sentence.length > max_words
      ? sentence.slice(0, max_words)
      : sentence;
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

export const generateEmails = (nul, null_percent, name) => {
  if (nul && Math.floor(Math.random() < null_percent / 100)) {
    return false;
  } else {
    const email_name = name;
    const domains = [
      "gmail.com",
      "mail.com",
      "yahoo.com",
      "email.com",
      "outlook.com",
      "welcome.xyz",
      "bing.com",
      "yahoo.co.uk",
    ];
    const email = name.charAt(Math.floor(Math.random() * name.length));
    return (
      email_name +
      Math.floor(Math.random() * 99999) +
      email +
      "@" +
      domains[Math.floor(Math.random() * domains.length)]
    );
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

export const generateIpAddress = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const ipAddresses =
      Math.floor(Math.random() * 255) +
      1 +
      "." +
      Math.floor(Math.random() * 255) +
      "." +
      Math.floor(Math.random() * 255) +
      "." +
      Math.floor(Math.random() * 255);
    return ipAddresses;
  }
};

export const generateRandomDob = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const dob =
      Math.floor(Math.random() * 31) +
      1 +
      "/" +
      (Math.floor(Math.random() * 12) + 1) +
      "/" +
      Math.floor(Math.random() * (2020 - 1950) + 1950);

    return dob;
  }
};

export const generateUrls = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const letters = "abcdefghijklmnopqrstuvwxy";

    let minNumberOfCharacters = 4;
    let maxNumberOfCharacters = 7;
    let word = "";
    let domain = ["com", "net", "za", "ng", "uk", "ok", "io", "max"];
    let endPoint = [
      "profile",
      "rand",
      "favorites",
      "users",
      "user/messages",
      "profile/21",
      "check/confirm",
      "profile/all_comments",
    ];

    for (
      let i = 0;
      i <=
      Math.floor(
        Math.random() * (maxNumberOfCharacters - minNumberOfCharacters) +
          minNumberOfCharacters
      );
      i++
    ) {
      let index = Math.floor(Math.random() * letters.length);
      word += letters.charAt(index);
    }
    return (
      word +
      "." +
      domain[Math.floor(Math.random() * domain.length)] +
      "/" +
      endPoint[Math.floor(Math.random() * endPoint.length)]
    );
  }
};

export const generateCareers = (nul, null_percent) => {
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const careers = career[Math.floor(Math.random() * career.length)];
    return careers;
  }
};

export const generateDecimals = (nul, null_percent, max_num) => {
  let max = max_num || 100;
  if (nul && Math.random() < null_percent / 100) {
    return null;
  } else {
    const decimals = Math.random() * max;
    return decimals.toFixed(4);
  }
};

export const generateCities = (nul, null_percent) => {
  if (nul && Math.floor(Math.random() < null_percent / 100)) {
    return false;
  } else {
    const city = cities[Math.floor(Math.random() * career.length)];
    return city;
  }
};

export const downloadJson = (arr) => {
  const json = JSON.stringify(arr, null, 2).replace(/"([^"]+)":/g, "$1:");
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const copyFunction = (param) => {
  const copyText = param.textContent;
  navigator.clipboard
    .writeText(copyText)
    .then(() => {})
    .catch((error) => {});
};

export const downloadRuby = (rubyData) => {
  const rubyContent = rubyData.textContent;
  const ruby = new Blob([rubyContent], { type: "application/ruby" });
  const url = URL.createObjectURL(ruby);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.rb";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadSQL = (sqlData) => {
  const sqlContent = sqlData.textContent;
  const sql = new Blob([sqlContent], { type: "application/sql" });
  const url = URL.createObjectURL(sql);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.sql";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// laravel format
// class UserTableSeeder extends Seeder {

//     public function run()
//     {
//         DB::table('users')->delete();

//         User::create(array('email' => 'foo@bar.com'));
//     }

// }

// Fisher-Yates algorithm
// const getRandomCities = (allCities, numberOfCitiesToSelect) => {
//   if (numberOfCitiesToSelect >= allCities.length) {
//     // Handle the case where you want to select more cities than available
//     return allCities;
//   }

// Fisher-Yates algorithm
//   const shuffledCities = allCities.slice(); // Create a copy of the original array
//   for (let i = shuffledCities.length - 1; i > 0; i--) {
//     // Shuffle the array using the Fisher-Yates algorithm
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledCities[i], shuffledCities[j]] = [
//       shuffledCities[j],
//       shuffledCities[i],
//     ];
//   }

//   return shuffledCities.slice(0, numberOfCitiesToSelect);
// };
// console.log(getRandomCities(cities, 3500));
