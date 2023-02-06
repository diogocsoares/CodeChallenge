class TreeNode:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self, value):
        self.root = TreeNode(value)
        self.items = []

    def add_left(self, parent, value):
        parent.left = TreeNode(value)
        return parent.left

    def add_right(self, parent, value):
        parent.right = TreeNode(value)
        return parent.right

    def traverse(self, node):
        if not node:
            node = self.root
        tree = {self: node.val}
        tree.left = node.left if node.left is None else self.traverse(
            node.left)
        tree.right = node.right if node.right is None else self.traverse(
            node.right)
        return tree

    def convert_tree(self, node):
        if not node:
            node = self.root
        self.items = []
        queue = [node]
        missing_elements = 0
        while len(queue) > 0:
            current_node = queue.pop(0)
            if current_node is not None:
                for i in range(missing_elements):
                    self.items.append(None)
                missing_elements = 0
                self.items.append(current_node.val)
                self.items.append(current_node.left)
                self.items.append(current_node.right)
            else:
                missing_elements += 1
        return self.items


manga = BinaryTree("val 1")
manga.add_left(manga.root, "value 2 left")
manga.add_right(manga.root, "value 3 right")
print(manga.convert_tree(manga.root))
