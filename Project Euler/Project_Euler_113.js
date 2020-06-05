var A = (function () {
    function A() {
    }
    A = function () { if (A.numOfIncreasing == null)
        A.numOfIncreasing = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; return A.numOfIncreasing; };
    B = function () { if (A.numOfDecreasing == null)
        A.numOfDecreasing = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; return A.numOfDecreasing; };
    exp = function (args) { console.info(C(100)); };
    C = function (order) {
        (function (a, v) { for (var i = 0; i < a.length; i++)
            a[i] = v; })(A(), 1);
         (function (a, v) { for (var i = 0; i < a.length; i++)
            a[i] = v; })(B(), 1);
        A.sumOfDecreasing = A.sumOfIncreasing = 9;
        for (var i = 1; i < order; i++) {
            A.update();}
        var sum = A.sumOfDecreasing + A.sumOfIncreasing;
        sum -= order * 9;
        return sum;};
     A.update = function () {
        var buf = A().slice(0, A().length);
         (function (a, v) { for (var i = 0; i < a.length; i++)
            a[i] = v; })(A(), 0);
        for (var i = 1; i < 10; i++) {
            { for (var j = 1; j <= i; j++) {
                    A()[i] += buf[j];
                } }  ;   }
        for (var i = 0; i < A().length; i++) {
            A.sumOfIncreasing += A()[i];        }
        buf = B().slice(0, B().length);
         (function (a, v) { for (var i = 0; i < a.length; i++)
            a[i] = v; })(B(), 0);
        for (var i = 1; i < 10; i++) {
            {  for (var j = 1; j <= i; j++) {  B()[i] += buf[j];   }
                B()[i] += 1;  }   ;        }
        for (var i = 0; i < B().length; i++) {
            A.sumOfDecreasing += B()[i];
        }   };   return A;
}());

exp(null);
