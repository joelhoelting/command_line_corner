def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
  ans = []
  q = [[0]]
  
  while q:
    first = q.pop(0)
    
    if first[-1] == len(graph) - 1:
      ans.append(first)
      continue
    
    for num in graph[first[-1]]:
      q.append(first + [num])
  
  return ans