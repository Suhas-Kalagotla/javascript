process.stdin.setEncoding('utf8');
process.stdin.on('data',function(input){
   let [X, Y] = input.trim().split(' ');
   z=7-X-Y
   console.log(z)
   
});
