import sys

input = sys.stdin.readline

def dist(p1, p2):
    return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2

def is_square(points):
    d = []

    for i in range(4):
        for j in range(i + 1, 4):
            d.append(dist(points[i], points[j]))

    d.sort()

    return (
        d[0] > 0 and
        d[0] == d[1] == d[2] == d[3] and
        d[4] == d[5] and
        d[4] == 2 * d[0]
    )

T = int(input())

for _ in range(T):
    points = [tuple(map(int, input().split())) for _ in range(4)]
    print(1 if is_square(points) else 0)