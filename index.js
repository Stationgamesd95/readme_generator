const generateMarkdown = require("./utils/generateMarkdown")
// Require all npm packages and files

const questions = [

    {
        type: "input",
        message: "What is your Github Username?",
        name: "username"
    },

    {
        type: "input",
        message: "Web Development Journey",
        name: "title"
    },
    {
        type: "input",
        message: "Description",
        name: "description"
    },
    {
        type: "input",
        message: "Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "input",
        message: "License",
        name: "license"
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions",
        name: "questions"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "Profile Picture",
        name: "profilepicture"
    },

// questions to user using "enquirer"
];

function init() {

    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
        axios.get("api.github.com/users/Stationgamesd95/"+ answers.username)
        .then( data => {



            generateMarkdown(response)

        })
    })

// Logic for this app shoud be here. You can create more functions if you like. This is just a template for you to start your Homework but it is not required for you to use it.



}

init();
