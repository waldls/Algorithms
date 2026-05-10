function solution(k, tangerine) {
    const counter = {};
    for (const t of tangerine) {
        counter[t] = (counter[t] || 0) + 1;
    }
    
    const counts = Object.values(counter).sort((a, b) => b - a);
    
    let result = 0;
    let total = 0;
    
    for (const count of counts) {
        result++;
        total += count;
        if (total >= k) break;
    }
    
    return result;
}