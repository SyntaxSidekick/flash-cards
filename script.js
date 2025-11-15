// -------------------------
// FLASHCARD DATA (125 cards)
// -------------------------
const flashcards = [
  // ---------- ARRAYS (1-25) ----------
  {id:1, category:"Arrays", difficulty:"Easy", question:"What is the time complexity of accessing an array element by index?", choices:["O(1)","O(n)","O(log n)","O(n^2)"], answer:"O(1)", explanation:`<p class="mb-4">Arrays store elements in contiguous memory locations. When you access an element by index, the computer calculates the memory address instantly.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const arr = [10, 20, 30, 40, 50];

// Step 1: Access element at index 2
const value = arr[2];  // Returns 30

// Step 2: How it works internally
// Memory Address = base_address + (index × element_size)
// If base is 1000 and each element is 8 bytes:
// Address = 1000 + (2 × 8) = 1016

// Step 3: Time Complexity
// This calculation is ONE arithmetic operation
// Always takes same time regardless of array size
// ✓ O(1) - Constant time!</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Why not O(n)?</strong> We don't need to loop through elements. Direct index calculation is instant!</p>`},
  {id:2, category:"Arrays", difficulty:"Easy", question:"What is the index of the first element in a JavaScript array?", choices:["0","1","-1","Depends"], answer:"0", explanation:`<p class="mb-4">JavaScript uses zero-based indexing, meaning the first element is at index 0, second at index 1, and so on.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const fruits = ['apple', 'banana', 'cherry'];

// Step 1: First element is at index 0
console.log(fruits[0]);  // 'apple' ✓

// Step 2: Second element is at index 1
console.log(fruits[1]);  // 'banana'

// Step 3: Last element
console.log(fruits[2]);  // 'cherry'

// Step 4: Common mistake - starting at 1
console.log(fruits[1]);  // This is 'banana', NOT 'apple'!</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Remember:</strong> Index 0 = first element. This is standard in C, Java, Python, JavaScript!</p>`},
  {id:3, category:"Arrays", difficulty:"Easy", question:"Which method adds one or more elements to the end of an array?", choices:["push()","pop()","shift()","unshift()"], answer:"push()", explanation:`<p class="mb-4">The <code class="bg-[#1e293b] px-2 py-1 rounded text-[#34d399]">push()</code> method appends elements to the end of an array and returns the new length.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const numbers = [1, 2, 3];

// Step 1: Add single element to end
numbers.push(4);
console.log(numbers);  // [1, 2, 3, 4]

// Step 2: Add multiple elements
numbers.push(5, 6);
console.log(numbers);  // [1, 2, 3, 4, 5, 6]

// Step 3: Returns new length
const newLength = numbers.push(7);
console.log(newLength);  // 7
console.log(numbers);    // [1, 2, 3, 4, 5, 6, 7]

// Time Complexity: O(1) - just adds to end!</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Why O(1)?</strong> No need to shift elements - just append to the end!</p>`},
  {id:4, category:"Arrays", difficulty:"Easy", question:"Which method removes the last element from an array?", choices:["pop()","push()","shift()","unshift()"], answer:"pop()", explanation:`<p class="mb-4">The <code class="bg-[#1e293b] px-2 py-1 rounded text-[#34d399]">pop()</code> method removes and returns the last element from an array.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const stack = [1, 2, 3, 4];

// Step 1: Remove and return last element
const last = stack.pop();
console.log(last);   // 4
console.log(stack);  // [1, 2, 3]

// Step 2: Pop again
const nextLast = stack.pop();
console.log(nextLast);  // 3
console.log(stack);     // [1, 2]

// Step 3: Opposite of push()
stack.push(5);    // [1, 2, 5]
stack.pop();      // [1, 2]

// Time Complexity: O(1) - just removes from end!</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Stack behavior:</strong> push() adds to end, pop() removes from end - both O(1)!</p>`},
  {id:5, category:"Arrays", difficulty:"Medium", question:"Removing an element from the start of an array has what complexity?", choices:["O(1)","O(n)","O(log n)","O(n^2)"], answer:"O(n)", explanation:`<p class="mb-4">When you remove from the start, all remaining elements must shift one position left to fill the gap.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const arr = [1, 2, 3, 4, 5];

// Step 1: Remove first element using shift()
arr.shift();  // Removes 1

// Step 2: What happens internally
// Before: [1, 2, 3, 4, 5]  (indices 0,1,2,3,4)
// After:  [2, 3, 4, 5]     (indices 0,1,2,3)
//         ↑  ↑  ↑  ↑
// Each element moves left one position

// Step 3: Time analysis
// If array has n=5 elements:
// - Remove element at index 0
// - Shift 4 remaining elements left
// - O(n-1) = O(n) operations!

// Comparison:
arr.pop();    // O(1) - just remove last
arr.shift();  // O(n) - must shift all elements!</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Key insight:</strong> Operating at the end = O(1). Operating at the start = O(n)!</p>`},
  {id:6, category:"Arrays", difficulty:"Medium", question:"Finding the maximum in an unsorted array of n elements is?", choices:["O(n)","O(log n)","O(n^2)","O(1)"], answer:"O(n)", explanation:`<p class="mb-4">You must examine every element at least once to be sure you've found the maximum.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const arr = [3, 7, 2, 9, 1, 5, 8];

// Step 1: Initialize max with first element
let max = arr[0];  // max = 3

// Step 2: Compare with each remaining element
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];  // Update max if larger found
  }
}

// Step-by-step execution:
// i=1: arr[1]=7 > 3 → max=7
// i=2: arr[2]=2 < 7 → max=7
// i=3: arr[3]=9 > 7 → max=9 ✓
// i=4: arr[4]=1 < 9 → max=9
// i=5: arr[5]=5 < 9 → max=9
// i=6: arr[6]=8 < 9 → max=9

console.log(max);  // 9

// Time: Must check all n elements = O(n)</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Why not O(log n)?</strong> Array is unsorted - can't use binary search. Must check every element!</p>`},
  {id:7, category:"Arrays", difficulty:"Medium", question:"Merging two sorted arrays of size n each takes?", choices:["O(n)","O(n^2)","O(log n)","O(n log n)"], answer:"O(n)", explanation:`<p class="mb-4">Using two pointers (one for each array), you compare elements and add the smaller one to the result.</p>
<div class="bg-[#0f172a] rounded-xl p-4 mb-4 border border-[#60a5fa]/30">
  <div class="text-[#93c5fd] text-xs font-semibold mb-2 uppercase tracking-wide">📝 Code Example</div>
  <pre class="text-sm overflow-x-auto"><code class="text-[#e0f2fe]">const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

// Step 1: Initialize pointers and result
let i = 0, j = 0;
const merged = [];

// Step 2: Compare and merge
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] <= arr2[j]) {
    merged.push(arr1[i]);  // Take from arr1
    i++;
  } else {
    merged.push(arr2[j]);  // Take from arr2
    j++;
  }
}

// Step 3: Add remaining elements
while (i < arr1.length) merged.push(arr1[i++]);
while (j < arr2.length) merged.push(arr2[j++]);

console.log(merged);  // [1, 2, 3, 4, 5, 6, 7, 8]

// Time: Process 8 total elements once = O(2n) = O(n)</code></pre>
</div>
<p class="text-sm text-[#93c5fd]"><strong>Key insight:</strong> Each element processed exactly once. This is the merge step in merge sort!</p>`},
  {id:8, category:"Arrays", difficulty:"Medium", question:"Which technique is used to find pairs in a sorted array?", choices:["Two Pointers","Sliding Window","Recursion","Hash Map"], answer:"Two Pointers", explanation:"Two pointers technique uses one pointer at the start and one at the end of a sorted array. By moving pointers based on comparison (sum too large? move right pointer left; too small? move left pointer right), you can find pairs in O(n) time instead of O(n²) nested loops."},
  {id:9, category:"Arrays", difficulty:"Medium", question:"Rotate an array of size n by k positions efficiently?", choices:["Use reversal algorithm","Nested loops","Recursion","HashMap"], answer:"Use reversal algorithm", explanation:"The reversal algorithm is optimal: 1) Reverse entire array, 2) Reverse first k elements, 3) Reverse remaining elements. This achieves rotation in O(n) time and O(1) space. Example: [1,2,3,4,5] rotated by 2 → [4,5,1,2,3]."},
  {id:10, category:"Arrays", difficulty:"Hard", question:"Find the maximum subarray sum in an array using Kadane's algorithm.", choices:["O(n)","O(n^2)","O(log n)","O(n^3)"], answer:"O(n)", explanation:"Kadane's algorithm tracks current sum and global maximum while iterating once through the array. At each position, decide: extend current subarray or start fresh. This single pass makes it O(n). Naive approach checking all subarrays would be O(n²) or O(n³)."},
  {id:11, category:"Arrays", difficulty:"Hard", question:"Given an array, find the median efficiently.", choices:["Sort + pick middle","Nested loops","Recursion","HashMap"], answer:"Sort + pick middle", explanation:"For the median, you need the middle element(s) when ordered. Sorting takes O(n log n) and picking the middle is O(1), so total is O(n log n). Advanced algorithms like Quickselect can do O(n) average case, but sorting is the most straightforward efficient solution."},
  {id:12, category:"Arrays", difficulty:"Hard", question:"Find the majority element in an array.", choices:["Boyer-Moore Voting Algorithm","Sorting","HashMap counting","Recursion"], answer:"Boyer-Moore Voting Algorithm"},
  {id:13, category:"Arrays", difficulty:"Hard", question:"Count inversions in an array.", choices:["Modified Merge Sort","Nested loops","HashMap","Recursion"], answer:"Modified Merge Sort"},
  {id:14, category:"Arrays", difficulty:"Hard", question:"Find duplicate elements in an array with O(n) time and O(1) space.", choices:["Use cycle detection","HashMap","Nested loops","Sorting"], answer:"Use cycle detection"},
  {id:15, category:"Arrays", difficulty:"Easy", question:"Which method adds one or more elements to the beginning of an array?", choices:["unshift()","push()","pop()","shift()"], answer:"unshift()"},
  {id:16, category:"Arrays", difficulty:"Easy", question:"Which method removes the first element from an array?", choices:["shift()","pop()","push()","unshift()"], answer:"shift()"},
  {id:17, category:"Arrays", difficulty:"Medium", question:"Find all pairs with a given sum in an array.", choices:["HashMap","Nested loops","Sorting","Recursion"], answer:"HashMap"},
  {id:18, category:"Arrays", difficulty:"Medium", question:"Move all zeros to the end of an array.", choices:["Two Pointers","Nested loops","Recursion","HashMap"], answer:"Two Pointers"},
  {id:19, category:"Arrays", difficulty:"Hard", question:"Find the maximum product subarray.", choices:["Dynamic Programming","Sorting","Nested loops","HashMap"], answer:"Dynamic Programming"},
  {id:20, category:"Arrays", difficulty:"Hard", question:"Find missing number in array 1 to n.", choices:["Sum formula","HashMap","Nested loops","Sorting"], answer:"Sum formula"},
  {id:21, category:"Arrays", difficulty:"Medium", question:"Check if array is sorted.", choices:["Linear scan","Sorting","HashMap","Recursion"], answer:"Linear scan"},
  {id:22, category:"Arrays", difficulty:"Medium", question:"Find intersection of two arrays.", choices:["HashMap","Nested loops","Sorting","Recursion"], answer:"HashMap"},
  {id:23, category:"Arrays", difficulty:"Easy", question:"Get length of an array in JavaScript.", choices:["array.length","array.size","len(array)","array.count"], answer:"array.length"},
  {id:24, category:"Arrays", difficulty:"Medium", question:"Remove duplicates from a sorted array.", choices:["Two Pointers","HashMap","Nested loops","Recursion"], answer:"Two Pointers"},
  {id:25, category:"Arrays", difficulty:"Hard", question:"Find k-th largest element in an array.", choices:["Heap","Sort","Nested loops","Recursion"], answer:"Heap"},

  // ---------- STRINGS (26-50) ----------
  {id:26, category:"Strings", difficulty:"Easy", question:"Which method converts a string to lowercase in JavaScript?", choices:["toLowerCase()","toUpperCase()","lowerCase()","downCase()"], answer:"toLowerCase()"},
  {id:27, category:"Strings", difficulty:"Easy", question:"Strings in JavaScript are mutable or immutable?", choices:["Mutable","Immutable","Depends","Both"], answer:"Immutable"},
  {id:28, category:"Strings", difficulty:"Easy", question:"Get the length of a string?", choices:["str.length","len(str)","str.size","length(str)"], answer:"str.length"},
  {id:29, category:"Strings", difficulty:"Easy", question:"Which method removes whitespace from both ends of a string?", choices:["trim()","strip()","clean()","trimSpaces()"], answer:"trim()"},
  {id:30, category:"Strings", difficulty:"Medium", question:"Check if a string is a palindrome using two pointers.", choices:["Two Pointers","Sliding Window","Recursion","HashMap"], answer:"Two Pointers"},
  {id:31, category:"Strings", difficulty:"Medium", question:"Find the longest substring without repeating characters.", choices:["Sliding Window","Two Pointers","HashMap","Recursion"], answer:"Sliding Window"},
  {id:32, category:"Strings", difficulty:"Medium", question:"Count frequency of characters in a string.", choices:["HashMap","Nested loops","Recursion","Sorting"], answer:"HashMap"},
  {id:33, category:"Strings", difficulty:"Medium", question:"Reverse a string.", choices:["Split-Array-Join","Loop","Recursion","All"], answer:"All"},
  {id:34, category:"Strings", difficulty:"Hard", question:"Check if two strings are anagrams.", choices:["HashMap frequency count","Sorting then compare","Nested loops","All of the above"], answer:"All of the above"},
  {id:35, category:"Strings", difficulty:"Hard", question:"Longest palindromic substring problem.", choices:["Expand around center","Dynamic Programming","Recursion","All"], answer:"All"},
  {id:36, category:"Strings", difficulty:"Medium", question:"Replace all occurrences of 'a' with 'b'.", choices:["replaceAll","replace","loop","Regex"], answer:"replaceAll"},
  {id:37, category:"Strings", difficulty:"Medium", question:"Check if string starts with substring.", choices:["startsWith()","indexOf()","slice()","substring()"], answer:"startsWith()"},
  {id:38, category:"Strings", difficulty:"Medium", question:"Check if string ends with substring.", choices:["endsWith()","indexOf()","slice()","substring()"], answer:"endsWith()"},
  {id:39, category:"Strings", difficulty:"Easy", question:"Concatenate two strings.", choices:["+ operator","concat()","Template literals","All"], answer:"All"},
  {id:40, category:"Strings", difficulty:"Easy", question:"Access character at index i.", choices:["charAt()","charCodeAt()","slice()","substring()"], answer:"charAt()"},
  {id:41, category:"Strings", difficulty:"Hard", question:"Implement strstr function (substring search).", choices:["KMP Algorithm","Naive","Rabin-Karp","All"], answer:"All"},
  {id:42, category:"Strings", difficulty:"Hard", question:"Count palindromic substrings in a string.", choices:["Dynamic Programming","Expand Around Center","Recursion","All"], answer:"All"},
  {id:43, category:"Strings", difficulty:"Medium", question:"Check if string contains only digits.", choices:["Regex","isNaN()","parseInt","All"], answer:"Regex"},
  {id:44, category:"Strings", difficulty:"Medium", question:"Convert string to array of characters.", choices:["split('')","Array.from","Both","None"], answer:"Both"},
  {id:45, category:"Strings", difficulty:"Easy", question:"Convert number to string.", choices:["toString()","String()","Template literals","All"], answer:"All"},
  {id:46, category:"Strings", difficulty:"Medium", question:"Check if two strings are equal ignoring case.", choices:["toLowerCase() + compare","toUpperCase() + compare","LocaleCompare","All"], answer:"All"},
  {id:47, category:"Strings", difficulty:"Hard", question:"Find minimum window substring containing all characters.", choices:["Sliding Window","HashMap","Two Pointers","All"], answer:"All"},
  {id:48, category:"Strings", difficulty:"Medium", question:"Count vowels in a string.", choices:["Loop","Regex","Both","None"], answer:"Both"},
  {id:49, category:"Strings", difficulty:"Medium", question:"Remove all duplicate characters from string.", choices:["Set","Loop","Both","None"], answer:"Both"},
  {id:50, category:"Strings", difficulty:"Hard", question:"Longest common substring between two strings.", choices:["DP","Sliding Window","Recursion","All"], answer:"DP"},

  // ---------- HASHMAPS (51-75) ----------
  {id:51, category:"HashMaps", difficulty:"Easy", question:"What is the main benefit of using a Hash Map?", choices:["O(1) lookup","O(n^2) sorting","Memory heavy","Ordered storage"], answer:"O(1) lookup"},
  {id:52, category:"HashMaps", difficulty:"Easy", question:"In JavaScript, which can be used as a hash map?", choices:["Object","Array","String","Set"], answer:"Object"},
  {id:53, category:"HashMaps", difficulty:"Easy", question:"Which method adds a key-value pair to a Map?", choices:["set()","push()","add()","insert()"], answer:"set()"},
  {id:54, category:"HashMaps", difficulty:"Medium", question:"Find first duplicate number in an array efficiently.", choices:["Use Set","Nested loops","Sorting","Recursion"], answer:"Use Set"},
  {id:55, category:"HashMaps", difficulty:"Medium", question:"Two Sum problem uses which data structure?", choices:["HashMap","Array","LinkedList","Stack"], answer:"HashMap"},
  {id:56, category:"HashMaps", difficulty:"Medium", question:"Count frequency of elements in array.", choices:["HashMap","Nested loops","Sorting","Recursion"], answer:"HashMap"},
  {id:57, category:"HashMaps", difficulty:"Medium", question:"Group anagrams from a list of strings.", choices:["HashMap of sorted strings","Brute-force","Nested loops","Recursion"], answer:"HashMap of sorted strings"},
  {id:58, category:"HashMaps", difficulty:"Hard", question:"Find intersection of two arrays with duplicates.", choices:["HashMap","Nested loops","Sorting","All"], answer:"HashMap"},
  {id:59, category:"HashMaps", difficulty:"Hard", question:"Find subarray with given sum using HashMap.", choices:["HashMap prefix sum","Nested loops","Sorting","Recursion"], answer:"HashMap prefix sum"},
  {id:60, category:"HashMaps", difficulty:"Hard", question:"Longest substring with k distinct characters.", choices:["HashMap Sliding Window","Nested loops","Recursion","Sorting"], answer:"HashMap Sliding Window"},
  {id:61, category:"HashMaps", difficulty:"Easy", question:"Check if key exists in Map.", choices:["has()","get()","contains()","indexOf()"], answer:"has()"},
  {id:62, category:"HashMaps", difficulty:"Medium", question:"Count unique elements in array.", choices:["HashSet/Map","Loop","Nested loops","Recursion"], answer:"HashSet/Map"},
  {id:63, category:"HashMaps", difficulty:"Medium", question:"Find first non-repeating character in string.", choices:["HashMap","Nested loops","Sorting","Recursion"], answer:"HashMap"},
  {id:64, category:"HashMaps", difficulty:"Medium", question:"Check if array has duplicate elements.", choices:["HashMap","Nested loops","Sorting","Recursion"], answer:"HashMap"},
  {id:65, category:"HashMaps", difficulty:"Hard", question:"Longest consecutive sequence in unsorted array.", choices:["HashSet/Map","Sorting","Nested loops","Recursion"], answer:"HashSet/Map"},
  {id:66, category:"HashMaps", difficulty:"Hard", question:"Find two numbers with difference k.", choices:["HashMap","Nested loops","Sorting","Recursion"], answer:"HashMap"},
  {id:67, category:"HashMaps", difficulty:"Easy", question:"Iterate over Map keys.", choices:["map.keys()","map.values()","map.entries()","All"], answer:"map.keys()"},
  {id:68, category:"HashMaps", difficulty:"Easy", question:"Iterate over Map values.", choices:["map.keys()","map.values()","map.entries()","All"], answer:"map.values()"},
  {id:69, category:"HashMaps", difficulty:"Medium", question:"Merge two maps.", choices:["Iterate keys","Nested loops","Recursion","All"], answer:"Iterate keys"},
  {id:70, category:"HashMaps", difficulty:"Medium", question:"Remove duplicates from array.", choices:["HashSet/Map","Nested loops","Sorting","All"], answer:"HashSet/Map"},
  {id:71, category:"HashMaps", difficulty:"Medium", question:"Find majority element using HashMap.", choices:["HashMap counting","Nested loops","Sorting","All"], answer:"HashMap counting"},
  {id:72, category:"HashMaps", difficulty:"Hard", question:"Subarray sum equals k.", choices:["Prefix Sum + HashMap","Nested loops","Sorting","Recursion"], answer:"Prefix Sum + HashMap"},
  {id:73, category:"HashMaps", difficulty:"Hard", question:"Check if two arrays are permutations of each other.", choices:["HashMap frequency","Sorting","Nested loops","All"], answer:"HashMap frequency"},
  {id:74, category:"HashMaps", difficulty:"Hard", question:"Find longest substring without repeating characters.", choices:["HashMap Sliding Window","Nested loops","Recursion","Sorting"], answer:"HashMap Sliding Window"},
  {id:75, category:"HashMaps", difficulty:"Hard", question:"Find duplicate elements in array.", choices:["HashMap","Nested loops","Sorting","All"], answer:"HashMap"},

  // ---------- CodingAloud (76-100) ----------
  {id:76, category:"CodingAloud", difficulty:"Easy", question:"What is the first step when coding aloud?", choices:["Restate problem","Write code","Analyze complexity","Test cases"], answer:"Restate problem"},
  {id:77, category:"CodingAloud", difficulty:"Easy", question:"Before coding, you should?", choices:["Explain approach","Write code","Submit","Ignore"], answer:"Explain approach"},
  {id:78, category:"CodingAloud", difficulty:"Easy", question:"Clarify constraints before coding?", choices:["Yes","No","Sometimes","Depends"], answer:"Yes"},
  {id:79, category:"CodingAloud", difficulty:"Medium", question:"While coding aloud, mention time and space complexity?", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:80, category:"CodingAloud", difficulty:"Medium", question:"Walk through code with example?", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:81, category:"CodingAloud", difficulty:"Medium", question:"Explain variable choices while coding aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:82, category:"CodingAloud", difficulty:"Medium", question:"Mention edge cases while coding aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:83, category:"CodingAloud", difficulty:"Hard", question:"Think aloud clearly and logically.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:84, category:"CodingAloud", difficulty:"Hard", question:"Walk interviewer through your solution.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:85, category:"CodingAloud", difficulty:"Hard", question:"Explain trade-offs in your solution.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:86, category:"CodingAloud", difficulty:"Medium", question:"Restate problem in your own words.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:87, category:"CodingAloud", difficulty:"Medium", question:"Ask clarifying questions.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:88, category:"CodingAloud", difficulty:"Medium", question:"Discuss alternative solutions.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:89, category:"CodingAloud", difficulty:"Hard", question:"Check correctness by walking examples.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:90, category:"CodingAloud", difficulty:"Hard", question:"Communicate assumptions.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:91, category:"CodingAloud", difficulty:"Medium", question:"Explain recursive approach aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:92, category:"CodingAloud", difficulty:"Medium", question:"Explain iterative approach aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:93, category:"CodingAloud", difficulty:"Hard", question:"Explain code efficiency aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:94, category:"CodingAloud", difficulty:"Hard", question:"Explain code correctness aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:95, category:"CodingAloud", difficulty:"Hard", question:"Explain how code handles edge cases.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:96, category:"CodingAloud", difficulty:"Medium", question:"Comment on space usage while coding aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:97, category:"CodingAloud", difficulty:"Medium", question:"Discuss trade-offs of algorithms.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:98, category:"CodingAloud", difficulty:"Medium", question:"Explain choice of data structures.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:99, category:"CodingAloud", difficulty:"Medium", question:"Describe algorithm steps aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:100, category:"CodingAloud", difficulty:"Medium", question:"Summarize solution after coding aloud.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},

  // ---------- CodeReview (101-125) ----------
  {id:101, category:"CodeReview", difficulty:"Easy", question:"Check readability first in code review.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:102, category:"CodeReview", difficulty:"Easy", question:"Variable names should be descriptive.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:103, category:"CodeReview", difficulty:"Easy", question:"Functions should be short and focused.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:104, category:"CodeReview", difficulty:"Medium", question:"Check edge cases during review.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:105, category:"CodeReview", difficulty:"Medium", question:"Check for repeated code and refactor.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:106, category:"CodeReview", difficulty:"Medium", question:"Ensure code follows style guidelines.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:107, category:"CodeReview", difficulty:"Medium", question:"Check for error handling.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:108, category:"CodeReview", difficulty:"Medium", question:"Ensure performance is acceptable.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:109, category:"CodeReview", difficulty:"Hard", question:"Evaluate memory usage.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:110, category:"CodeReview", difficulty:"Hard", question:"Check algorithm correctness.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:111, category:"CodeReview", difficulty:"Hard", question:"Check security vulnerabilities.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:112, category:"CodeReview", difficulty:"Hard", question:"Check for concurrency issues.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:113, category:"CodeReview", difficulty:"Hard", question:"Check API design consistency.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:114, category:"CodeReview", difficulty:"Hard", question:"Check logging and monitoring.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:115, category:"CodeReview", difficulty:"Medium", question:"Check exception handling.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:116, category:"CodeReview", difficulty:"Medium", question:"Check input validation.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:117, category:"CodeReview", difficulty:"Medium", question:"Check output formatting.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:118, category:"CodeReview", difficulty:"Medium", question:"Check documentation/comments.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:119, category:"CodeReview", difficulty:"Medium", question:"Check test coverage.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:120, category:"CodeReview", difficulty:"Medium", question:"Check dependency management.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:121, category:"CodeReview", difficulty:"Hard", question:"Check code scalability.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:122, category:"CodeReview", difficulty:"Hard", question:"Check maintainability.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:123, category:"CodeReview", difficulty:"Hard", question:"Check modularity.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:124, category:"CodeReview", difficulty:"Hard", question:"Check logging consistency.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"},
  {id:125, category:"CodeReview", difficulty:"Hard", question:"Check naming conventions.", choices:["Yes","No","Sometimes","Never"], answer:"Yes"}
];

// -------------------------
// GLOBAL STATE & DOM
// -------------------------

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

let filteredCards = shuffleArray(flashcards);
let currentIndex = 0;
let globalStats = {};
let correctStreak = 0;
flashcards.forEach(card => globalStats[card.id] = { correct:false, attempted:false });

const flashcardEl = document.getElementById('flashcard');
const questionText = document.getElementById('questionText');
const choicesContainer = document.getElementById('choicesContainer');
const answerText = document.getElementById('answerText');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
const percentEl = document.getElementById('percent');
const progressBar = document.getElementById('progressBar');
const cardPosition = document.getElementById('cardPosition');
const difficultyBadge = document.getElementById('difficultyBadge');
const categoryBadge = document.getElementById('categoryBadge');
const streakCounter = document.getElementById('streakCounter');
const streakCount = document.getElementById('streakCount');

// Modal elements
const explanationModal = document.getElementById('explanationModal');
const modalYourAnswer = document.getElementById('modalYourAnswer');
const modalCorrectAnswer = document.getElementById('modalCorrectAnswer');
const modalExplanation = document.getElementById('modalExplanation');
const closeModal = document.getElementById('closeModal');
const continueBtn = document.getElementById('continueBtn');

// -------------------------
// FUNCTIONS
// -------------------------
function renderCard() {
  const card = filteredCards[currentIndex];
  if(!card) return;
  flashcardEl.classList.remove('flip');
  
  // Add slide-in animation
  flashcardEl.classList.remove('animate-slide-in');
  setTimeout(() => {
    flashcardEl.classList.add('animate-slide-in');
  }, 10);
  
  questionText.textContent = card.question;
  answerText.textContent = card.answer;
  
  // Update card position counter
  cardPosition.textContent = `Card ${currentIndex + 1} of ${filteredCards.length}`;
  
  // Update category badge
  categoryBadge.textContent = card.category;
  
  // Update difficulty badge with Tailwind classes - blue/green theme for focus
  difficultyBadge.textContent = card.difficulty;
  difficultyBadge.className = 'inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide shadow-xl';
  if (card.difficulty === 'Easy') {
    difficultyBadge.classList.add('bg-[#34d399]', 'text-[#064e3b]');
  } else if (card.difficulty === 'Medium') {
    difficultyBadge.classList.add('bg-[#60a5fa]', 'text-[#1e3a5f]');
  } else {
    difficultyBadge.classList.add('bg-[#fbbf24]', 'text-[#78350f]');
  }
  
  choicesContainer.innerHTML = '';
  card.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.className = 'px-4 md:px-5 py-3 md:py-4 bg-[#1e293b] border-2 border-[#60a5fa]/40 rounded-xl md:rounded-2xl font-semibold text-[#e0f2fe] hover:bg-[#3b82f6] hover:text-white hover:border-[#60a5fa] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-xl text-sm md:text-base';
    btn.onclick = () => checkAnswer(choice, card, btn);
    choicesContainer.appendChild(btn);
  });
  updateProgress();
}

