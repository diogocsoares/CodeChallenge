# ====================
# ===== SORTING =====
# ====================

# ----- Quick Sort -----
def quicksort(values):
    if len(values) <= 1:
        return values
    else:
        pivot = values[0]
        less = [position for position in values[1:] if position <= pivot]
        greater = [position for position in values[1:] if position > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)


# values = [3, 7, 1, 9, 2, 8, 4, 6]
# sorted_values = quicksort(values)
# print(sorted_values)

# ----- Sliding Window -----

# A sliding window is a technique for iterating over a list or array in a specified window size and performing some operation on the elements in that window. The window is shifted one position at a time until the end of the list is reached.

# For example, consider a list of numbers [2, 4, 6, 8, 10]. We can use a sliding window of size 3 to calculate the rolling average of each set of three consecutive numbers:


def sliding_window(nums, k):
    n = len(nums)
    if n < k:
        return []
    window_sum = sum(nums[:k])
    result = [window_sum]
    for i in range(k, n):
        window_sum += nums[i] - nums[i-k]
        result.append(window_sum)
    return result


# nums = [2, 4, 6, 8, 10]
# k = 3
# print(sliding_window(nums, k))

# ----- Two Pointer (or iterator) -----
# The two pointer (or iterator) algorithm pattern is commonly used in array or linked list problems that require iterating over the data with two pointers or iterators. Here's an example of how to use the two pointer pattern to solve the problem of finding all pairs of numbers in an array whose sum is equal to a given target value:


def find_pairs(nums, target):
    left = 0
    right = len(nums) - 1
    pairs = []
    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum == target:
            pairs.append((nums[left], nums[right]))
            left += 1
            right -= 1
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return pairs


# nums = [1, 2, 3, 4, 5, 6]
# target = 11
# pairs = find_pairs(nums, target)
# print(pairs)

# ----- Fast and Slow Pointers -----
# The fast and slow pointer algorithm pattern is commonly used in linked list problems to find the middle or to detect cycles. Here's an example of how to use the fast and slow pointer pattern to find the middle of a linked list:

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def find_middle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.val


def has_cycle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False


def detect_cycle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    if not fast or not fast.next:
        return None
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow


# head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
# middle = find_middle(head)
# print(middle)

# Example linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 5 -> 2
# head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
# head.next.next.next.next = head.next
# has_cycle = has_cycle(head)
# print(has_cycle)

# Example linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 5 -> 2
# head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
# head.next.next.next.next = head.next
# cycle_node = detect_cycle(head)
# print(cycle_node.val)
