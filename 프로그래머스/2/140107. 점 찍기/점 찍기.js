function solution(k, d) {
    let count = 0;
    const limit = d / k;
    
    for (let a = 0; a <= limit; a++) {
        count += Math.floor(Math.sqrt(limit ** 2 - a ** 2)) + 1;
    }
    
    return count;
}