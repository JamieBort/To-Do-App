// ./scratch/promises.js

let tempStr = "",
  index = 0;

const str = "Sweeps",
  integer = 1,
  interval = integer * 10 ** 2,
  promise01 = new Promise((resolve, reject) => {
    const intervalID01 = setInterval(callback, interval);
    function callback() {
      console.log("Index add:", index);
      tempStr += str.slice(index, index + 1);
      console.log("tempStr:", tempStr);
      index++;
      if (index === str.length) {
        clearInterval(intervalID01);
        resolve();
      }
    }
  });

promise01.then(() => {
  const intervalID02 = setInterval(callback, interval);
  function callback() {
    console.log("Index subtract:", index);
    tempStr = tempStr.slice(0, -1);
    console.log("tempStr:", tempStr);
    index--;
    if (index === 0) clearInterval(intervalID02);
  }
});
