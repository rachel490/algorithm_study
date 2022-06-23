import sys

sys.stdin = open('test.txt', 'r')
arr = [int(sys.stdin.readline().strip()) for _ in range(9)]
max = -1
idx = -1

for i in range(len(arr)):
	if arr[i] > max:
		max = arr[i]
		idx = i+1

print(max)
print(idx)