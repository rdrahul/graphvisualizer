# Graph Visualiser 🚀🚀

Visualize path finding algorithms in a fun way.

![Alt Text](/images/rec.gif)
[Working Demo](https://practical-wiles-3b49f2.netlify.com/)

# Introduction
This is a fun project created in Angular 8 . This project aims to show basic path finding Algorithms in a visual manner. Currently this has only Djikstra's Algorithms but i am thinking of adding more algorithms in coming week.

## What is a Path Finding Algorithm?
 A path finding algorithm solves a problem where we have source and destination, we want to move to the destination from the source. In order to do that what path should we choose out of all the available paths. This is done on a weighted graph and we want to minimize the cost it would take from the source to the destination.  

### Djikstra's Algorithm
The djikstra's Algorithm solves this problem by visiting adjacent nodes starting from starting node and them choosing the minumum cost. 
Given below is the Pseudocode from [Wikipedia- Djisktra Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

1. Mark all nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.

2. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current.

3. For the current node, consider all of its unvisited neighbours and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbour B has length 2, then the distance to B through A will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, the current value will be kept.
4. When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.
5. If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.
6. Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.  