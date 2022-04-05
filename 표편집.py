def solution(n, k, cmd):
    answer = ['O'] * n
    list = {i: [i-1, i+1] for i in range(n)}
    stack = []

    for c in cmd:
        if c[0] == 'D':
            for i in range(int(c[2:])):
                k = list[k][1]

        if c[0] == 'U':
            for i in range(int(c[2:])):
                k = list[k][0]

        if c[0] == 'C':
            prev, next = list[k]
            stack.append([prev, next, k])
            answer[k] = 'X'

            if next == n:
                k = prev
            else:
                k = next

            if next == n:
                list[prev][1] = next
                
            elif prev == -1:
                list[next][0] = prev
                
            else:
                list[prev][1] = next
                list[next][0] = prev
                
        if c[0] == 'Z':
            prev, next, now = stack.pop()
            answer[now] = 'O'
            
            if next == n:
                list[prev][1] = now
                
            elif prev == -1:
                list[next][0] = now
                
            else:
                list[prev][1] = now
                list[next][0] = now

    return "".join(answer)