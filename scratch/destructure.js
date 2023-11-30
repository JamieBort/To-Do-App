// destructure.js

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
  console.log("Method One \n idArr01:", idArr01, "\n createdTimeArr01:", createdTimeArr01, "\n fieldsArr01:", fieldsArr01, "\n");
}

// =============================================

// // Another method to "destructure" the array:
// {
//   const idArr02 = arr.map((each) => each.id);
//   const createdTimeArr02 = arr.map((each) => each.createdTime);
//   const fieldsArr02 = arr.map((each) => each.fields);
//   console.log("Method Two: \n idArr02:", idArr02, "\n createdTimeArr02:", createdTimeArr02, "\n fieldsArr02:", fieldsArr02, "\n");
// }
