
print("===== Way 1 =====")
imput = "red2 blue5 black4 green1 gold3"
colors = imput.split()
colors.sort(key=lambda colors: colors[-1])
print(colors)
ordered_colors = []
for color in colors:
    ordered_colors.append(color[:-1])
print(ordered_colors)

print("===== Way 2 =====")
imput = "red2 blue5 black4 green1 gold3"
colors = imput.split()
colors.sort(key=lambda colors: colors[-1])
print(colors)
ordered_colors = list(map(lambda color: color[:-1], colors))
print(ordered_colors)

print("=== Way 3 ===")
imput = "red2 blue5 black4 green1 gold3"
colors = imput.split()
print(colors)
print(sorted(
    map(lambda color: color[:-1], colors), key=lambda colors: colors[-1]))

print("===== Way 4 =====")
imput = "red2 blue5 black4 green1 gold3"
colors = imput.split()
print(colors)
colors.sort(key=lambda colors: colors[-1])
ordered_colors = [color[:-1] for color in colors]
print(ordered_colors)
