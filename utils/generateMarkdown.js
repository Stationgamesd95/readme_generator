

function generateMarkdown(data) {
  return `
  #  ${data.title}
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  ## Description

  Welcome to the starting your Web Development Journey. You want to learn to create a website, to do so there are requirements you have to meet in order to begin.


  ## Installation
  
    Download Visual Code (https://code.visualstudio.com)
    Sign Up for Git Hub (https//github.com)
  
  
  ## Usage 
  
  Provide instructions and examples for use. Include screenshots as needed. 
  
  
  ## Credits
  
  Shivan Desai and the UCF WEB DEVELOPMENT BOOTCAMP Team. (https://github.com/UCF-Coding-Boot-Camp/UCF-ORL-FSF-FT-03-2020-U-C)
  
  
  ## License
  
  GNU GPLv3
  
  ---
  
  
  ## Contributing
  
  Thank the team who has been contrbuting: https://github.com/UCF-Coding-Boot-Camp/UCF-ORL-FSF-FT-03-2020-U-C

  ## Profile Picture

  ![Test Image 1]("https://avatars2.githubusercontent.com/u/47505249?v=4")
  
  ## Tests
  
  To test it, open an HTML file in Visual Studio Code and press Ctrl+Shift+B . It should open in Chrome.
  
  
  ---
  © 2020 Desai Web Company, a Web Development Market, Inc. brand. All Rights Reserved.


`;
}


module.exports = generateMarkdown;
