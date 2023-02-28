from collections import deque


def valid(data):
    queue = []
    p = ("(", ")")
    s = ("[", "]")
    c = ("{", "}")
    for value in data:
        if data and len(queue) == 0:
            queue.append(value)
        elif value in queue[-1]:
            queue.append(value)
            continue
        elif value in (p[0], s[0], c[0]):
            queue.append(value)
        elif queue[-1] == p[0] and value == p[1]:
            queue.pop()
        elif queue[-1] == s[0] and value == s[1]:
            queue.pop()
        elif queue[-1] == c[0] and value == c[1]:
            queue.pop()
        elif value in (p[1], s[1], c[1]):
            return "invalid"
    if not queue:
        return "valid"
    else:
        return "invalid"


print(valid("()[]{}"))


class Solution:
    def isValid(self, s: str) -> bool:
        map = {')': '(', ']': '[', '}': '{'}
        stack = []

        for c in s:
            if c not in map:
                stack.append(c)
                continue
            if not stack or stack[-1] != map[c]:
                return False
            stack.pop()

        return not stack
