def solution(citations):
    citations.sort(reverse=True) 
    for idx , citation in enumerate(citations, start = 1):
        if citation < idx:
            return idx - 1   
        
    return len(citations)