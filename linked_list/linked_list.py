# Array Lists store data in a contiguous memory location
# Pros: Super easy to randomly access data using indexes
# Cons: Not great at inserting or deleting elements (especially closer you are to beggining)
# If we were to attempt to add an item between "A" and "B", we would have to shift everything in the array "B" and after to the right.
# NBD for small data set but this doesn't scale well
array = ["A", "B", "C", "D", "E", "F", "G"]

# Linked Lists are made up of a chain of nodes
# Singly: Each node contains two parts [data, pointer (next-address)]
# Doubly: Each node also contains a pointer to the next address [pointer (prev-address, data, next-address)]
# Since we store extra data in doubly it takes more memory than singly, but can be traversed from head-to-tail AND tail-to-head
# pointer == null when at end of list
# They do not have indexes, they are non-contiguous
# Insert: take the address stored in prevNode->next, assign it to newNode->next, update the pointer of the previous node to the address of newNode  
# Delete: Remove the node and have the prevNode point to the nextNode from the removedNode
# Inserts and deletes are O(1)
# Not good for searching, to search, we must start at the head and work to the tail until the element is found. O(n)

class Node:    
    def __init__(self,value):        
        self.value = value        
        self.next = None

class SinglyLinkedList:
    def __init__(self,head=None):
        self.head = head  
    def append(self, new_node):
        current = self.head
        if current:
            while current.next:
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head
        if current.value == value: # remove the head if it is the head
            self.head = current.next
        else:
            while current:
                if current.value == value:
                    break
                prev = current # keep track of prev so we can put list back together
                current = current.next
            if current == None:
                return
            prev.next = current.next
            current = None        
    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        count=1
        current = self.head
        if position == 1:
            new_element.next = self.head
            self.head = new_element
        while current:
            if count+1 == position: 
                # this is the actual insert
                new_element.next = current.next
                current.next = new_element
                return
            else:
                count+=1
                current = current.next
        pass
    def print(self):
        current = self.head
        print("[", end="")
        while current:
            if (current.next):
                print(f"{current.value}, ", end="")
            else:
                print(f"{current.value}", end="")

            current = current.next
        print("]")

# e1 = Node("A")
# e2 = Node("B")
# e3 = Node("C")
# e4 = Node("D")
# e5 = Node("F")

# ll = SinglyLinkedList(e1)

# ll.append(e3)
# ll.insert(e2, 2)
# ll.delete(e1.value)
# ll.print()

class DoublyNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self, head=None):
        self.head = head
        self.tail = head

    # O(n) keeping track of tail can make append O(1) (see enqueue)
    def append_old(self, new_node:DoublyNode):
        current = self.head
        
        if current:
            while current.next:
                current = current.next
            current.next = new_node
            new_node.prev = current
        else: self.head = new_node
        
    # O(1)
    def append(self, new_node:DoublyNode):
        self.tail.next= new_node
        new_node.prev = self.tail
        self.tail = new_node

    def delete(self, value):
        current = self.head

         # Empty list
        if current == None:
            return
        
        # If node is head
        if value == self.head.value:
            self.head = current.next
            self.head.prev = None
            return
        
         # Traverse list to find the node
        while current and current.value != value:
            current = current.next

        # Value not found
        if current == None:
            return

        # If node is in middle or tail
        if current.prev:
            current.prev.next = current.next
        if current.next:
            current.next.prev = current.prev

        # If the node is the tail
        if current == self.tail:
            self.tail = current.prev

    def insert(self, new_node:DoublyNode, position):
        current_position = 1
        current = self.head

        # Empty list
        if current == None:
            self.head = new_node
        
        # If position is head
        if position == 1:
            self.head.prev = new_node
            new_node.next = self.head
            new_node.prev = None
            self.head = new_node 
            return
        
        # Traverse the list until the position is found
        while current and current_position < position:
            current_position += 1
            current = current.next

        # Position is not found
        if current == None:
            self.append(new_node) 
            return
        
        new_node.next = current
        current.prev.next = new_node
        new_node.prev = current.prev
        current.prev= new_node


        

    def print(self):
        current = self.head
        print("[", end="")
        while current:
            if (current.next):
                print(f"{current.value}, ", end="")
            else:
                print(f"{current.value}", end="")

            current = current.next
        print("]")

item1 = DoublyNode("A")
item2 = DoublyNode("B")
item3 = DoublyNode("C")
item4 = DoublyNode("D")
item5 = DoublyNode("F")

doubly = DoublyLinkedList(item1)

doubly.append(item2)
doubly.append(item3)
doubly.append(item4)
doubly.append(item5)
doubly.delete("A")
doubly.insert(DoublyNode("E"), 5)
doubly.delete("C")
doubly.delete("E")
doubly.insert(DoublyNode("A"), 1)
doubly.print()



