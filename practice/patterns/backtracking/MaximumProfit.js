/**
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling/
 * 
 */
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  /*
  Approach: 
  We can have a single array jobs with all the information start,end and profit.
  Then sort this array by start time.
  Now, we can use simple backtracking with memoization.
  In each step we can either take the current job or leave it.
  We if take the current job then the next possible index will be the index of the job which is starting after endTime of the current job.  To find the next possible index, we can use binary search. 
  */
  const jobs = []
  const cache = []
  for (let i = 0; i < startTime.length; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]])
  }
  // sort all jobs based on their start time
  jobs.sort((a, b) => a[0] - b[0])
  return backtrack(0)

  function backtrack(pos) {
    if (cache[pos] !== undefined) {
      return cache[pos]
    }
    // index out of range
    if (pos === startTime.length || pos == -1) {
      return 0
    }
    const nextPossibleJobIndex = binarySearch(
      jobs[pos][1],
      pos + 1,
      startTime.length - 1
    )
    // the current job is included
    const profit1 = jobs[pos][2] + backtrack(nextPossibleJobIndex)
    // the current job is excluded
    const profit2 = backtrack(pos + 1)

    const res = Math.max(profit1, profit2)
    cache[pos] = res
    return cache[pos]
  }

  // return the index of next possible job with earliest start time
  // return -1 if no such job exists
  function binarySearch(endtime, left, right) {
    let ans = -1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (jobs[mid][0] >= endtime) {
        ans = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return ans
  }
}