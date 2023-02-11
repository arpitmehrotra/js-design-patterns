function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: __________");
        break;
      case "range":
        console.log("Minimum: __________");
        console.log("Maximum: __________");
        break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "This tutorial is useful",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favorite JS features",
  },
  {
    type: "range",
    description: "What is the speed limit in your city?",
  },
];

printQuiz(questions);
