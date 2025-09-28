const SinglyLinkedList = require('../../../../src/structures/lists/linked/singly-linked-list');

describe('Singly Linked List', () => {
  let list;
  let nodes;
  
  const { createSinglyLinkedList, createNode } = SinglyLinkedList;

  beforeAll(() => {
    list = createSinglyLinkedList();
    nodes = [1, 2, 3, 4, 5].map((node) => createNode(node));
  });

  beforeEach(() => {
    list.clear();
  });

  test(
    'prepend() - give null or undefined node - does not add node or increment size.', 
    () => {
      const nodeA = undefined;
      const nodeB = null;

      const resultA = list.prepend(nodeA);
      const resultB = list.prepend(nodeB);
      
      expect(resultA).toBe(false);
      expect(resultB).toBe(false);
      expect(list.size()).toBe(0);
      expect(list.head()).toBe(null);
      expect(list.tail()).toBe(null); 
    }
  );

  test('prepend() - given defined node, correctly inserts node at end of list.', () => {
    const nodeA = nodes[0];
    const nodeB = nodes[1];

    const resultA = list.prepend(nodeA);
    const resultB = list.prepend(nodeB);

    expect(list.size()).toBe(2);
    expect(list.head()).toBe(nodeB);
    expect(list.tail()).toBe(nodeA);
    expect(resultA).toBe(true);
    expect(resultB).toBe(true);
  });

  test('append() - given undefined or null node - does not add node or increment size.', () => {
    const nodeA = undefined;
    const nodeB = null;
    const head = nodes[2];
    const tail = nodes[3];
    
    list.append(head);
    list.append(tail);

    const resultA = list.append(nodeA);
    const resultB = list.append(nodeB);

    expect(list.size()).toBe(2);
    expect(list.head()).toBe(head);
    expect(list.tail()).toBe(tail); 
    expect(resultA).toBe(false);
    expect(resultB).toBe(false);
  });

  test('append() - given valid node - correctly add nodes and increments size.', () => {
    const nodeA = nodes[0];
    const nodeB = nodes[1];
    
    list.append(nodeA);
    const result = list.append(nodeB);
    
    expect(list.size()).toBe(2);
    expect(list.head()).toBe(nodeA);
    expect(list.tail()).toBe(nodeB);
    expect(result).toBe(true);
  });

  test('insert() - given undefined or null node - does not add node or increment size.', () => {
    const undefinedNode = undefined;
    const nullNode = null;

    const nodeA = nodes[0];
    const nodeB = nodes[1];

    list.append(nodeA);
    list.append(nodeB);

    const result1 = list.insert(undefinedNode, 1);
    const result2 = list.insert(nullNode, 2);
     
    expect(list.size()).toBe(2);
    expect(list.head()).toBe(nodeA);
    expect(list.tail()).toBe(nodeB);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  test(
    'insert() - given defined node and head position - prepends node and increments size.', 
    () => {
    const nodeA = nodes[0];
    const nodeB = nodes[1];
 
    list.prepend(nodeA);

    const result = list.insert(nodeB, 1);
    
    expect(list.size()).toBe(2);
    expect(list.head()).toBe(nodeB);
    expect(list.tail()).toBe(nodeA);
    expect(result).toBe(true);
  });

  test(
    'insert() - given defined node and end position - adds node and increments size.',
    () => {
    const nodeA = nodes[0];
    const nodeB = nodes[1];
    const nodeC = nodes[2];
      
    list.append(nodeA);
    list.append(nodeC);

    const result = list.insert(nodeB, list.size());

    expect(list.size()).toBe(3);
    expect(list.head()).toBe(nodeA);
    expect(list.tail()).toBe(nodeC);
    expect(result).toBe(true);
  });

  test('insert() - given defined node and some middle position - adds node and increments size.', () => {
    const nodeA = nodes[0];
    const nodeB = nodes[1];
    const nodeC = nodes[2];
    const nodeD = nodes[3];

    
    list.append(nodeA);
    list.append(nodeC);
    list.append(nodeD);
  
    const result = list.insert(nodeB, 2);
 
    expect(list.size()).toBe(4);
    expect(result).toBe(true);
  });
  
  test('insert() - given invalid position - does not add node or increment size.', () => {
    const nodeA = nodes[0];
    const nodeB = nodes[1];
    const nodeC = nodes[2];

    list.append(nodeA);
    list.append(nodeB);

    const r1 = list.insert(nodeC, (list.size + 1)); // Over size.
    const r2 = list.insert(nodeC, -1);
    const r3 = list.insert(nodeC, undefined);
    const r4 = list.insert(nodeC , null);
    const r5 = list.insert(nodeC);

    expect(list.size()).toBe(2);
    expect(r1).toBe(false);
    expect(r2).toBe(false);
    expect(r3).toBe(false);
    expect(r4).toBe(false);
    expect(r5).toBe(false);
  });

  test('clear() - correctly resets linked list internal state.', () => {
    const nodeA = nodes[0];
    
    list.append(nodeA);
    list.clear();

    expect(list.size()).toBe(0);
    expect(list.head()).toBe(null);
    expect(list.tail()).toBe(null);
  });
});
