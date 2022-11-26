const array = [1, 3, 5, -4, 8, 11, 6, -1];
const array2 = [4, 6, 3, 1];

const targetSum = 10;

const functionArray = (array, targetSum) => {
  let response = [];
  array.forEach((e1, i1, a1) => {
    array.forEach((e2, i2, a2) => {
      if (e1 + a2[i2 + 1] === targetSum && e1 !== a2[i2 + 1]) {
        if (response.length === 0) {
          response.push(e1, a2[i2 + 1]);
        }
      }
    });
  });
  return response;
};
// functionArray(array, targetSum);
// console.log(functionArray(array2, targetSum));

//-------------------------------------------------------------
const blackUniforms = [150, 179, 149, 152, 154];
const orangeUniforms = [162, 181, 151, 160, 170];
const string = "BBBBBBBBBBBBAACCCDD";
const verifyTakePicture = (array1, array2) => {
  const sortedArray1 = array1.sort((a, b) => a - b);
  const sortedArray2 = array2.sort((a, b) => a - b);
  let response = true;
  let arrayteste = [];
  sortedArray1.forEach((e, i) => {
    if (e < sortedArray2[i]) {
      arrayteste.push(true);
    } else {
      arrayteste.push(false);
    }
  });
  arrayteste.forEach((e, i, a) => {
    if (e !== a[1]) {
      response = false;
    }
  });
  return response;
};
// console.log(verifyTakePicture(orangeUniforms, blackUniforms));

const compressString = (string) => {
  let counter = 0;
  let pickLetter = "";
  let arrayResult = [];
  const arrayString = string.split("");
  pickLetter = arrayString[0];
  arrayString.forEach((e, i, a) => {
    if (e === pickLetter) {
      counter++;
    } else if (e !== pickLetter || i === a.length) {
      pickLetter = e;
      arrayResult.push(counter + e);
      counter = 1;
    }
  });

  return pickLetter, arrayResult;
};
console.log(compressString(string));
