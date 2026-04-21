function solution(x) {
    const digitSum = String(x).split('').reduce((sum, d) => sum + Number(d), 0);
    return x % digitSum === 0;
}