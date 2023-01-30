# JavaScript Way translated to Python

class HashTable:
    def __init__(self, size):
        self.data = [None for elem in range(size)]

    def hash_function(self, key):
        _hash = 0
        for i in range(len(key)):
            _hash = (_hash + ord(key[i]) * i) % len(self.data)
        return _hash

    def set(self, key, value):
        point = self.hash_function(key)
        if not self.data[point]:
            self.data[point] = []
            self.data[point].append([key, value])
        else:
            self.data[point].append([key, value])
        return True

    def get(self, key):
        point_data = self.data[self.hash_function(key)]
        for i in range(len(point_data)):
            if point_data[i][0] == key:
                return point_data[i][1]
        return point_data[1]

    def keys(self):
        keys_array = []
        for i in range(len(self.data)):
            if self.data[i]:
                for j in range(len(self.data[i])):
                    keys_array.append(self.data[i][j][0])
        return keys_array


print("JavaScript Way translated to Python")
myHashTable = HashTable(10)
myHashTable.set('grapes', 1000)
myHashTable.set('lemon', 100)
myHashTable.set('apple', 330)
myHashTable.set('orange', 54)
print(myHashTable.get('apple'))
print(myHashTable.keys())

# Pythonic code


class PyHashTable:
    def __init__(self, size):
        self.data = [None for elem in range(size)]

    def hash_function(self, key):
        _hash = 0
        for i in range(len(key)):
            _hash = (_hash + ord(key[i]) * i) % len(self.data)
        return _hash

    def set(self, key, value):
        point = self.hash_function(key)
        if not self.data[point]:
            self.data[point] = []
            self.data[point].append([key, value])
        else:
            self.data[point].append([key, value])
        return True

    def get(self, key):
        point_data = self.data[self.hash_function(key)]
        for point_key in point_data:
            if point_key == key:
                return point_key[1]
        return point_data[0][1]

    def keys(self):
        keys_array = []
        for point_key in self.data:
            if point_key:
                for value in point_key:
                    keys_array.append(value[0])
        return keys_array


print("")
print("Pytonic way")
myHashTable = PyHashTable(10)
myHashTable.set('grapes', 1000)
myHashTable.set('lemon', 100)
myHashTable.set('apple', 330)
myHashTable.set('orange', 54)
print(myHashTable.get('apple'))
print(myHashTable.keys())
