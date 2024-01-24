function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  for(let i = 0; i < arr.length; i ++) {
    if (arr[i] > max && arr[i] != min) {
      max = arr[i];
      return max
    }
    if (arr[i] < min && arr[i] != max) {
      min = arr[i];
      return min;
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  let obj = {max: min, min: max, avg: avg};
  return obj;
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  let diff = max - min;

  return diff;
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
  let diff = sumEvenElement - sumOddElement;

  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let avg = sumEvenElement / countEvenElement;
  return avg;
}

function makeWork (arrOfArr, func) {

}
