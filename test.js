var tes = (function () {
  function tes() {
  }
  tes.main = function (args) {
      var startTime = (Date.now() * 1000000);
      var arr = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
          return 0;
      }
      else {
          var array = [];
          for (var i = 0; i < dims[0]; i++) {
              array.push(allocate(dims.slice(1)));
          }
          return array;
      } }; return allocate(dims); })([51, 51]);
      var sum = 0;
      for (var a = 0; a < arr.length; ++a) {
          for (var b = 0; b < arr[a].length; ++b) {
              arr[a][b] = b === 0 ? 1 : 0;
          }
          ;
      }
      for (var a = 1; a < arr.length; ++a) {
          for (var b = 1; b <= a; ++b) {
              arr[a][b] = arr[a - 1][b - 1] + arr[a - 1][b];
          }
          ;
      }
      for (var a = 0; a < arr.length; ++a) {
          for (var b = 0; b < arr[a].length; ++b) {
              {
                  for (var c = 0; c <= a; ++c) {
                      for (var d = 0; d <= (c === a ? b - 1 : c); ++d) {
                          arr[a][b] = arr[a][b] === arr[c][d] ? 0 : arr[a][b];
                      }
                      ;
                  }
                  for (var c = 2; c * c <= arr[a][b]; ++c) {
                      arr[a][b] = arr[a][b] % (c * c) === 0 ? 0 : arr[a][b];
                  }
                  sum += arr[a][b];
              }
              ;
          }
          ;
      }
      console.info("Answer: " + sum);
      var endTime = (Date.now() * 1000000);
       };
  return tes;
}());
tes.main(null);

