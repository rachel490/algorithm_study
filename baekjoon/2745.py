import sys

sys.stdin = open('test.txt', 'r')
num, base = sys.stdin.readline().split(' ')
answer = 0
num = num[::-1]

for idx, n in enumerate(num):
	if n >= '0' and n <= '9' : 
		s = int(n)
	else :
		s = ord(n) - 55

	answer += (int(base) ** idx) * s

print(answer)