
print("===== Way 1 =====")
imput = "red2 blue5 black4 green1 gold3"
colors = imput.split()
colors.sort(key=lambda colors: colors[len(colors)-1])
print(colors)
ordered_colors = []
for color in colors:
    ordered_colors.append(color[:len(color)-1])
print(ordered_colors)

print("===== Way 2 =====")
imput = "red2 blue5 black4 green1 gold3"
colors = imput.split()
colors.sort(key=lambda colors: colors[len(colors)-1])
print(colors)
ordered_colors = list(map(lambda color: color[:len(color)-1], colors))
print(ordered_colors)
