N, K = map(int, input().split())

coins = []
for _ in range(N):
    coins.append(int(input()))

count = 0

for coin in reversed(coins):
    if K >= coin:
        count += K // coin
        K %= coin

print(count)