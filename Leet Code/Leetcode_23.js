var mergeKLists = function(lists) {
    if(lists.length===0)return null;
    return lists.reduce(List2);
};

function List2(deg1, deg2) {
    let List3 = new ListNode();
    let deger = List3;
      
    while(deg1&&deg2) {
        if(deg1.val < deg2.val) {
          deger.next = deg1
          deg1 = deg1.next;
        } else {
          deger.next = deg2
          deg2 = deg2.next;
        }
        deger = deger.next;
      }
      
      deger.next = deg1 || deg2;
      return List3.next
};