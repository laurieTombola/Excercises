'use strict';
//
//function LinkedList(firstNode){
//    var me = this;
//    me.start = null;
//    if (firstNode !== null) {
//        me.start = firstNode;
//    }
//    me.insert = function(previousNode, nextNode, newNode){
//        if(previousNode === null && nextNode !== null){
//            //insert before nextNode
//            previousNode = me.findPreviousNode(nextNode);
//            if(previousNode !== null) {
//                previousNode.next = newNode;
//            }
//            newNode.next = nextNode;
//            if(nextNode === me.start){
//                me.start = newNode;
//            }
//        }
//        else if(previousNode !== null && nextNode === null){
//            //insert after previousNode
//            nextNode = previousNode.next;
//            newNode.next = nextNode;
//            previousNode.next = newNode;
//        }
//    };
//
//    me.remove = function(obj){
//
//        if(me.start === obj) {
//            if( obj.next === null){
//                me.start = null;
//            }
//            else {
//                me.start = obj.next;
//            }
//        }
//        else if(obj.next === null)
//        {
//            me.findPreviousNode(obj).next = null;
//        }
//        else {
//            console.log("Laurie Was 'Er");
//            me.findPreviousNode(obj).next = obj.next;
//        }
//    };
//
//    me.findPreviousNode = function(node) {
//        var current = me.start;
//        while(current.next!==node) {
//            if(current.next === null) {
//                break;
//            }
//            current = current.next;
//        }
//        if(current.next === node) {
//            return current.next;
//        }
//        else {
//            //console.log("couldn't find the node you pass into findPreviousNode. Returning Null.");
//            return null;
//        }
//
//    };
//}



function Node(nodeValue){
    var me = this;
    me.value = nodeValue;
    me.next = null;

    me.removeNext = function(){
        if(me.next === null){
            return;
        }
        else if( me.next.next === null){
            me.next = null;
        }
        else {
            me.next = me.next.next;
        }
    };

    me.insert = function(newNode){
        if(me.next !== null){
            var nextNext = me.next;
            me.next = newNode;
            newNode.next = nextNext;
        }
        else {
            me.next = newNode;
        }
    };
}

function outputList(listStart){
    var current = listStart;
    if(current === null)
    {
        console.log("AHHHHH!!! ITS NULLL!");
        return;
    }
    while(current.next !== null){
        console.log(current.value);
        current = current.next;
    }
    console.log(current.value);
}

var myNode = new Node(1);

myNode.insert(new Node(2));
myNode.insert(new Node(3));
myNode.insert(new Node(4));
myNode.insert(new Node(5));
myNode.insert(new Node(6));
myNode.insert(new Node(7));

outputList(myNode);

console.log("The New list - 5");

myNode.next.next.removeNext();

outputList(myNode);