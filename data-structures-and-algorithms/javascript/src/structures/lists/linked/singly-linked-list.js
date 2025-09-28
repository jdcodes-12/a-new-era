const SinglyLinkedList = (() => {
  const createNode = (value, nextNode = null) => {
    let data = value;
    let next = nextNode;

    return { data, next }
  }

  const createSinglyLinkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    const prepend = (node) => {
      if (!node) return false;

      if (head === null) 
        head = tail = node;
      
      else {
        node.next = head;
        head = node;
      }

      size++;
      return true;
    }

    const append = (node) => {
      if (!node) return false;
      
      if (head === null)
        head = tail = node;

      else {
        tail.next = node;
        tail = node;
      }

      size++
      return true;
    }

    const insert = (node, position) => {
      if (!node || !position) return false;

      const isInRange = position >= 1 && position <= size;
      if (!isInRange) return false;

      if (position === 1) return prepend(node);
      else if (position === size) return append(node);

      else {
        const previous = _traverseTo(position - 1);
        const after = previous.next;
        previous.next = node;
        node.next = after;
      }
      
      size++;
      return true;
    }

    const remove = (index) => {
      return 1;
    }

    const find = () => {
      return 1;
    }

    const clear = () => {
      head = tail = null;
      size = 0;
    }

    const getSize = () => size;
    
    const peekHead = () => head;

    const peekTail = () => tail;

    const _traverseTo = (position) => {
      const trav = head;

      for (let i = 0; i < (position - 1); i++) 
        trav = trav.next;
    
      return trav;
    }

    return {
      size: getSize,
      head: peekHead,
      tail: peekTail,
      clear,
      append,
      prepend,
      insert,
      remove,
      find
    }    
  } 

  return { createSinglyLinkedList, createNode }
})();

module.exports = SinglyLinkedList;