export const demoQuestions = [
  "1. Two Sum",
  "2. Add Two Numbers",
  "3. Longest Substring Without Repeating Characters",
  "4. Median of Two Sorted Arrays",
  "5. Longest Palindromic Substring",
  "6. Zigzag Conversion",
  "7. Reverse Integer",
  "8. String to Integer (atoi)",
  "9. Palindrome Number",
  "10. Regular Expression Matching",
  "11. Container With Most Water",
  "12. Integer to Roman",
  "13. Roman to Integer",
  "14. Longest Common Prefix",
  "15. 3Sum",
  "16. 3Sum Closest",
  "17. Letter Combinations of a Phone Number",
  "18. 4Sum",
  "19. Remove Nth Node From End of List",
  "20. Valid Parentheses",
  "21. Merge Two Sorted Lists",
  "22. Generate Parentheses",
  "23. Merge k Sorted Lists",
  "24. Swap Nodes in Pairs",
  "25. Reverse Nodes in k-Group",
  "26. Remove Duplicates from Sorted Array",
  "27. Remove Element",
  "28. Implement strStr()",
  "29. Divide Two Integers",
  "30. Substring with Concatenation of All Words",
  "31. Next Permutation",
  "32. Longest Valid Parentheses",
  "33. Search in Rotated Sorted Array",
  "34. Find First and Last Position of Element in Sorted Array",
  "35. Search Insert Position",
  "36. Valid Sudoku",
  "37. Sudoku Solver",
  "38. Count and Say",
  "39. Combination Sum",
  "40. Combination Sum II",
  "41. First Missing Positive",
  "42. Trapping Rain Water",
  "43. Multiply Strings",
  "44. Wildcard Matching",
  "45. Jump Game II",
  "46. Permutations",
  "47. Permutations II",
  "48. Rotate Image",
  "49. Group Anagrams",
  "50. Pow(x, n)",
  "51. N-Queens",
  "52. N-Queens II",
  "53. Maximum Subarray",
  "54. Spiral Matrix",
  "55. Jump Game",
  "56. Merge Intervals",
  "57. Insert Interval",
  "58. Length of Last Word",
  "59. Spiral Matrix II",
  "60. Permutation Sequence",
  "61. Rotate List",
  "62. Unique Paths",
  "63. Unique Paths II",
  "64. Minimum Path Sum",
  "65. Valid Number",
  "66. Plus One",
  "67. Add Binary",
  "68. Text Justification",
  "69. Sqrt(x)",
  "70. Climbing Stairs",
  "71. Simplify Path",
  "72. Edit Distance",
  "73. Set Matrix Zeroes",
  "74. Search a 2D Matrix",
  "75. Sort Colors",
  "76. Minimum Window Substring",
  "77. Combinations",
  "78. Subsets",
  "79. Word Search",
  "80. Remove Duplicates from Sorted Array II",
  "81. Search in Rotated Sorted Array II",
  "82. Remove Duplicates from Sorted List II",
  "83. Remove Duplicates from Sorted List",
  "84. Largest Rectangle in Histogram",
  "85. Maximal Rectangle",
  "86. Partition List",
  "87. Scramble String",
  "88. Merge Sorted Array",
  "89. Gray Code",
  "90. Subsets II",
  "91. Decode Ways",
  "92. Reverse Linked List II",
  "93. Restore IP Addresses",
  "94. Binary Tree Inorder Traversal",
  "95. Unique Binary Search Trees II",
  "96. Unique Binary Search Trees",
  "97. Interleaving String",
  "98. Validate Binary Search Tree",
  "99. Recover Binary Search Tree",
  "100. Same Tree",
  "101. Symmetric Tree",
  "102. Binary Tree Level Order Traversal",
  "103. Binary Tree Zigzag Level Order Traversal",
  "104. Maximum Depth of Binary Tree",
  "105. Construct Binary Tree from Preorder and Inorder Traversal",
  "106. Construct Binary Tree from Inorder and Postorder Traversal",
  "107. Binary Tree Level Order Traversal II",
  "108. Convert Sorted Array to Binary Search Tree",
  "109. Convert Sorted List to Binary Search Tree",
  "110. Balanced Binary Tree",
  "111. Minimum Depth of Binary Tree",
  "112. Path Sum",
  "113. Path Sum II",
  "114. Flatten Binary Tree to Linked List",
  "115. Distinct Subsequences",
  "116. Populating Next Right Pointers in Each Node",
  "117. Populating Next Right Pointers in Each Node II",
];
export const programmingLanguages = [
  { name: "Select Language", value: "" },
  { name: "Javascript", value: "javascript" },
  { name: "Java", value: "java" },
  { name: "Python", value: "python" },
  { name: "Typescript", value: "typescript" },
  { name: "Golang", value: "golang" },
  { name: "Ruby", value: "ruby" },
  { name: "C#", value: "csharp" },
];
export const highlighterLanguages = [
  { name: "Select Language", value: "" },
  {
    name: "Javascript",
    value: "javascript",
    code: `const [options, setOptions] = useState({
    Description: true,
    Solution: false,
    Submissions: false,
  });
  const { Description, Submissions, Solution } = options;
  useEffect(() => {
    if (day) {
      setNavcss("bg-white");
    }
    if (!day) {
      setNavcss("bg-gray-900");
    }
  }, [day, navBack]);

  const handleLanguage = (e) => {
    if (e.target.value) {
      setAceSetthings((prev) => ({ ...prev, mode: e.target.value }));
    }
  };`,
  },
  { name: "Java", value: "java" },
  { name: "Python", value: "python" },
  { name: "Typescript", value: "typescript" },
  { name: "Golang", value: "golang" },
  { name: "Ruby", value: "ruby" },
  { name: "C#", value: "csharp" },
];
export const programmingThemes = [
  { name: "Select Theme", value: "" },
  { name: "Monokai", value: "monokai" },
  { name: "Github", value: "github" },
  { name: "Tomorrow", value: "tomorrow" },
  { name: "Terminal", value: "terminal" },
  { name: "Solarized Dark", value: "solarized_dark" },
];

export const programmingFontSize = [
  { name: "Select Font Size", value: "" },
  { name: "14", value: 14 },
  { name: "16", value: 16 },
  { name: "18", value: 18 },
  { name: "20", value: 20 },
  { name: "24", value: 24 },
  { name: "28", value: 28 },
  { name: "32", value: 32 },
  { name: "40", value: 40 },
];
