/**
 * Map
 */
 const arr = [1,3,4,5,8,9];

 const newArr = arr.map((item)=>{
    return item * 2 ;
 });

 console.log(newArr);


/**
 * Reduce
 */

 const sum = arr.reduce((total,next) => {
     return total + next;
 })

 console.log(sum);

/**
  * Filter
  */

  const filter = arr.filter((item) => {
      return item % 2 === 0;
  })

  console.log(filter);

/**
 * Find
 */
  const find = arr.find((item) => {
      return item === 4;
  })

  console.log(find);