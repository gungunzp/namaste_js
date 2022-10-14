// repo:
// https://github.com/gungunzp/namaste_js

// gh pages:
// https://gungunzp.github.io/namaste_js/

// ************************************************************** https://youtu.be/qikxEIxsXco?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP

// function x() {
//   var a = 7;

//   function y() {
//     console.log(a);
//   }

//   y();
// }

// x();

// ************************************************************** https://youtu.be/eBTBG4nda2A?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log('Namaste 🙏 JavaScript');
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(z) {
//       setTimeout(function () {
//         console.log(z);
//       }, z * 1000);
//     }
//     close(i);
//   }

//   console.log('Namaste 🙏 JavaScript');
// }
// x();

// ************************************************************** https://youtu.be/zdp0zrpKzIE?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&t=1126

// const arr = [5, 1, 3, 2, 6];

// const sum = arr.reduce((acc, curr) => acc + curr, 0);

// const getMax = (max, curr) => {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// };
// const maxValue = arr.reduce(getMax, 0);

// const hipsterGetMax = (max, curr) => (curr > max ? curr : max);
// const hipsterMaxValue = arr.reduce(hipsterGetMax);

// console.log('~ sum', sum);
// console.log('~ maxValue', maxValue);
// console.log('~ hipsterMaxValue', hipsterMaxValue);

// ************************************************************** https://youtu.be/zdp0zrpKzIE?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&t=1625

// const users = [
//   {
//     firstName: 'akshay',
//     lastName: 'saini',
//     age: 26,
//   },
//   {
//     firstName: 'donald',
//     lastName: 'trump',
//     age: 75,
//   },
//   {
//     firstName: 'elon',
//     lastName: 'musk',
//     age: 50,
//   },
//   {
//     firstName: 'deepika',
//     lastName: 'padukone',
//     age: 26,
//   },
// ];

// const ageStats = users.reduce((acc, { age }) => {
//   /* common */
//   // if (acc[age]) {
//   //   acc[age]++;
//   // } else {
//   //   acc[age] = 1;
//   // }

//   /* hipster */
//   // acc[age] ? acc[age]++ : acc[age] = 1;

//   /* hipstierst */
//   acc[age]++ || (acc[age] = 1);

//   return acc;
// }, {});

// console.log('~ ageStats', ageStats);

// ************************************************************** https://youtu.be/zdp0zrpKzIE?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&t=2154

// const getYoungerThan = (limit) => (acc, curr) => {
//   if (curr.age < limit) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// };
// const hipsterGetYoungerThan = (limit) => (acc, curr) =>
//   curr.age < limit ? [...acc, curr.firstName] : acc;

// console.log(
//   '~ users.reduce(getYoungerThan(51), [])',
//   users.reduce(getYoungerThan(51), [])
// );
// console.log(
//   '~ users.reduce(hipsterGetYoungerThan(30), [])',
//   users.reduce(hipsterGetYoungerThan(30), [])
// );

// //
// console.log(
//   'dkjflaskj ',
//   users.reduce(
//     (acc, curr) => (curr.age < 30 ? [...acc, curr.firstName] : acc),
//     []
//   )
// );

// ************************************************************** https://youtu.be/75W8UPQ5l7k

// const name = {
//   firstName: 'Akshay',
//   lastName: 'Saini',
// };

// const printFullName = function (hometown, state, country) {
//   console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + state + ', ' + country);
// };

// const printHisName = printFullName.bind(name, 'London');
// printHisName('Mumbai', 'India');

// Function.prototype.bindPolyfill = function (...args) {
//   const that = this;
//   return function () {
//     that.apply(args[0], args.slice(1).concat(...arguments));
//   };
// };

// const printHisName2 = printFullName.bindPolyfill(name, 'Houston','Texas');
// printHisName2('USA');

// ************************************************************** https://youtu.be/ap-6PPAuK1Y

// const GITHUB_API = 'https://api.github.com/users/gungunzp';

// const user = fetch(GITHUB_API);

// console.log('~ user', user);

// user.then(data => {
//   console.log(data);
// })

// ************************************************************** https://youtu.be/Zo-6_qx8uxg
// debounce

const interval = 1000;
const doSomething = (element) => () => {
  // do something (e.g. make search request on typing)
  console.log('~~~~~~~🙏~~~~~~~', element.value);
};

const debounce = (callback, delay) => {
  let currTypeTime;
  let id;
  // console.log('~ INIT currTypeTime', currTypeTime);

  return () => {
    currTypeTime = Date.now();
    // console.log('~ UPDATE (INNER FN) currTypeTime', currTypeTime);

    if (!id) {
      id = setInterval(() => {
        // console.log('~ Date.now() (INSIDE setInterval)', Date.now());

        if (Date.now() > currTypeTime + delay) {
          callback();

          clearInterval(id);
          id = null;
        }
      }, delay);
    }
  };
};

window.onload = () => {
  const input = document.getElementById('input');
  input.focus();
  input.addEventListener('keyup', debounce(doSomething(input), interval));
};
