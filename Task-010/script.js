'use strict'

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '3 month'
  },
  showAgeAndLangs: function(plan) {
    let copyArr = plan['skills']['languages'].slice();
    let str = `Мне ${plan["age"]} и я владею языками:`;
    copyArr.forEach(function(item, i, copyArr) {
      str += " " + item.toUpperCase();
    })
    return str + " ";
  }
};

function showExperience(plan) {
  let str = plan['skills']['exp'];
  return str;
}

function showProgrammingLangs(plan) {
  let str = '';
  const copyObject = Object.assign({}, plan['skills']['programmingLangs']);

  if (Object.keys(copyObject).length === 0) {
    return '';
  } else {
    for (let key in copyObject) {
      str += `Язык ${key} изучен на ${copyObject[key]}` + "\n"
    }
  }

  return str;
}
