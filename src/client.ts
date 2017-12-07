console.log('TS is compiled');

let numbers: Array<number>;
let ArrArray: Array<Array<number>>;

numbers = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];
ArrArray = [];

function findMax(Arr: Array<number>): number {
  let max: number = Math.max(...Arr);
  console.log('max', max);
  return max;
}
function findIdx(Arr: Array<number>, max: number): number {
  let index: number;
  index = Arr.indexOf(max);
  console.log('index', index);
  return index;
}
function findAndCount(Arr: Array<number>, idx: number): void {
  console.log('findAndCount', Arr, idx);
  let value: number;
  let newIdx: number = idx;
  value = Arr[idx];
  Arr[idx] = 0;
  while (value > 0) {
    console.log('value', value);
    if (newIdx > Arr.length) {
      newIdx = 0;
    }
    Arr[newIdx] += 1;
    newIdx++;
    value--;
  }
  console.log('findAndCount', Arr);
  ArrArray.push(Arr);
}
function checkForMatch(Arr: Array<number>, ArrArray: Array<Array<number>>): boolean {
  let match: boolean;
  for (let i: number = 0; i <= ArrArray.length; i++) {
    if (Arr == ArrArray[i]) {
      match = true;
    } else {
      match = false;
    }
  }
  return match;
}

function main(): number {
  let count: number = 0;
  let go: boolean = true;
  while (go) {
    findAndCount(numbers, findIdx(numbers, findMax(numbers)));
    if (checkForMatch(numbers, ArrArray) === true) {
      go = false;
    }
    count++;
  }
  return count;
}

console.log(main());