function checkAnswer(selected, card, btn) {
  // Disable all buttons
  const allButtons = choicesContainer.querySelectorAll('button');
  allButtons.forEach(b => b.disabled = true);
  
  globalStats[card.id].attempted = true;
  
  if(selected === card.answer) {
    globalStats[card.id].correct = true;
    correctStreak++;
    
    // Update streak counter display
    updateStreakCounter();
    
    // Check for celebration milestone
    if (correctStreak % 5 === 0) {
      triggerCelebration();
    }
    
    // Style correct button
    btn.className = 'px-4 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#10b981] to-[#34d399] border-2 border-[#10b981] rounded-xl md:rounded-2xl font-bold text-white shadow-xl animate-pulse-success text-sm md:text-base';
    
    // Flip card after delay
    setTimeout(() => {
      flashcardEl.classList.add('flip');
    }, 800);
  } else {
    globalStats[card.id].correct = false;
    correctStreak = 0; // Reset streak on wrong answer
    updateStreakCounter();
    
    // Style wrong button
    btn.className = 'px-4 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] border-2 border-[#f59e0b] rounded-xl md:rounded-2xl font-bold text-[#78350f] shadow-xl animate-shake text-sm md:text-base';
    
    // Highlight correct answer after delay
    setTimeout(() => {
      allButtons.forEach(b => {
        if (b.textContent === card.answer) {
          b.className = 'px-4 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#10b981] to-[#34d399] border-2 border-[#10b981] rounded-xl md:rounded-2xl font-bold text-white shadow-xl text-sm md:text-base';
        }
      });
      
      // Show explanation modal after highlighting correct answer
      setTimeout(() => {
        showExplanationModal(selected, card);
      }, 600);
    }, 400);
  }
  
  updateStats();
  updateProgress();
}

