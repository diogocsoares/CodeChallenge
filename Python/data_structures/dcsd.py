s = "red2 blue5 black4 green1 gold3"
colors = s.split()
for element in colors.sort(key=lambda colors: colors[len(colors)-1]):
    element = element[0:len(element)-1]

print(colors)
