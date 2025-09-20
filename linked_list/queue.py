from linked_list import SinglyLinkedList, Node

class Queue(SinglyLinkedList):
     def __init__(self, value):
          super().__init__(value)
          self.tail = self.head

     # add to back
     def enqueue(self, new_node):
          current = self.tail
          self.tail = new_node
          current.next = self.tail

     # remove from front
     def dequeue(self):
          current = self.head
          self.head = current.next
          return current.value
          
    
item1 = Node("A")  
item2 = Node("B")  
item3 = Node("C")  
item4 = Node("D")  
item5 = Node("F")

queue = Queue(item1)
queue.enqueue(item2)
queue.enqueue(item3)
queue.enqueue(item4)
queue.enqueue(item5)
queue.print()
a = queue.dequeue()
print(a)
queue.print()