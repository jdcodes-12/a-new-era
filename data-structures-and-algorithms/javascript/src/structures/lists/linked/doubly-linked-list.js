const DoublyLinkedList = (() => {
  const createNode = (value, next = null, prev= null) => {
    let data = value;
    let link = { next, prev }
   
    return { data, link }
  }

  const createDoublyLinkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    const prepend = (node) => {
      if (!node) return false;
      
      if (head === null) 
        head = tail = node;

      else {
        node.link.next = head;
        head.link.prev = node;
        head = node;
      }

      size++;
      return true;
    }

    const append = (node) => {
      if (!node) return false;
      
      if (head === null)
        head = tail = null;

      else {
        node.link.prev = tail;
        tail.link.next = node;
        tail = node;
      }

      size++;
      return true;
    }

    const insert = (node, position) => {
      if (!node) return false;

      if (position < 1 || position > size) return false;

      if (position === 1) append(node);

      else {
        const nodeInPosition = _traverseTo(position);
        const prevNode = nodeInPosition.link.prev
        
        prevNode.link.next = node;
        nodeInPosition.link.prev = node;

        node.link.prev = prevNode;
        node.link.next = nodeInPosition;
      } 

      size++;
      return true;
    }

    const remove = (position) => {
      if (position < 1 || position > size) 
        return false;
      
      // EdgeCases: 
      // - position = 1 (head)
      // - position = size (tail)

      return true;
    }

    const clear = () => {
      head = tail = null;
      size = 0;
    }

    const _traverseTo = (position) => {
      let trav = head;

      for (let i = 0; i < (position - 1); i++)
        trav = trav.next;
     
      return trav;
    }
    
    const getHead = () => head;
    
    const getTail = () => tail;

    const getSize = () => size;

    return {
      prepend,
      append,
      insert,
      remove,
      clear,
      head: getHead,
      tail: getTail,
      size: getSize
    }
  }

  return { createDoublyLinkedList, createNode }
})();

module.exports = DoublyLinkedList;