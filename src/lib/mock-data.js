export const mockProblems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Array',
    acceptance: 47.3,
    solved: 125000,
    status: 'Solved',
    description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
    ],
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    category: 'Linked List',
    acceptance: 32.5,
    solved: 98000,
    status: 'Attempted',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order.',
    examples: [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
      },
    ],
    constraints: [
      'The number of nodes in each linked list is in the range [1, 100]',
      '0 <= Node.val <= 9',
    ],
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    category: 'String',
    acceptance: 33.2,
    solved: 87000,
    status: 'Attempted',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
      },
    ],
    constraints: [
      '0 <= s.length <= 5 * 104',
      's consists of English letters, digits, symbols and spaces',
    ],
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    category: 'Array',
    acceptance: 27.8,
    solved: 45000,
    status: 'Unsolved',
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median.',
    examples: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
      },
    ],
    constraints: [
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
    ],
  },
  {
    id: 5,
    title: 'Palindrome Number',
    difficulty: 'Easy',
    category: 'Math',
    acceptance: 50.5,
    solved: 110000,
    status: 'Solved',
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    examples: [
      {
        input: 'x = 121',
        output: 'true',
      },
    ],
    constraints: [
      '-231 <= x <= 231 - 1',
    ],
  },
  {
    id: 6,
    title: 'Regular Expression Matching',
    difficulty: 'Hard',
    category: 'String',
    acceptance: 26.2,
    solved: 32000,
    status: 'Unsolved',
    description: 'Given an input string s and a pattern p, implement regular expression matching.',
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: 'false',
      },
    ],
    constraints: [
      '1 <= s.length <= 20',
      '1 <= p.length <= 30',
    ],
  },
]

export const categories = ['All', 'Array', 'String', 'Linked List', 'Math', 'Dynamic Programming', 'Tree', 'Graph']
