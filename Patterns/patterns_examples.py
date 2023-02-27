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


nums = [2, 4, 6, 8, 10]
k = 3
print(sliding_window(nums, k))
