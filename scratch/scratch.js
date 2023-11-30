// scratch.js

// // Generating random timestamps:
// {function generateRandomDate(from, to) {
//   return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
// }
// console.log(generateRandomDate(new Date(2023, 1, 1), new Date()));
// console.log(generateRandomDate(new Date(2000, 2, 3), new Date()));
// console.log(generateRandomDate(new Date(2010, 3, 5), new Date()));
// console.log(generateRandomDate(new Date(2023, 4, 7), new Date()));
// console.log(generateRandomDate(new Date(2000, 5, 9), new Date()));
// console.log(generateRandomDate(new Date(2010, 6, 11), new Date()));
// console.log(generateRandomDate(new Date(2023, 7, 13), new Date()));
// console.log(generateRandomDate(new Date(2000, 8, 20), new Date()));
// console.log(generateRandomDate(new Date(2010, 9, 25), new Date()));}

// Dummy Data:
const arr = [
  {
    id: 1,
    createdTime: "2023-05-11T15:56:04.423Z",
    fields: { title: "Sweep", timeEdited: "2023-08-14T13:15:46.227Z", completed: [true, { dateCompleted: "2023-08-13T13:39:50.862Z" }] },
  },
  {
    id: 2,
    createdTime: "2014-08-02T14:20:40.193Z",
    fields: { title: "Sweeps", timeEdited: "2010-02-17T19:41:23.909Z", completed: [Boolean, { dateCompleted: "2016-10-15T21:19:49.383Z" }] },
  },
  {
    id: 3,
    createdTime: "2011-09-12T21:06:03.187Z",
    fields: { title: "Laundry", timeEdited: "2011-07-28T18:32:12.737Z", completed: [false, { dateCompleted: "2017-01-13T02:26:58.754Z" }] },
  },
];

// console.log("arr:", arr, "\n");

// "Destructure" the array:

// =============================================

// // One method to "destructure" the array:
{
  const idArr01 = [],
    createdTimeArr01 = [],
    fieldsArr01 = [];
  arr.forEach((element) => {
    idArr01.push(element.id);
    createdTimeArr01.push(element.createdTime);
    fieldsArr01.push(element.fields);
  });
  // console.log("Method One \n idArr01:", idArr01, "\n createdTimeArr01:", createdTimeArr01, "\n fieldsArr01:", fieldsArr01, "\n");
}

// =============================================

// // Another method to "destructure" the array:
// {
//   const idArr02 = arr.map((each) => each.id);
//   const createdTimeArr02 = arr.map((each) => each.createdTime);
//   const fieldsArr02 = arr.map((each) => each.fields);
//   console.log("Method Two: \n idArr02:", idArr02, "\n createdTimeArr02:", createdTimeArr02, "\n fieldsArr02:", fieldsArr02, "\n");
// }

// =============================================

// Filter the array:

// =============================================

// function addCharacter() {
//   const str = "Sweeps";
//   let tempStr = "";
//   const delay = 2 * 10 ** 3;
//   // if (delay === 5000) console.log("Yes");
//   // else console.log("no");
//   // tempStr += str.slice(0, 1);
//   // console.log("tempStr:", tempStr);
//   // tempStr += str.slice(1, 2);
//   // console.log("tempStr:", tempStr);

//   // setTimeout(() => {
//   //   tempStr += str.slice(0, 1);
//   //   console.log("tempStr:", tempStr);
//   // }, delay);
//   // setTimeout(() => {
//   //   tempStr += str.slice(1, 2);
//   //   console.log("tempStr:", tempStr);
//   // }, delay);
//   // setTimeout(() => {
//   //   tempStr += str.slice(2, 3);
//   //   console.log("tempStr:", tempStr);
//   // }, delay);

//   // function repeatFunction(param) {
//   //   setTimeout((tempStr += str.slice(param, param + 1)), delay);
//   // }
//   // for (let index = 0; index < str.length; index++) {
//   //   repeatFunction(index);
//   // }

//   // setTimeout((tempStr += str.slice(0, 1)), 1000);
//   // console.log("tempStr:", tempStr);
//   // setTimeout((tempStr += str.slice(1, 2)), 4000);
//   // console.log("tempStr:", tempStr);
//   // setTimeout((tempStr += str.slice(2, 3)), 1000);
//   // setTimeout((tempStr += str.slice(3, 4)), 1000);
//   // setTimeout((tempStr += str.slice(4, 5)), 1000);
//   // setTimeout(     tempStr += str.slice(  1,2),1000)

//   // const test = () => {
//   //   setTimeout((param) => {
//   //     tempStr += str.slice(param, param + 1);
//   //     console.log("tempStr:", tempStr);
//   //   }, 1000);
//   // };

