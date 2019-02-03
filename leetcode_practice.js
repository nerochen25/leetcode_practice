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


