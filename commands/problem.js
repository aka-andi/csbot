module.exports = {
  name: 'problem',
  description: "problem command",
  execute(message, args) {
    const problem = {
      name: 'Two Sum',
      text: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. ' +
      'You may assume that each input would have exactly one solution, and you may not use the same element twice. ' +
      'You can return the answer in any order.\nExample 1:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]' +
      '\nOutput: Because nums[0] + nums[1] == 9, we return [0, 1].',
      link: 'https://leetcode.com/problems/two-sum/',
      solution: 'https://leetcode.com/problems/two-sum/solution/'
    }
    module.exports = problem;
    message.channel.send({
      embed: {
        title: "Coding Interview Practice!",
        fields: [{
          name: problem.name,
          value: problem.text
        }],
        description: '[View Problem on LeetCode](' + problem.link + ')'
      }
    });
  }
}