class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("order") || lowercase.includes("place order")) {
      this.actionProvider.handleJavascriptQuiz();
    }
    if (lowercase.includes("menu") || lowercase.includes("menucard")) {
      this.actionProvider.handleJavascriptList();
    }
    if (lowercase.includes("feedback") || lowercase.includes("fb")) {
      this.actionProvider.handletodos();
    }
  }
}

export default MessageParser;
