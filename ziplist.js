let a = [1,2,3];
let b = ['a','b','c'];
function zipList(one, two)
{
   let three = [];
   let count = 0;
   for(let i = 0; i< one.length; i++)
   {
     three[count] = one[i];
     count += 2;
   }
   count = 1;
   for(let k = 0; k<two.length; k++)
   {
     three[count] = two[k];
     count +=2;
   }
   return three;


}
console.log(zipList(a,b));

function zipListTheSimpleWay(one, two)
{
      let three =  _.zip(one,two);
      return _.flatten(three);
}
console.log(zipListTheSimpleWay(a,b));
