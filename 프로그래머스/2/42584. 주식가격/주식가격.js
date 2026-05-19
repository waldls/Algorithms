function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        // 현재 가격이 스택 top의 가격보다 낮으면 가격 하락
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i);
    }
    
    // 스택에 남은 인덱스는 끝까지 가격이 안 떨어진 경우
    while (stack.length) {
        const idx = stack.pop();
        answer[idx] = n - 1 - idx;
    }
    
    return answer;
}