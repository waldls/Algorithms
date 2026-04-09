import sys
input = sys.stdin.readline

N = int(input())

col = [False] * N                
diag1 = [False] * (2 * N - 1) 
diag2 = [False] * (2 * N - 1)

answer = 0

def backtrack(row):
    global answer


    if row == N:
        answer += 1
        return

    for c in range(N):
        d1 = row - c + N - 1
        d2 = row + c


        if col[c] or diag1[d1] or diag2[d2]:
            continue


        col[c] = True
        diag1[d1] = True
        diag2[d2] = True

        backtrack(row + 1)


        col[c] = False
        diag1[d1] = False
        diag2[d2] = False

backtrack(0)
print(answer)