imput = "red2 blue5 black4 green1 gold3 blue5"
colors = imput.split()
count = colors.count("blue5")
print(count)
for i in range(count):
    colors.remove("blue5")
print(colors)


imput = "red2 blue5 black4 green1 gold3 blue5"
colors = imput.split()

has_blue = filter(lambda item: item == "blue5", colors)
print(list(has_blue))

has_blue_comprehension = [item for item in colors if item == "blue5"]

print(list(has_blue_comprehension))

while "blue5" in colors:
    colors.remove("blue5")
print(colors)


# imput = "red2 blue5 black4 green1 gold3 blue5"
#colors = imput.split()
colors.sort(key=lambda colors: colors[-1])
upper_clean = map(
    lambda color: color[:-1].upper(), colors)
print(list(upper_clean))

print("===== No Duplicates =====")
imput = "red2 blue5 black4 green1 gold3 blue5"
colors = set(imput.split())
print(colors)
other_colors = {"red2", "black4", "gray6"}
print(other_colors | colors)
print(other_colors & colors)
print(other_colors - colors)
print(other_colors ^ colors)

if "black4" in other_colors:
    print("yes")
else:
    print("no")

test_dict = {
    "code01": {'name': "Diogo", 'age': 43},
    "code03": {'name': "Carla", 'age': 40},
    "code04": {'name': "Daniel", 'age': 39},
    "code05": {'name': "Deb", 'age': 28}
}
# names = [test_dict[item]['name'] for item in test_dict]
# print(names)

# for x in test_dict:
#     print(x, test_dict[x]['name'])

# for key, value in test_dict.items():
#     print(key, value['name'])

clients = {item[-2:]: test_dict[item]['name'] for item in test_dict}

a = True
b = True
c = False
print(a or b or c)


def fa(a) -> bool:
    return a


def fb(b) -> bool:
    return a


def fc(c) -> bool:
    return a


d = fa(a) or fc(c) or fb(b)
print(d)
