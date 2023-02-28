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

# ----- Merge intervals -----
# The merge intervals algorithm pattern is typically used when dealing with a list of intervals that may overlap with each other. The goal is to merge any overlapping intervals into a single interval. This pattern can be used in a variety of applications, such as:

# Scheduling: If you have a list of time intervals representing appointments or meetings, you may need to merge overlapping intervals to find available time slots.

# Traffic control: If you have a list of time intervals representing the arrival and departure times of planes at an airport, you may need to merge overlapping intervals to optimize air traffic control.

# Log analysis: If you have a list of time intervals representing the start and end times of log events, you may need to merge overlapping intervals to analyze patterns or detect anomalies.

# Genomics: If you have a list of genomic intervals representing genes or regulatory regions, you may need to merge overlapping intervals to identify larger genomic features.

# The merge intervals pattern is a commonly used algorithm pattern in computer science and can be a useful tool for solving a wide range of problems involving intervals.


def merge_intervals(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for interval in intervals[1:]:
        if interval[0] <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], interval[1])
        else:
            merged.append(interval)
    return merged


# intervals = [[1, 3], [2, 6], [8, 16], [15, 18]]
# merged_intervals = merge_intervals(intervals)
# print(merged_intervals)


# ----- Cycle Sort -----

# Cycle sort is an in-place sorting algorithm that works particularly well for arrays with many repeated values. The basic idea behind cycle sort is to find the correct position of each element in the array by cycling through the values until the correct position is found.

# Here is the step-by-step process for cycle sort:

# For each element in the array, count the number of elements that are less than it. This gives you the number of cycles needed to reach the correct position of that element.

# Cycle through the elements in each cycle. Starting with the current element, swap it with the element that should be in its correct position. Continue swapping elements until you reach the starting element. This will complete one cycle.

# Repeat step 2 for each cycle until all elements are in their correct positions.

def cycle_sort(arr):
    n = len(arr)
    for cycle_start in range(n - 1):
        item = arr[cycle_start]
        pos = cycle_start
        for i in range(cycle_start + 1, n):
            if arr[i] < item:
                pos += 1
        if pos == cycle_start:
            continue
        while item == arr[pos]:
            pos += 1
        arr[pos], item = item, arr[pos]
        while pos != cycle_start:
            pos = cycle_start
            for i in range(cycle_start + 1, n):
                if arr[i] < item:
                    pos += 1
            while item == arr[pos]:
                pos += 1
            arr[pos], item = item, arr[pos]
    return arr


# print(cycle_sort([1, 5, 10, 3, 2, 4, 8]))

my_list = [1, 2, "3", "four", 5.0]

for item in my_list:
    if isinstance(item, (int, float)):
        print(f"{item} is a number")
    else:
        print(f"{item} is not a number")
