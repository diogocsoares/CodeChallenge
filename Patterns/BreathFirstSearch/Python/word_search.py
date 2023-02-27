class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        tot_lin = len(board)
        tot_col = len(board[0])
        tot_char = len(word)
        current_char, lin, col = 0, 0, 0

        if tot_lin > tot_lin * tot_col:
            return False

        while lin < tot_lin and col < tot_col:
            if word[current_char] == board[lin][col]:
                if self.find_path(board, word, tot_char, tot_lin, tot_col, 0, lin, col):
                    return True
                else:
                    self.move_forward(col, tot_col, lin, tot_lin)
            else:
                self.move_forward(col, tot_col, lin, tot_lin)

        return False

    def find_path(self, board, word, tot_char, tot_lin, tot_col, position, found_lin, found_col) -> bool:
        left, right, up, down = -1, +1, -1, +1

        if tot_char == position:
            return True

        if found_lin < 0 or found_col < 0 or found_lin >= tot_lin or found_col >= tot_col:
            return False

        if board[found_lin][found_col] == word[position]:
            temp_char = board[found_lin][found_col]
            board[found_lin][found_col] = '#'

            result = (self.find_path(board, word, tot_char, tot_lin, tot_col, position + 1, found_lin + down, found_col) |
                      self.find_path(board, word, tot_char, tot_lin, tot_col, position + 1, found_lin + up, found_col) |
                      self.find_path(board, word, tot_char, tot_lin, tot_col, position + 1, found_lin, found_col + left) |
                      self.find_path(board, word, tot_char, tot_lin, tot_col, position + 1, found_lin, found_col + right))

            board[found_lin][found_col] = temp_char
            return result
        else:
            return False

    def move_forward(self, col, tot_col, lin, tot_lin):
        if col < tot_col - 1:
            col += 1
        elif lin < tot_lin:
            lin += 1
            col = 0


# print(Solution().exist([["A", "B", "C", "E"], ["S", "F", "C", "S"],
#       ["A", "D", "E", "E"]], "ABCCED"))
print(Solution().exist([["A", "B", "C", "E"], [
      "S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"))
