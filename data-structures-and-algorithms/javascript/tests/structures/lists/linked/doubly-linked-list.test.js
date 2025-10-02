const DoublyLinkedList = require('../../../../src/structures/lists/linked/doubly-linked-list');

describe('Doubly Linked List - ', () => {
  let list;
  let nodes;

  const { createDoublyLinkedList, createNode } = DoublyLinkedList;

  beforeAll(() => {
    list = createDoublyLinkedList();
    nodes = [1, 2, 3, 4, 5].map((node) => createNode(node));
  });

  beforeEach(() => {
    list.clear();
  });

  describe('prepend() - ', () => {
    test('given null or undefined node, does not add node to list.', () => {
      const nodeA = undefined;
      const nodeB = null;

      const r1 = list.prepend(nodeB);
      const r2 = list.prepend(nodeA);
      const r3 = list.prepend();

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(list.size()).toBe(0);
    });

    test('given defined node, adds node to front of list and correctly adjust links.', () => {
      const nodeA = nodes[0];
      const nodeB = nodes[1];

      list.prepend(nodeB);
      list.prepend(nodeA);

      expect(list.size()).toBe(2);
      expect(list.head()).toBe(nodeA);
      
      expect(nodeB.link.prev).toBe(nodeA);
      expect(nodeA.link.next).toBe(nodeB);
    });
  });

  describe('append() - ', () => {
    test('given null or undefined node, does not add node to list.', () => {
      const nodeA = undefined;
      const nodeB = null;

      const r1 = list.append(nodeB);
      const r2 = list.append(nodeA);
      const r3 = list.append();

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(r3).toBe(false);
      expect(list.size()).toBe(0);
    });

    test('given defined node, adds node to end of list and adjusts tail links.', () => {
      const nodeA = nodes[0];
      const nodeB = nodes[1];

      const r1 = list.append(nodeA);
      const r2 = list.append(nodeB);

      expect(r1).toBe(true);
      expect(r2).toBe(true);
      expect(list.size()).toBe(2);
      expect(list.head()).toBe(nodeA);
      expect(list.tail()).toBe(nodeB);
    });
  });

  describe('insert() - ', () => {
    test('given null or undefined node, does not add node to list', () => {
      const nodeA = undefined;
      const nodeB = null;
      
      const r1 = list.insert(nodeA, 1);
      const r2 = list.insert(nodeB, 1);

      expect(r1).toBe(false);
      expect(r2).toBe(false);
      expect(list.size()).toBe(0);
      expect(list.head()).toBe(null);
      expect(list.tail()).toBe(null);
    }) 
  });

  /*
  describe('remove() - ', () => {

  });
  */

  describe('clear() - ', () => {
    test('given list, correctly resets pointers and size', () => {
      const nodeA = nodes[0];
      
      list.append(nodeA);
      list.clear();
     
      expect(list.size()).toBe(0);
      expect(list.head()).toBe(null);
      expect(list.tail()).toBe(null);
    });    
  });
});