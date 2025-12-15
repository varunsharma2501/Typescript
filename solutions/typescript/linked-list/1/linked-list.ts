class Node<T>{
  value: T
  next: Node<T> |null =null
  prev: Node<T> | null=null

  constructor(value:T){
    this.value=value
  }
}

export class LinkedList<TElement> {
  private head : Node<TElement> | null =null
  private tail : Node<TElement> | null =null
  private length: number=0
  
  public push(element: TElement) {
    const node=new Node(element);

    if(!this.tail){
      this.head=node;
      this.tail=node;
    }else{
      this.tail.next=node;
      node.prev=this.tail;
      this.tail=node;
    }
    this.length++;
  }

  public pop(): TElement | undefined {
   if(!this.tail){
     return undefined;
   }
    const value=this.tail.value;
    if(!this.tail.prev){
      this.head=null;
      this.tail=null;
    }
    else{
      this.tail=this.tail.prev;
      this.tail.next=null;
    }
    this.length--;
    return value;
  }

  public shift(): TElement | undefined {
    if(!this.head){
      return undefined;
    }
    const value=this.head.value;

    if(this.head.next){
      this.head=this.head.next;
      this.head.prev=null;
    }
    else{
      this.head=this.tail=null
    }
    this.length--;
    return value;
  }

  public unshift(element: TElement ) {
    const node=new Node(element);
    if(!this.head){
      this.head=this.tail=node;
    }
    else{
      node.next=this.head;
      this.head.prev=node;
      this.head=node;
    }
    this.length++;
  }

  public delete(element: TElement) {
  let current = this.head;

  while (current) {
    if (current.value === element) {

      // reconnect previous
      if (current.prev) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
      }

      // reconnect next
      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }

      this.length--;
      return; // stop after first match
    }

    current = current.next;
  }
}

  public count(): number {
    return this.length;
  }
}
