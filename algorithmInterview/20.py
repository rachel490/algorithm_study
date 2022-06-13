# 문제 : 유효한 괄호
# 괄호로 된 입력값이 율바른지 판단

def isValid(s:str) -> bool:
	stack = []
	table = {            # 괄호 맵핑하기 : 닫는 괄호와 짝을 이루는 여는 괄호를 맵핑
		')' : '(', 
		'}' : '{',
		']' : '['
	}

	for char in s:
		if char not in table:    # 여는 괄호들은 stack에 일단 넣기
			stack.append(char)
		elif not stack or table[char] != stack.pop():     #stack이 비어있거나 (닫는 괄호가 먼저 오는 경우) + 현재 char에 맵핑된 여는 괄호와 stack에서 꺼낸 괄호가 일치하지 않으면 false 반환
			return False
	
	return len(stack) == 0     # 다 잘 맵핑이 된 괄호들이었으면 stack이 비어있어야함.


answer = isValid('}')
print(answer)
