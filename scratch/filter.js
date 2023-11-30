// filter.js

// Filter the array:

// =============================================
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
  ],
  idArr01 = [],
  createdTimeArr01 = [],
  fieldsArr01 = [];
arr.forEach((element) => {
  idArr01.push(element.id);
  createdTimeArr01.push(element.createdTime);
  fieldsArr01.push(element.fields);
});

// console.log("The original array, arr:", arr, "\n");
// console.log("The destructured data: \n idArr01:", idArr01, "\n createdTimeArr01:", createdTimeArr01, "\n fieldsArr01:", fieldsArr01, "\n");

let filteredArr = [],
  tempStr = "",
  tempString = "",
  index = 0,
  tempFilteredArr = [];
// console.log("The filtered array, filteredArr:", filteredArr, "\n");

// // Items chosen: title: 'Sweep', and title: 'Sweeps',

let filterFunction = (param) => {
  // console.log("Running the filter function.");
  console.log("filterFunction param:", param);

  // if (param.length < 5) {
  //   console.log("Three in the array.");
  //   tempFilteredArr = [3];
  // } else if (param.length === 5) {
  //   console.log("Two in the array.");
  //   tempFilteredArr = [2];
  //   filteredArr = [
  //     {
  //       id: 1,
  //       createdTime: "2023-05-11T15:56:04.423Z",
  //       fields: {
  //         title: "Sweep",
  //         timeEdited: "2023-08-14T13:15:46.227Z",
  //         completed: [Array],
  //       },
  //     },
  //     {
  //       id: 2,
  //       createdTime: "2014-08-02T14:20:40.193Z",
  //       fields: { title: "Sweeps", timeEdited: "2010-02-17T19:41:23.909Z", completed: [Boolean, { dateCompleted: "2016-10-15T21:19:49.383Z" }] },
  //     },
  //   ];
  // } else if (param.length === 6) {
  //   console.log("One in the array.");
  //   tempFilteredArr = [1];
  //   filteredArr = [
  //     {
  //       id: 2,
  //       createdTime: "2014-08-02T14:20:40.193Z",
  //       fields: { title: "Sweeps", timeEdited: "2010-02-17T19:41:23.909Z", completed: [Boolean, { dateCompleted: "2016-10-15T21:19:49.383Z" }] },
  //     },
  //   ];
  // }

  // arr.forEach((element) => {
  //   //   // console.log("element:", element.fields.title);
  //   // if (!element.fields.title.startsWith(param)) {
  //   //   //     // console.log("long", element.fields.title.toLowercase().startsWith(param));

  //   //   //     // console.log("element.fields.title:", element.fields.title);
  //   //   //     // console.log("element.fields.title.startsWith(param):", element.fields.title.startsWith(param));
  //   //   //     // console.log("element:", element);
  //   //   //     // filteredArr.push(element);
  //   //   console.log("do nothing");
  //   // } else {
  //   //   // console.log("element:", element);
  //   //   filteredArr.push(element);
  //   // }
  //   if (element.fields.title.startsWith(param)) filteredArr.push(element);
  // });

  console.log("================================");

  const filtered = arr.filter((item) => {
    return item.fields.title.startsWith(param);
  });
  // console.log("filtered:", filtered);
  return filtered;
  // return "dummy array";
  // console.log("filteredArr:", filteredArr);
  return filteredArr;

  // console.log("tempFilteredArr:", tempFilteredArr);
  return tempFilteredArr;
};

const str = "Sweeps";
const integer = 2,
  interval = integer * 10 ** 2,
  secondPromise = () => {
    const intervalID02 = setInterval(callback, interval);
    function callback() {
      // console.log("Index subtract:", index);
      tempString = tempString.slice(0, -1);
      console.log("secondPromise tempString:", tempString);
      index--;
      console.log("secondPromise filteredArr:", filterFunction(tempString));
      if (index === 0) clearInterval(intervalID02);
    }
  };

// console.log("FIRST:", filterFunction(""));
new Promise((resolve, reject) => {
  const intervalID01 = setInterval(callback, interval);
  function callback() {
    const param = str;
    // console.log("promise01 param:", param);
    // console.log("Param:", param.length);
    // console.log("Index add:", index);
    tempString += param.slice(index, index + 1);
    console.log("promise01 tempString:", tempString);
    index++;
    console.log("promise01 filteredArr:", filterFunction(tempString));
    // console.log("promise01 index:", index);
    // console.log("promise01 param.length:", param.length);
    if (index === param.length) {
      clearInterval(intervalID01);
      resolve();
    }
  }
}).then(secondPromise);
// console.log("LAST:", filterFunction(""));

// console.log("FIRST:", filterFunction(""));
// promise01.then(secondPromise);
// console.log("LAST:", filterFunction(""));
