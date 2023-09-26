function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    } return acc;
  }, 0).toFixed(2);
  let avg = Number(sum);

  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  let summ = arr.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
  return summ;
}


function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;

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
  return sumEvenElement - sumOddElement;
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

  return sumEvenElement / countEvenElement;

}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let arrow = [...arrOfArr];
  for (let i = 0; i < arrow.length; i++) {
    for (let j = 0; j < arrow[i].length; j++) {
      let maxus = func(arrow[i][j]);
      return maxus;
    }

  }

}

