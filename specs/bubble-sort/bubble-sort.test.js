/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

/*
 * Look at two values if the first is larger than the second one, swap them.
 * If you made a swap during your pass through the array, loop through again.
 * When you can traverse the array without swapping, then you are done. 
 */


function bubbleSort(nums) {
  // code goes here
    let swapped = true;
    while( swapped ){
        swapped = false;
        for( let i = 0; i < nums.length; ++i ){
            if( nums[ i ] > nums[i + 1] ){
                swapped = true;
                let t = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = t;
            }
        }
    }
    return nums;
}

// unit tes
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
