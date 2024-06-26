function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ;
}

function differenceMaxMinWorker(...arr) {
 let min = Infinity;
 let max = -Infinity;
 if(arr.length < 1) {
    return 0;
  }
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] > max) {
     max = arr[i];
   } else if (arr[i] < min) {
     min = arr[i];
   }
 }
 return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
        sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if(arr.length < 1) {
    return 0;
  }
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  if(arrOfArr.length < 1) {
    return 0;
  }
  for(let i = 0; i < arrOfArr.length; i++) {
    const max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;

}
