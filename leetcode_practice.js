/////////////////929. Unique Email Addresses////////////
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let tempArray;
    let newArray = [];
    emails.forEach(email => {
        tempArray = email.split('@');
        if (tempArray.length === 2) {
            let localName = transformLocalName(tempArray[0]);
            newArray.push(`${localName}@${tempArray[1]}`);
        }
    })
    
    let resultArray = [];
    newArray.forEach(email => {
        if (!resultArray.includes(email)) {
            resultArray.push(email)
        }
    })
    return resultArray.length;
};

var transformLocalName = function(localName) {
    let newLocalName;
    if (localName.includes('+')) {
        let plusIndex = localName.indexOf('+');
        newLocalName = localName.slice(0, plusIndex);
    }
    newLocalName = newLocalName.split('').map(el => {
        if (el !== '.') {
            return el;
        }
    })
    return newLocalName.join('');
}

let emailArray = [
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com"
       ]


////////////////////771. Jewels and Stones/////////////////
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let num = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.includes(S[i])){
            num = num + 1;
        };
    }
    return num;
};


////////////////// 709. To Lower Case /////////////
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str[i].toLowerCase();
    }
    return newStr;
};



////////////////965. Univalued Binary Tree/////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//solution 1
var isUnivalTree = function(root) {
    let result = root.every(el => {
        return el === root[0] || el === null;
    })
    return result;
};


//solution 2
var isUnivalTree = function(root) {
    for (let i = 0; i < root.length; i++) {
        if (root[i] === root[0] || root[i] === null) {
            
        } else {
            return false;
        }
        
    }
    return true;
};


///1. Two Sum
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
    let resultArr = [];
    for (let i = 0; i < nums.length; i++) {
        var firstNum = nums[i];
        
        for (let j = i+1; j < nums.length; j++) {
            if (firstNum + nums[j] === target) {
                resultArr.push(i, j)
                return resultArr;
            }
        }
    }
    return resultArr;
};


//Valid Parentheses (Pending)
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(s) {
    let length = 0;
    if (s.length % 2 !== 0) {
        return false;
    }
    while (s.length !== length) {
        length = s.length
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' && s[i+1] === ')') {
                let left = s.slice(0,i);
                let right = s.slice(i+1+1, s.length);
                s = left.concat(right);
            }
            if (s[i] === '{' && s[i+1] === '}') {
                let left = s.slice(0,i);
                let right = s.slice(i+1+1, s.length);
                s = left.concat(right);
            }
            if (s[i] === '[' && s[i+1] === ']') {
                let left = s.slice(0,i);
                let right = s.slice(i+1+1, s.length);
                s = left.concat(right);
            }
        }        
    }
    
    if (s.length === 0) {
        return true;
    } else {
        return false;
    }
};

//21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode();
    let cur = dummyHead;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next
        }
        cur = cur.next
    }
    
    //in case l1 or l2 still has value after the first while loop
    //the following two loops will make sure none of the lists still contain child nodes
    while (l1) {
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }
    
    while (l2) {
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }
    return dummyHead.next
};


//53. Maximum Subarray
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var maxSubArray = function(nums) {
    let maxSum =nums[0];
    let current=nums[0];

    if(nums.length==1)
        return maxSum;

    for(let i=1;i<nums.length;i++)
    {
        current= Math.max(nums[i], current + nums[i]);
        if(current>maxSum)
          maxSum = current;
    }
    return maxSum;
};


//206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head) {
    let clone = head;
    let root = head;
    let r = [];
    while (root) {
        r.push(root.val);
        root = root.next;
    }
    r.reverse();

    let i = 0;
    while (clone) {
        clone.val = r[i++];
        clone = clone.next;
    }
    return head;
};

//121. Best Time to Buy and Sell Stock
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
var maxProfit = function(prices) {
    let mostProfit = 0;
    var minVal = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= minVal) {
            minVal = prices[i];
        }
        var curProfit = prices[i+1] - minVal;
        if (curProfit > 0 && curProfit > mostProfit) {
            mostProfit = curProfit
        }
    }
    return mostProfit
};


//175. Combine Two Tables
// # Write your MySQL query statement below
select FirstName, LastName, City, State
from Person left join Address //must be left join
on Person.PersonId = Address.PersonId;

/**
 * @param {number} x
 * @return {number}
 */


//7. Reverse Integer

