function solution(arr) {
    return arr.filter((num, idx) => idx === 0 || num !== arr[idx - 1]);
}