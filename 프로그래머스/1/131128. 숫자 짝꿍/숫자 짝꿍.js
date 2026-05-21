const solution = (X, Y) => {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);

    for (const c of X) countX[c]++;
    for (const c of Y) countY[c]++;

    let result = '';

    // 9부터 0까지 큰 숫자 먼저
    for (let k = 9; k >= 0; k--) {
        result += String(k).repeat(Math.min(countX[k], countY[k]));
    }

    if (result === '') return '-1';
    if (result[0] === '0') return '0';  // 0으로만 구성
    return result;
};