'use strict';

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