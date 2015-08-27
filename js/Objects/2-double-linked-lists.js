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
    me.previous = null;
    var nodeNumber = 0;

    this.removePrevious = function(){
        if(me.previous === null){
            console.log('Error "0": On first node, cannot remove previous as there is non.');
            return;
        }
        else if( me.previous.previous === null){
            return me;
        }
        else {
            me.previous = me.previous.previous;
        }
    };

    this.removeNext = function(){
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

    this.insertAfter = function(newNode){
        if(me.next !== null){
            newNode.next = me.next;
            newNode.previous = me;
            newNode.next.previous = newNode;
            newNode.previous.next = newNode;
        }
        else {
            me.next = newNode;
            me.next.previous = me;
        }
    };

    this.insertBefore = function(newNode){
        if(this.previous !== null){
            newNode.previous = this.previous;
            newNode.next = this;
            newNode.previous.next = newNode;
            newNode.next.previous = newNode;
        }
        else {
            this.previous = newNode;
            newNode.next = this;
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

myNode.insertAfter(new Node(2));
myNode.insertAfter(new Node(3));

myNode.next.next.insertBefore(new Node(8));

outputList(myNode);
console.log('-------------');
myNode.insertAfter(new Node(4));
myNode.insertAfter(new Node(5));
myNode.insertAfter(new Node(6));
myNode.insertAfter(new Node(7));

outputList(myNode);

console.log("The New list - 5");

myNode.next.next.removeNext();

outputList(myNode);