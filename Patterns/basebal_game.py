def baseball(ops):
    output = []
    for element in ops:
        if element == "+":
            output.append(output[-1]+output[-2])
        elif element == "D":
            output.append(output[-1]*2)
        elif element == "C":
            output.pop()
        else:
            output.append(int(element))

    return sum(output)


print(baseball(["5", "2", "C", "D", "+"]))
print(baseball(["5", "-2", "4", "C", "D", "9", "+", "+"]))
print(baseball(["1"]))
