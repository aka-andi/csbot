module.exports = {
  name: 'problem',
  description: "problem command",
  execute(message, args) {
    const problem = {
      name: 'Two Sum',
      link: 'https://leetcode.com/problems/two-sum/',
      solution: 'https://leetcode.com/problems/two-sum/solution/'
    }
    module.exports = problem;
    message.channel.send({
      embed: {
        title: "Coding Interview Practice!",
        fields: [{
          name: problem.name,
          value: '[View Problem](' + problem.link + ')'
      
      //new comment
      
      
        }]
      }
    });
  }
}