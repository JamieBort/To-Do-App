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
