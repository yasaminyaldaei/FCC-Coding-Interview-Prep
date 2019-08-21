function permAlone(str) {
  return str;
}

function* generate(k = 3, arr = ['a', 'a', 'b']) {

  if (k == 1) {
    yield this.arr = arr;
  } else {
    generate(k - 1, arr);
    for(let i = 0; i < k - 1; i++) {
      generate(k - 1, swap(this.arr, k % 2 == 0 ? i : 0, k - 1))
    }
  }
}

function swap(arr, i, j) {
  let swapped = [...arr];
  [swapped[i], swapped[j]] = [swapped[j], swapped[i]]
  return swapped
}

let gen = generate(3, ['a', 'a', 'b'])

let res = gen.next()
while(!res.done) {
  console.log(res.value)
  res = gen.next()
}
