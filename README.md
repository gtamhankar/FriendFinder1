# Friend Finder - Node and Express Servers
Assignment 13 -   Compatibility-based "FriendFinder" application 

Submitted On: 12/28/2018

## Technologies: node.js, javascrpt, express, html, css , bootstrap

This is assignment 13: https://unc.bootcampcontent.com/UNC-Coding-Boot-Camp/UNCHILL201808FSF3/blob/master/homework/13-express/Instructions/homework_instructions.md


### Application Specific Details:
-----------------------------
A compatibility-based "FriendFinder" application -- basically a dating app. 
This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. 
The app will then display the name and picture of the user with the best overall match.                  
			

### Logic:
-------
Determines the user's most compatible friend using the following as a guide:

- Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

Using the absolute value of the differences, app calculates summation of total differences per question.
The closest match will be the user with the least amount of difference.

