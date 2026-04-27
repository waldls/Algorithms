function solution(orders, course) {
    const result = [];

    for (const k of course) {
        const counter = new Map();

        for (const order of orders) {
            // 각 주문을 정렬 후 길이 k의 조합 생성
            const sorted = order.split('').sort();
            const combos = getCombinations(sorted, k);
            for (const combo of combos) {
                const key = combo.join('');
                counter.set(key, (counter.get(key) || 0) + 1);
            }
        }

        if (counter.size === 0) continue;

        // 최댓값 구하기 (2 이상만)
        const maxCount = Math.max(...counter.values());
        if (maxCount < 2) continue;

        // 최댓값인 조합 추가
        for (const [menu, cnt] of counter) {
            if (cnt === maxCount) result.push(menu);
        }
    }

    return result.sort();
}

function getCombinations(arr, k) {
    if (k === 1) return arr.map(v => [v]);
    const result = [];
    for (let i = 0; i <= arr.length - k; i++) {
        const rest = getCombinations(arr.slice(i + 1), k - 1);
        for (const combo of rest) {
            result.push([arr[i], ...combo]);
        }
    }
    return result;
}