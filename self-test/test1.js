function solution(arr) {
  const result = [];
  const history = [];

  for (let i = 0; i < arr.length; i++) {
    const selected1 = arr[i];

    if (history.includes(selected1) === false) {
      history.push(selected1);

      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        const selected2 = arr[j];
        if (selected1 === selected2) count++;
      }
      if (count > 1) result.push(count);
    }
  }

  if (result.length === 0) return [-1];
  else return result;
}

solution([1, 2, 3, 3, 3, 3, 4, 4]);
solution([3, 2, 4, 4, 2, 5, 2, 5, 5]);
solution([3, 5, 7, 9, 1]);

// [4, 2]
// [3, 2, 3]
// [-1]
