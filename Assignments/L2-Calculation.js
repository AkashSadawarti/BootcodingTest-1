// 8) WAP that accepts 4 integers p, q, r, s from the user where q, r and s are
// positive and p is even. If q is greater than r and s is greater than p and if
// the sum of r and s is greater than the sum of p and q print "Correct
// values", otherwise print "Wrong values".
// Test Data :
// Input the second integer: 35
// Input the third integer: 15
// Input the fourth integer: 46
// Expected Output:
// Wrong values

let values = (p,q,r,s) => {
    if(p%2 == 0 && p > 0 && q > 0 && s > 0){
        
        sumPQ = p + q;
        sumRS = r + s;
        if(sumRS > sumPQ){
            console.log('Correct Values');
        }
        else{
            console.log('Wrong Values');
        }
    }
    else{
        console.log('p is not an even number')
    }
}
values(40,35,15,46)