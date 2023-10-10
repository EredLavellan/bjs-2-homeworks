function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    } 
    return acc;
  }, 0).toFixed(2);
  let avg = Number(sum);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = arr.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  if (arr = []) {
    return 0;
  } else {
    return summ;
  }
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if (arr = []) {
    return 0;
  } else {
    return max - min;
  }
  

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }
  }
  if (arr.length === 0) {
    return 0;
  } else {
    return sumEvenElement - sumOddElement;
  }
  
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (arr = []) {
    return 0;
  } else {
    return sumEvenElement / countEvenElement;
  }


}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const maxus;
  for (let i = 0; i < arrOfArr.length; i++) {
    maxus = func(...arrOfArr[i]);
    return if (maxus < maxWorkerResult) {
      maxWorkerResult = maxus;
    }
    return maxWorkerResult;
  }

  
}