function showExplanationModal(userAnswer, card) {
  modalYourAnswer.textContent = userAnswer;
  modalCorrectAnswer.textContent = card.answer;
  
  // Generate explanation based on card content
  let explanation = '';
  
  if (card.explanation) {
    // Use custom explanation if available
    explanation = `<div class="space-y-4">`;
    explanation += `<div class="prose prose-invert max-w-none">${card.explanation}</div>`;
    explanation += `</div>`;
  } else {
    // Generate context-aware explanation with code
    explanation = generateExplanation(card, userAnswer);
  }
  
  modalExplanation.innerHTML = `<p>${explanation}</p>`;
  
  explanationModal.classList.remove('hidden');
  explanationModal.classList.add('flex');
}

function generateExplanation(card, userAnswer) {
  const category = card.category;
  const question = card.question;
  const correctAnswer = card.answer;
  
  // Generate step-by-step explanation with code examples
  let explanation = '';
  
  // Time complexity questions
  if (question.includes('time complexity') || question.includes('complexity')) {
    explanation = `<strong>Step 1: Understand the operation</strong><br>`;
    explanation += `The question asks about "${question.toLowerCase()}".<br><br>`;
    explanation += `<strong>Step 2: Analyze the correct answer</strong><br>`;
    explanation += `The answer is ${correctAnswer}. `;
    
    if (correctAnswer === 'O(1)') {
      explanation += `This means constant time - the operation takes the same amount of time regardless of input size.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Accessing array element by index - O(1)
const arr = [1, 2, 3, 4, 5];
const element = arr[2];  // Direct access, always fast

// Getting object property - O(1)
const obj = { name: 'John' };
const name = obj.name;  // Hash lookup, constant time</code></pre>`;
    } else if (correctAnswer === 'O(n)') {
      explanation += `This means linear time - if you double the input size, the operation takes roughly twice as long.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Finding max in unsorted array - O(n)
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {  // n iterations
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Must check every element once!</code></pre>`;
    } else if (correctAnswer === 'O(log n)') {
      explanation += `This means logarithmic time - the operation divides the problem in half repeatedly, like binary search.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Binary search - O(log n)
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;  // Cut half
    else right = mid - 1;  // Cut half
  }
  return -1;
}</code></pre>`;
    } else if (correctAnswer === 'O(n^2)') {
      explanation += `This means quadratic time - nested loops iterating through the data.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Finding duplicates with nested loops - O(n²)
function findDuplicates(arr) {
  const dupes = [];
  for (let i = 0; i < arr.length; i++) {       // n times
    for (let j = i + 1; j < arr.length; j++) { // n times
      if (arr[i] === arr[j]) dupes.push(arr[i]);
    }
  }
  return dupes;
}
// n × n = n² operations!</code></pre>`;
    } else if (correctAnswer === 'O(n log n)') {
      explanation += `This is typical of efficient sorting algorithms like merge sort and quick sort.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Merge Sort - O(n log n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));   // Divide
  const right = mergeSort(arr.slice(mid));     // Divide
  
  return merge(left, right);  // Conquer in O(n)
}
// log n divisions × n work per level = O(n log n)</code></pre>`;
    }
    
    explanation += `<br><strong>Step 3: Why your answer was incorrect</strong><br>`;
    explanation += `You selected "${userAnswer}", which represents a different growth rate. `;
    explanation += `Remember: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) in terms of efficiency.`;
  }
  
  // Array methods
  else if (category === 'Arrays' && (question.includes('method') || question.includes('push') || question.includes('pop') || question.includes('shift') || question.includes('unshift'))) {
    explanation = `<strong>Step 1: Know your array methods</strong><br>`;
    explanation += `JavaScript provides several built-in array methods for common operations.<br><br>`;
    explanation += `<strong>Step 2: The correct method is ${correctAnswer}</strong><br>`;
    
    if (correctAnswer.includes('push')) {
      explanation += `<code>push()</code> adds elements to the END of an array.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">const arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.push(5, 6);     // [1, 2, 3, 4, 5, 6]

// Returns new length
const len = arr.push(7);  // len = 7
// O(1) time complexity - just add to end!</code></pre>`;
    } else if (correctAnswer.includes('pop')) {
      explanation += `<code>pop()</code> removes and returns the LAST element.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">const arr = [1, 2, 3, 4];
const last = arr.pop();  // last = 4
console.log(arr);        // [1, 2, 3]

// Opposite of push()
// O(1) time complexity - just remove from end!</code></pre>`;
    } else if (correctAnswer.includes('shift')) {
      explanation += `<code>shift()</code> removes and returns the FIRST element.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">const arr = [1, 2, 3, 4];
const first = arr.shift();  // first = 1
console.log(arr);           // [2, 3, 4]

// All elements must shift left!
// O(n) time complexity - slower than pop()</code></pre>`;
    } else if (correctAnswer.includes('unshift')) {
      explanation += `<code>unshift()</code> adds elements to the START of an array.<br><br>`;
      explanation += `<strong>Code Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">const arr = [3, 4];
arr.unshift(1, 2);   // [1, 2, 3, 4]

// All elements must shift right!
// O(n) time complexity - slower than push()</code></pre>`;
    }
    
    explanation += `<br><strong>Step 3: Remember the pattern</strong><br>`;
    explanation += `End operations (push/pop) are O(1). Start operations (unshift/shift) are O(n) because elements must shift.`;
  }
  
  // Two Pointers technique
  else if (correctAnswer.toLowerCase().includes('two pointer')) {
    explanation = `<strong>Step 1: Understanding Two Pointers</strong><br>`;
    explanation += `Two pointers technique uses one pointer at the start and one at the end of a sorted array.<br><br>`;
    explanation += `<strong>Step 2: Code Example - Finding pairs with target sum</strong><br>`;
    explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Two Pointers - O(n) solution
function findPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [arr[left], arr[right]];  // Found!
    } else if (sum < target) {
      left++;   // Need larger sum, move left pointer →
    } else {
      right--;  // Need smaller sum, move right pointer ←
    }
  }
  return null;
}

