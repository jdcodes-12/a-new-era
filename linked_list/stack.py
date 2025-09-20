from linked_list import SinglyLinkedList, Node

class Stack(SinglyLinkedList):
    def push(self, new_node):
        current = self.head
        new_node.next = current
        self.head = new_node
        
    
    def pop(self):
        current = self.head
        self.head = current.next
        return current.value
    
item1 = Node('A')
item2 = Node('B')
item3 = Node('C')
item4 = Node('D')
item5 = Node('F')

stack = Stack(item5)
stack.push(item4)
stack.push(item3)
stack.push(item2)
stack.push(item1)
stack.print()
a = stack.pop()
print(a)
stack.print()