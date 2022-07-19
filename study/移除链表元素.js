
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

function ListNode(val,next){
    this.val = (val===undefined?0 : val);
    this.next = (next===undefined? null: next)
}


function removeElements(head,val){
    const dummyHead = new ListNode(0,head)
    const cur = dummyHead.next;
    while(cur.next) {
        if(cur.next.val === val) {
            cur.next= cur.next.next;
            continue;
        }
        cur = cur.next
    }
    return dummyHead.next
}


const head = [1,2,6,3,4,5,6], val = 6;
// 输出 输出：[1,2,3,4,5]

removeElements(head,val)