// Example: [1, 2, 3, 6, 8, 9], target = 10
// left=0, right=5: 1+9=10 ✓ Found!</code></pre>`;
    explanation += `<br><strong>Step 3: Why this beats nested loops</strong><br>`;
    explanation += `Two pointers: O(n) with one pass. Nested loops: O(n²) checking all pairs. Much faster for sorted arrays!`;
  }
  
  // Hash Maps
  else if (category === 'HashMaps' || correctAnswer.toLowerCase().includes('hash')) {
    explanation = `<strong>Step 1: Hash Map fundamentals</strong><br>`;
    explanation += `Hash maps provide O(1) average-case lookup, insertion, and deletion.<br><br>`;
    explanation += `<strong>Step 2: Code Example - Finding duplicates</strong><br>`;
    explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Using Hash Map - O(n) solution
function findDuplicates(arr) {
  const seen = new Map();  // Hash map to track counts
  const dupes = [];
  
  for (const num of arr) {
    if (seen.has(num)) {
      dupes.push(num);       // Already seen = duplicate
    } else {
      seen.set(num, true);   // First time seeing it
    }
  }
  return dupes;
}

// Example: [1, 2, 3, 2, 4, 1]
// Returns: [2, 1]
// Only ONE pass through array!</code></pre>`;
    explanation += `<br><strong>Step 3: Trade-off</strong><br>`;
    explanation += `Hash maps use O(n) extra space but make lookups O(1) instead of O(n). Space for speed!`;
  }
  
  // String operations
  else if (category === 'Strings') {
    explanation = `<strong>Step 1: Understanding strings</strong><br>`;
    explanation += `In most languages, strings are immutable (cannot be changed after creation).<br><br>`;
    explanation += `<strong>Step 2: Code Example - ${correctAnswer}</strong><br>`;
    
    if (correctAnswer.toLowerCase().includes('two pointer')) {
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Check if string is palindrome - Two Pointers
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;  // Not a palindrome
    }
    left++;
    right--;
  }
  return true;
}