var reverse = function(x) {
    let posLimit = Math.pow(2, 31) - 1
    let negLimit = (Math.pow(2, 31) - 1) * -1
    //comfirm whether the input is a negative int
    //If yes, turn input into a positve int
    let negativeInt = false;
    if (x < 0) {
        negativeInt = true; 
        x = x * -1;
    }
    
    let intArr = [];
    while (x >= 10) {
        intArr.push(x % 10)
        x = Math.floor(x / 10)
    }
    intArr.push(x);
    
    let reversedInt = 0;
    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] !== 0) {
            reversedInt += intArr[i] * Math.pow(10, ((intArr.length-1) - i))
        }
    }
    
    if (negativeInt) {
        reversedInt *= -1;
    }
    
    if (reversedInt > posLimit || reversedInt <= negLimit) {
        return 0;
    } else {
        return reversedInt;
    }
};

//141. Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var hasCycle = function(head) {
    //loop through each node
    //set new val pair: visited, for each iteration
    //if visited is true, return true early
    while(head) {
        if(head.visited) {
            return true;
        }
        head.visited = true;
        head = head.next;
    }
    return false;
};

//482. License Key Formatting
// /**
//  * @param {string} S
//  * @param {number} K
//  * @return {string}
//  */
var licenseKeyFormatting = function(S, K) {
    S = S.toUpperCase();
    S = S.split('-').join('');
    let numGroups = 0
    
    if (S.length % K !== 0) {
        let firstGroupLength = S.length % K;
        let firstGroupStr = S.slice(0,firstGroupLength);
        let restGroupStr = S.slice(firstGroupLength, S.length);
        let restGroupLength = restGroupStr.length;
        numGroups = restGroupLength / K;
        let groupArr = [firstGroupStr];
        for (let i = 0; i < numGroups; i++) {
            let curStr = restGroupStr.slice(0,K);
            groupArr.push(curStr);
            restGroupStr = restGroupStr.slice(K)
        }
        return groupArr.join('-');
    } else {
        numGroups = S.length / K;
        let groupArr = [];
        for (let i = 0; i < numGroups; i++) {
            let curStr = S.slice(0,K);
            groupArr.push(curStr);
            S = S.slice(K)
        }
        return groupArr.join('-');
    }
};

// 3.Algorithm
// Given a collection of distinct integers, return all possible permutations.
// Example:
// Input: [1, 2, 3]
// Output:
// [
// [1, 2, 3],
// [1, 3, 2],
// [2, 1, 3],
// [2, 3, 1],
// [3, 1, 2],
// [3, 2, 1],
// ]

function permutations(array) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }

    return result;
  };

  return permute(array);
}

// 4. Algorithm 2
// Implement a trie with insert, search, and startsWith methods.
// Example:
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple"); // returns true
// trie.search("app"); // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app"); // returns true
// Note:
// Ŏ You may assume that all inputs are consist of lowercase letters a-z.
// Ŏ All inputs are guaranteed to be non-empty strings.

class TrieNode {
    constructor() {
      this.children = {},
      this.isWord = false
    }
  }
  
  class Trie extends TrieNode {
    constructor(props) {
      super(props)
      this.rootNode = new TrieNode('');
    };
  
    insert(word) {
      var currNode = this.rootNode;
      var letter = word.slice(0,1); 
      word = word.slice(1); 
  
      var child;
  
      while(letter.length > 0){
          if (currNode.children[letter] === undefined) {
              child = new TrieNode(letter);
              currNode.children[letter] = child;
          } else {
              child = currNode.children[letter];
          } 
          currNode = child;        
          letter = word.slice(0,1);
          word = word.slice(1);       
      }
  
      child.isWord = true;   
    };
  
    search(word) {
      var currNode = this.rootNode;
      var letter = word.slice(0,1);
      word = word.slice(1);
  
      while(letter.length > 0) {
          if (currNode.children[letter]) {
                  currNode = currNode.children[letter];			
            if (word.length == 0) {  
                return currNode.isWord;
            }			
            letter = word.slice(0,1);
            word = word.slice(1);			           
          } else {
              return false;
          }
      }    
    };
  
    startsWith(prefix) {
      var currNode = this.rootNode;
      var letter = prefix.slice(0,1);
      prefix = prefix.slice(1);    
  
      while (letter.length > 0) {
          if (currNode.children[letter]){
                  currNode = currNode.children[letter];			           			
            letter = prefix.slice(0,1);
            prefix = prefix.slice(1);			           
          } else {
              return false;
          }  
      }
      return true;
    };
  };


