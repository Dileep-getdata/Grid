

    class Node {     
constructor(item) {
            this.val = item;
            this.left = null;
            this.right = null;
        }
    }
 
    var root = null; 
    function insert(val) {
        root = insertRec(root, val);
    }
 
    function insertRec(root , val) {
 
        if (root == null) {
            root = new Node(val);
            return root;
        }
 
        if (val < root.val)
            root.left = insertRec(root.left, val);
        else if (val > root.val)
            root.right = insertRec(root.right, val);
 
        return root;
    } 
    var searchBST=function (root, val){
    
        if ((root == null) ||(root.val == val)){
            return root;
        }
        
    
        if (root.val < val){
            return searchBST(root.right, val);
        }else{             
        
        return searchBST(root.left, val);
        }
        
    
    };
 
 
    function inorder(root)
    {
        if (root != null) {
            inorder(root.left);
            console.log(root.val);
            inorder(root.right);
        }
    }

        insert(50);
        insert(30);
        insert(20);
        insert(40);
        insert(70);
        insert(60);
        insert(80);
 
       
        inorder(root);
 
