'use strict';

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


/////////////////////////////////////////////////////////////
                /*ATTEMPT NUMBER 3*/
/////////////////////////////////////////////////////////////

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

var DoubleLinkedNode = new Node(null);


DoubleLinkedNode.insertAfter = function(newNode){
    DoubleLinkedNode.__proto__.insert(newNode);

    if(me.next !== null){
        newNode.next = me.next;
        newNode.previous = me;
        newNode.next.previous = newNode;
    }
    else {
        me.next = newNode;
        me.next.previous = me;
    }
}