// "racecar" → left and right converge, all match ✓
// O(n) time, O(1) space</code></pre>`;
    } else {
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// String manipulation example
const str = "hello";
const reversed = str.split('').reverse().join('');
// "olleh"

// Strings are immutable - creates new string
const upper = str.toUpperCase();  // "HELLO"
console.log(str);  // Still "hello"</code></pre>`;
    }
    
    explanation += `<br><strong>Step 3: Why this matters</strong><br>`;
    explanation += `String problems are common in interviews. Know your techniques: two-pointers, sliding window, and hash maps.`;
  }
  
  // Sliding Window
  else if (correctAnswer.toLowerCase().includes('sliding window')) {
    explanation = `<strong>Step 1: Sliding Window Technique</strong><br>`;
    explanation += `Sliding window maintains a window that expands and contracts to find optimal subarray/substring.<br><br>`;
    explanation += `<strong>Step 2: Code Example - Max sum subarray of size k</strong><br>`;
    explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Sliding Window - O(n)
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  
  // Initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];  // Add new, remove old
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

// [2, 1, 5, 1, 3, 2], k=3
// Windows: [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6
// Max = 9</code></pre>`;
    explanation += `<br><strong>Step 3: Efficiency</strong><br>`;
    explanation += `Sliding window: O(n). Brute force checking all subarrays: O(n×k) or O(n²). Much more efficient!`;
  }
  
  // Kadane's Algorithm
  else if (question.toLowerCase().includes('kadane')) {
    explanation = `<strong>Step 1: Kadane's Algorithm</strong><br>`;
    explanation += `Find maximum subarray sum by tracking current sum and global maximum.<br><br>`;
    explanation += `<strong>Step 2: Code Example</strong><br>`;
    explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Kadane's Algorithm - O(n)
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let currentMax = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    // Either extend current subarray or start fresh
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  
  return maxSoFar;
}

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Best subarray: [4, -1, 2, 1] = 6
// Only ONE pass through array!</code></pre>`;
    explanation += `<br><strong>Step 3: Why O(n)?</strong><br>`;
    explanation += `Single pass through array. Brute force checking all subarrays would be O(n²) or O(n³). Kadane's is optimal!`;
  }
  
  // Coding Aloud / Code Review (Yes/No questions)
  else if (question.includes('?') && card.choices.includes('Yes')) {
    explanation = `<strong>Step 1: Interview best practices</strong><br>`;
    explanation += `During coding interviews, communication is as important as code correctness.<br><br>`;
    explanation += `<strong>Step 2: Why "${correctAnswer}" is correct</strong><br>`;
    
    if (question.toLowerCase().includes('explain') || question.toLowerCase().includes('mention') || question.toLowerCase().includes('communicate')) {
      explanation += `You should ALWAYS explain your thinking process. This shows problem-solving skills.<br><br>`;
      explanation += `<strong>Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Good: Explain while coding
"I'm using a hash map here because we need O(1) lookups
to check if we've seen this element before..."

const seen = new Map();
for (const num of arr) {
  if (seen.has(num)) {  // "This checks for duplicates"
    return true;
  }
  seen.set(num, true);
}

// Bad: Silent coding
// (writes code without explanation)</code></pre>`;
    } else if (question.toLowerCase().includes('edge case') || question.toLowerCase().includes('constraint')) {
      explanation += `Discussing edge cases demonstrates thoroughness and prevents bugs.<br><br>`;
      explanation += `<strong>Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// "Let me handle edge cases first"

function findMax(arr) {
  // Edge case: empty array
  if (arr.length === 0) return null;
  
  // Edge case: single element
  if (arr.length === 1) return arr[0];
  
  // Main logic
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}</code></pre>`;
    } else if (question.toLowerCase().includes('complexity')) {
      explanation += `Analyzing time and space complexity shows you understand efficiency.<br><br>`;
      explanation += `<strong>Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// "This solution has..."

function hasDuplicate(arr) {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

// "Time: O(n) - one pass through array
//  Space: O(n) - storing up to n elements in set
//  Trade-off: using extra space for faster time"</code></pre>`;
    } else {
      explanation += `This is a best practice that professional developers follow.<br><br>`;
      explanation += `<strong>Example:</strong><br>`;
      explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Good practice in interviews:
// ✓ Restate the problem
// ✓ Ask clarifying questions
// ✓ Explain your approach before coding
// ✓ Walk through examples
// ✓ Mention edge cases
// ✓ Analyze complexity
// ✓ Test with examples</code></pre>`;
    }
    
    explanation += `<br><strong>Step 3: Apply this</strong><br>`;
    explanation += `Practice coding aloud and explaining your reasoning. This skill improves with repetition!`;
  }
  
  // Generic fallback
  else {
    explanation = `<strong>Step 1: Review the question</strong><br>`;
    explanation += `"${question}"<br><br>`;
    explanation += `<strong>Step 2: The correct answer</strong><br>`;
    explanation += `${correctAnswer} is the right choice for this ${category.toLowerCase()} question.<br><br>`;
    explanation += `<strong>Code Example:</strong><br>`;
    explanation += `<pre style="background:#1e293b; padding:12px; border-radius:8px; overflow-x:auto; margin-top:8px;"><code style="color:#e0f2fe;">// Example related to: ${correctAnswer}

// Review the concept in your notes
// Practice similar problems
// Understand WHY this is the correct approach</code></pre>`;
    explanation += `<br><strong>Step 3: Learn from mistakes</strong><br>`;
    explanation += `You answered "${userAnswer}". Take time to understand why ${correctAnswer} is correct.`;
  }
  
  return explanation;
}

