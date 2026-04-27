function solution(ingredient) {
    const stack = [];
    let count = 0;
    
    for (const item of ingredient) {
        stack.push(item);
        
        
        const len = stack.length;
        if (len >= 4 &&
            stack[len-4] === 1 &&
            stack[len-3] === 2 &&
            stack[len-2] === 3 &&
            stack[len-1] === 1) {
            stack.splice(len - 4, 4);
            count++;
        }
    }
    
    return count;
}