import sys
from collections import deque

input = sys.stdin.readline

N, M, R = map(int, input().split())

graph = [[] for _ in range(N + 1)]
for _ in range(M):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

for i in range(1, N + 1):
    graph[i].sort(reverse=True)

order = [0] * (N + 1)     
cnt = 1

q = deque([R])            
order[R] = cnt       

while q:                 
    u = q.popleft()      
    for v in graph[u]:   
        if order[v] == 0:
            cnt += 1
            order[v] = cnt
            q.append(v)

for i in range(1, N + 1):
    print(order[i])