function closeExplanationModal() {
  explanationModal.classList.add('hidden');
  explanationModal.classList.remove('flex');
}

function updateStats() {
  let correct=0, wrong=0;
  Object.values(globalStats).forEach(s=>{
    if(s.attempted) s.correct?correct++:wrong++;
  });
  const total = correct+wrong;
  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  percentEl.textContent = total===0?'0%':Math.round(correct/total*100)+'%';
}

function updateProgress() {
  const card = filteredCards[currentIndex];
  const categoryCards = flashcards.filter(c=>c.category===card.category);
  const correctInCategory = categoryCards.filter(c=>globalStats[c.id].correct).length;
  const percent = Math.round(correctInCategory/categoryCards.length*100);
  progressBar.style.width = percent+'%';
  document.getElementById('progressText').textContent = percent+'%';
}

document.getElementById('prevBtn').onclick = ()=>{
  if(currentIndex>0){ currentIndex--; renderCard(); }
};
document.getElementById('nextBtn').onclick = ()=>{
  if(currentIndex<filteredCards.length-1){ currentIndex++; renderCard(); }
};
document.getElementById('nextAfterCorrect').onclick = ()=>{
  if(currentIndex<filteredCards.length-1){ currentIndex++; renderCard(); }
};

document.getElementById('categoryFilter').onchange = filterCards;
document.getElementById('difficultyFilter').onchange = filterCards;

