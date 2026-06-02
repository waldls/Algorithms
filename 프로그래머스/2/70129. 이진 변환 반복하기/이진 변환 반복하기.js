function solution(s) {
    let count = 0;
    let removedZeros = 0;
    
    while (s !== "1") {
        const zeros = s.split("").filter(c => c === "0").length;
        removedZeros += zeros;
        s = (s.length - zeros).toString(2);
        count++;
    }
    
    return [count, removedZeros];
}