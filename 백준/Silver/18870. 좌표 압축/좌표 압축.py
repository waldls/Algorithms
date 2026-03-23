import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))


sorted_arr = sorted(set(arr))


compress = {value: idx for idx, value in enumerate(sorted_arr)}


print(*[compress[x] for x in arr])