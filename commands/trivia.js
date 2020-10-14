module.exports = {
  name: 'trivia',
  description: "trivia command",
  execute(message, args) {
    const trivia = {
      question: 'What is a linked list?',
      answer: 'A linked list is a sequence of nodes in which each node is connected to the node following it. This forms a chain-like link for data storage.'
    }
    module.exports = trivia;
    message.channel.send({
      embed: {
        title: "CS Trivia!",
        description: trivia.question
      }
    });
  }
}