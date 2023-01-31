class ListNode:
    def __init__(self, value):
        self.val = value
        self.next = None


class LinkedList:
    def __init__(self, value):
        if type(value) == list:
            self.head = ListNode(value[0])
            self.tail = self.head
            self.length = 1
            for element in value[1:]:
                self.append(element)
        else:
            self.head = ListNode(value)
            self.tail = self.head
            self.length = 1

    def append(self, value):
        new_node = ListNode(value)
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1
        return self

    def prepend(self, value):
        new_node = ListNode(value)
        new_node.next = self.head
        self.head = new_node
        self.length += 1
        return self

    def lookup(self, value):
        return self.traverse_to_key(value)

    def traverse_to_key(self, key):
        current_node = self.head
        while current_node.next is not None:
            if current_node.val == key:
                return current_node
            current_node = current_node.next
        return False

    def remove_by_value(self, key):
        current_node = self.head
        previous_node = self.head
        while current_node.next is not None:
            if current_node.val == key:
                if current_node == previous_node:
                    self.head = current_node.next
                    self.length -= 1
                    return self.print_list()
                else:
                    previous_node.next = current_node.next
                    self.length -= 1
                    return self.print_list()
            previous_node = current_node
            current_node = current_node.next
        if current_node.next is not None and current_node.val == key:
            previous_node.next = None
            self.tail = previous_node
            self.length -= 1
            return self.print_list()
        return False

    def remove_by_index(self, index):
        if index > self.length:
            return False
        if index == 0:
            new_head_node = self.head.next
            self.head = new_head_node
            self.length -= 1
            return self.print_list()
        previous_node = self.traverse_to_index(index - 1)
        current_node = previous_node.next
        previous_node.next = current_node.next
        if previous_node.next is None:
            self.tail = previous_node
        self.length -= 1
        return self.print_list()

    def insert_by_index(self, index, value):
        if index >= self.length:
            self.append(value)
            return self.print_list()
        if index == 0:
            self.prepend(value)
            return self.print_list()
        new_node = ListNode(value)
        current_node = self.traverse_to_index(index)
        holding_pointer = current_node.next
        current_node.next = new_node
        new_node.next = holding_pointer
        self.length += 1
        return self.print_list()

    def insert_by_value(self, key, value):
        current_node = self.traverse_to_key(key)
        if current_node:
            if current_node.next is None:
                self.append(value)
                return self.print_list()
            new_node = ListNode(value)
            new_node.next = current_node.next
            current_node.next = new_node
            self.length += 1
            return self.print_list()
        else:
            self.prepend(value)
            return self.print_list()

    def print_list(self):
        current_node = self.head
        array = [current_node.val]
        while current_node.next is not None:
            current_node = current_node.next
            array.append(current_node.val)
        return array

    def traverse_to_index(self, index):
        counter = 0
        current_node = self.head
        while counter != index:
            current_node = current_node.next
            counter += 1
        return current_node

    def reverse(self):
        if self.length == 1:
            return self.print_list()
        current_node = self.head
        reversed_linked_list = (LinkedList(current_node.val))
        while current_node.next is not None:
            current_node = current_node.next
            reversed_linked_list.prepend(current_node.val)
        return reversed_linked_list.print_list()

    def reverse2(self):
        if self.length == 1:
            return self.print_list()
        first = self.head
        second = self.head.next
        self.tail = self.head
        while second:
            hold_node = second.next
            second.next = first
            first = second
            second = hold_node
        self.head.next = None
        self.head = first
        return self.print_list()


my_list = LinkedList(["val 1", "val 2", "val3", "other", "xxx", "val6"])
print(my_list.print_list())

my_list.append("new value")
print(my_list.print_list())

my_list.prepend("new first")
print(my_list.print_list())

my_list.remove_by_value("other")
print(my_list.print_list())

print(my_list.reverse())
print(my_list.traverse_to_index(2).val)