// Modal event listeners
closeModal.onclick = closeExplanationModal;
continueBtn.onclick = closeExplanationModal;
explanationModal.onclick = (e) => {
  if (e.target === explanationModal) closeExplanationModal();
};

function filterCards() {
  const category = document.getElementById('categoryFilter').value;
  const difficulty = document.getElementById('difficultyFilter').value;
  const filtered = flashcards.filter(card=>
    (category==="All" || card.category===category) &&
    (difficulty==="All" || card.difficulty===difficulty)
  );
  filteredCards = shuffleArray(filtered);
  currentIndex=0;
  renderCard();
}

// -------------------------
// CELEBRATION FUNCTIONS
// -------------------------
function triggerCelebration() {
  // Show celebration message
  const celebrationMsg = document.getElementById('celebrationMessage');
  celebrationMsg.classList.remove('hidden');
  
  // Create confetti
  createConfetti();
  
  // Hide message after 3 seconds
  setTimeout(() => {
    celebrationMsg.classList.add('hidden');
  }, 3000);
}

function createConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#10b981', '#34d399', '#60a5fa', '#93c5fd', '#fbbf24', '#f59e0b'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `confetti ${2 + Math.random() * 2}s ease-out forwards`;
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    
    container.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 4500);
  }
}

function updateStreakCounter() {
  if (correctStreak > 0) {
    streakCounter.classList.remove('hidden');
    streakCounter.classList.add('flex');
    streakCount.textContent = correctStreak;
    
    // Pulse animation on streak update
    streakCounter.classList.add('animate-pulse-success');
    setTimeout(() => {
      streakCounter.classList.remove('animate-pulse-success');
    }, 500);
  } else {
    streakCounter.classList.add('hidden');
    streakCounter.classList.remove('flex');
  }
}

// -------------------------
// KEYBOARD NAVIGATION
// -------------------------
document.addEventListener('keydown', (e) => {
  // Ignore if modal is open
  if (!explanationModal.classList.contains('hidden')) return;
  
  // Arrow keys for navigation
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      renderCard();
    }
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    if (currentIndex < filteredCards.length - 1) {
      currentIndex++;
      renderCard();
    }
  }
  // Number keys (1-4) for selecting answers
  else if (e.key >= '1' && e.key <= '4') {
    const buttons = choicesContainer.querySelectorAll('button');
    const index = parseInt(e.key) - 1;
    if (buttons[index] && !buttons[index].disabled) {
      const card = filteredCards[currentIndex];
      checkAnswer(buttons[index].textContent, card, buttons[index]);
    }
  }
  // Space or Enter to advance to next card when showing answer
  else if ((e.key === ' ' || e.key === 'Enter') && flashcardEl.classList.contains('flip')) {
    e.preventDefault();
    if (currentIndex < filteredCards.length - 1) {
      currentIndex++;
      renderCard();
    }
  }
});

// -------------------------
// INITIALIZE
// -------------------------
renderCard();
updateStats();
