class MyArray:
    def __init__(self):
        self.length = 0
        self.data = {}

    def get(self, index):
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1
        return self.length

    def pop(self):
        item = self.data[self.length - 1]
        del self.data[self.length - 1]
        self.length -= 1
        return item

    def delete(self, index):
        item = self.data[index]
        self.shift_items(index)
        return item

    def shift_items(self, index):
        for i in range(index, self.length-1):
            self.data[i] = self.data[i + 1]

        del self.data[self.length - 1]
        self.length -= 1


stuffs = MyArray()
stuffs.push("hi")
stuffs.push("diogo")
stuffs.push("hello")
print(stuffs.length)

for i in range(stuffs.length):
    print(stuffs.get(i))

deleted = stuffs.pop()

print(deleted)

for i in range(stuffs.length):
    print(stuffs.get(i))

print(stuffs.length)
stuffs.push("carla")

print(stuffs.delete(1))

for i in range(stuffs.length):
    print(stuffs.get(i))
