from math import gcd

N = int(input())


nums = [
    11,
    111,
    11111,
    1111111,
    11111111111,
    1111111111111,
    11111111111111111
]

answer = 0

def lcm(a, b):
    return a // gcd(a, b) * b

def dfs(start, cur_lcm, depth):
    global answer

    for i in range(start, len(nums)):
        nxt_lcm = lcm(cur_lcm, nums[i])

        if nxt_lcm > N:
            continue

        if depth % 2 == 0:
            answer += N // nxt_lcm
        else:
            answer -= N // nxt_lcm

        dfs(i + 1, nxt_lcm, depth + 1)

dfs(0, 1, 0)
print(answer)