// 13. Roman to Integer
//   /**
//  * @param {string} s
//  * @return {number}
//  */
var romanToInt = function(s) {
    const romanSyms = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                if (s[i+1] === "V" || s[i+1] === "X") {
                    result -= romanSyms.I
                } else {
                    result += romanSyms.I
                }
                break;

            case "V":
                result += romanSyms.V;
                break;
                
            case "X":
                if (s[i+1] === "L" || s[i+1] === "C") {
                    result -= romanSyms.X
                } else {
                    result += romanSyms.X
                }
                break;

            case "L":
                result += romanSyms.L;
                break;

            case "C":
                if (s[i+1] === "D" || s[i+1] === "M") {
                    result -= romanSyms.C
                } else {
                    result += romanSyms.C
                };
                break;

            case "D":
                result += romanSyms.D;
                break;

            case "M":
                result += romanSyms.M;
                break;
        }
    }
    return result;
};


// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

function sockMerchant(n, ar) {
    //iterate arr
    //create unique arr
    let sockObj = {};
    let result = 0;
    let numPair;

    for (let i = 0; i < n; i++) {
        if (sockObj[ar[i]] === undefined) {
            sockObj[ar[i]];
            sockObj[ar[i]] = 1
        } else {
            sockObj[ar[i]] += 1
        }
    }

    Object.values(sockObj).forEach(int => {
        if (int % 2 !== 0) {
            numPair = (int - 1) / 2;
            result += numPair;
        } else {
            numPair = int / 2;
            result += numPair;
        }
    })

    return result;
}

// 198. House Robber
var rob = function(nums) {
    solution = {};

	solution[nums.length] = 0;
	solution[nums.length-1] = nums[nums.length-1];

	for (let i=nums.length-2; i>=0; i--) {
		solution[i] = Math.max(nums[i] + solution[i + 2], solution[i+1]);
	}

	return solution[0];
};

// 232. Implement Queue using Stacks

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.store = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.store.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let front;
    if (this.store.length) {
        front = this.store[0];
        this.store = this.store.slice(1);
    }
    return front
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.store[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.store.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 160. Intersection of Two Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    
    let hA = headA;
    let hB = headB;
    
    while (hA !== hB ) {
        hA = hA.next;
        hB = hB.next;
        
        // both can be NULL or the same
        if (hA === hB) {
            return hA;
        }
        
        // remove the gap after the first full traversal
        if (!hA) { hA = headB; }
        if (!hB) { hB = headA; }
    }
    
    // the answer has been found
    return hA;
};

//WalmartLabs Interview Question
//betterCompression(str)
const betterCompression = (str) => {
    let obj = {};
    let letters = [];
    let numbers = [];
    let number = '';
    let resultStr = '';
  
    for (let i = 0; i < str.length; i++) {
      if (isLetter(str[i]) === true) {
        if (number.length >= 1) {
          numbers.push(parseInt(number))
        }
        letters.push(str[i])
        number = '';
      } else {
        number += str[i];
      }
    }
    numbers.push(parseInt(number))
  
    for(let j = 0; j < numbers.length; j++) {
      obj[letters[j]] = 0;
    }
  
    for(let k = 0; k < numbers.length; k++) {
      obj[letters[k]] += numbers[k];
    }
    
    let objKeys = Object.keys(obj);
    let objVals = Object.values(obj);
  
    for (let l = 0; l < objKeys.length; l++) {
      resultStr += (objKeys[l] + objVals[l]);
    }
  
    return resultStr;
  
  }
  
  const isLetter = (letter) => {
    if (letter >= 'a' && letter <= 'z') {
      return true;
    } else {
      return false;
    }
  }
  
console.log(betterCompression('a12a14b1b2c1c2'));

//Shorter solution by Jack
var isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1
           && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
  }
  
function parse(input) {
    let result = {};
    let letters = input.split('');
    let prevLetter = '';
    let prevNumber = '';
    letters.map((letter, index) => {
        // If current letter we're looking at isAlpha and previous was not, it's time to update results
        if (index === 0) {
            prevLetter = letter;
        } else if (index === letters.length - 1) {
            // If we are on the last letter, then that means we need to update result object with prevLetter and prevNumber
            prevNumber = prevNumber + letter; // Concatenate the current letter onto the prevNumber
            result[prevLetter] = Number(prevNumber) + result[prevLetter]; // Update result with sum of result[prevLetter] and prevNumber
        } else if (isAlpha(letter) && isAlpha(prevLetter)) {
            // If we have already had a letter and we see a second letter (a10b, this is when b is current letter)
            result[prevLetter] = result[prevLetter] || 0 + Number(prevNumber);
            prevLetter = letter; // Update prevLetter to be the current letter (starting a new key)
            prevNumber = ''; // Need to clear prevNumber
        } else if (!isAlpha(letter)) {
            prevNumber = prevNumber + letter; // If current letter we're looking at is not Alpha, then we have to update the number string
        }
    })
    return result;
}
  