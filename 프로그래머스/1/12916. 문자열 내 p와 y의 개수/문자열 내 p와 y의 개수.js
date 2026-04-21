function solution(s) {
    const lower = s.toLowerCase();
    return (lower.match(/p/g) || []).length === (lower.match(/y/g) || []).length;
}