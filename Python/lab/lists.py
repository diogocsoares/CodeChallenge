# Multiply items
def unpacking_list(*stuffs):
    var_a, var_b, var_c, *other, var_last = stuffs
    print(var_a + var_b + var_c + var_last)
    print(other)
    return other


others = unpacking_list("a", "b", "c", "d", "e", "f", "g",
                        "h", "i", "j", "k", "l", "m", "n")

# Python3 code to demonstrate working of
# Sort Nested keys by Value
# Using sorted() + generator expression + lamda

# initializing dictionary
test_dict = {'Nikhil': {'English': 5, 'Maths': 2, 'Science': 14},
             'Akash': {'English': 15, 'Maths': 7, 'Science': 2},
             'Akshat': {'English': 5, 'Maths': 50, 'Science': 20}}

# printing original dictionary
print("The original dictionary : " + str(test_dict))

# Sort Nested keys by Value
# Using sorted() + generator expression + lamda
res = {key: dict(
    sorted(val.items(), key=lambda ele: ele[1]))
    for key, val in test_dict.items()}

# printing result
print("The sorted dictionary : " + str(res))