//   // for (let index = 0; index < str.length; index++) {
//   //   test();
//   // }
//   // console.log("tempStr:", tempStr);
// }
// addCharacter();

// setTimeout(() => {
//   str += "S";
//   console.log("str:", str);
// }, 1000);
// setTimeout(() => {
//   str += "w";
//   console.log("str:", str);
// }, 1000);
// setTimeout(() => {
//   str += "e";
//   console.log("str:", str);
// }, 1000);
// setTimeout(() => {
//   str += "e";
//   console.log("str:", str);
// }, 1000);
// setTimeout(() => {
//   str += "p";
//   console.log("str:", str);
// }, 1000);
// setTimeout(() => {
//   str = str.slice(0, -1);
//   console.log("str:", str);
// }, 1000);

// // One method to filter the array:
let filteredArr = [];
// Items chosen: title: 'Sweep', and title: 'Rake',
// Therefore want:
// filteredArr = [
//   {
//     id: 1,
//     createdTime: "2023-05-11T15:56:04.423Z",
//     fields: {
//       title: "Sweep",
//       timeEdited: "2023-08-14T13:15:46.227Z",
//       completed: [Array],
//     },
//   },
//   {
//     id: 2,
//     createdTime: "2014-08-02T14:20:40.193Z",
//     fields: {
//       title: "Rake",
//       timeEdited: "2010-02-17T19:41:23.909Z",
//       completed: [Array],
//     },
//   },
// ];
// console.log("Items chosen: title: 'Sweep', and title: 'Rake', Therefore want:\n", filteredArr);

// =============================================
const str = "Sweeps";
let tempStr = "";
const integer = 2;
const interval = integer * 10 ** 3;
let index = 0;

const intervalID03 = setInterval(outsideCallback, interval);
function outsideCallback() {
  const intervalID04 = setInterval(insideCallback, interval);

  function insideCallback() {
    console.log("Index subtract:", index);
    tempStr = tempStr.slice(0, -1);
    console.log("tempStr:", tempStr);
    index--;
    if (index < 0) clearInterval(intervalID03);
  }
  console.log("Index add:", index);
  tempStr += str.slice(index, index + 1);
  console.log("tempStr:", tempStr);
  index++;
  if (index >= str.length) clearInterval(intervalID04);
}

// console.log("Before.");
// if (index === 0) {
const intervalID01 = setInterval(addCallback, interval);
function addCallback() {
  while (index < str.length) {
    console.log("Index add:", index);
    tempStr += str.slice(index, index + 1);
    console.log("tempStr:", tempStr);
    index++;
  }
  console.log("After while");
  while (index > 0) {
    console.log("Index subtract:", index);
    tempStr = tempStr.slice(0, -1);
    console.log("tempStr:", tempStr);
    index--;
  }
  if (index === 0) clearInterval(intervalID01);

  //   while (index < str.length) {
  //     console.log("Index add:", index);
  //     tempStr += str.slice(index, index + 1);
  //     console.log("tempStr:", tempStr);
  //     index++;
  //     if (index === str.length) clearInterval(intervalID01);
  //   }
  //   // console.log("Index add:", index);
  //   // tempStr += str.slice(index, index + 1);
  //   // console.log("tempStr:", tempStr);
  //   // index++;
  //   // // if (index === str.length) clearInterval(intervalID01);

  // //   while (index > 0 && index < str.length) {
  // //     console.log("Index add:", index);
  // //     tempStr += str.slice(index, index + 1);
  // //     console.log("tempStr:", tempStr);
  // //     index++;
  // //     if (index === str.length) {
  // //       clearInterval(intervalID01);
  // //       // break;
  // //     }
  // //   }

  // //   console.log("Index subtract:", index);
  // //   tempStr = tempStr.slice(0, -1);
  // //   console.log("tempStr:", tempStr);
  // //   // index++;
  // //   // if (index === str.length) clearInterval(intervalID02);
  // //   index--;
  // //   if (index === 0) clearInterval(intervalID01);
}
// // } else if (index === str.length) {
//   // console.log("Between.");
//   const intervalID02 = setInterval(subtractCallback, interval);
//   index = 0;
//   function subtractCallback() {
//     console.log("Index subtract:", index);
//     tempStr = tempStr.slice(0, -1);
//     console.log("tempStr:", tempStr);
//     index++;
//     if (index === str.length) clearInterval(intervalID02);
//     // index--;
//     // if (index === 0) clearInterval(intervalID02);
//   }
// // }
// console.log("After.");

//   //   console.log("intervalID:", intervalID);
//   console.log("index:", index);

//   clearInterval(intervalID);
// }
// clearInterval(intervalID);

// const intervalID = setInterval(addCallback, 500, "Parameter 1", "Parameter 2");
// setTimeout(() => clearInterval(intervalID), interval);
