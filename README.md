

![Moni](/readme/readme_images/logo-light.webp)

# Cryptocurrency Portfolio Valuation Tool

This website is designed and created for the Interactive Frontend Development Milestone Project, for Code Institute's Diploma in Web Application Development. 

Moni - Cryptocurrency Portfolio Valution Tool is a digital currency calculator built to quickly calculate the value of crypto assets.

![Responsive mockup](/readme/readme_images/mockup.png)

[Enter the site](https://petecookson.github.io/moni/)

## Table of Contents

-   [User Stories](#user-stories)
    -   [External user goals](#external-user-goals)
    -   [Returning external user goals](#returning-external-user-goals)
    -   [Site owner goals](#site-owner-goals)
-   [The 5 Planes of User Experience...](#5-planes)
    -   [Strategy Plane](#strategy-plane)
    -   [Scope Plane](#scope-plane)
    -   [Structure Plane](#structure-plane)
    -   [Skeleton Plane](#skeleton-plane)
    -   [Surface Plane](#surface-plane)
-   [Technologies Used](#technologies-used)
-   [Resources](#resources)
-   [Testing](#testing)
-   [Bugs](#bugs)
-   [Responsiveness](#responsiveness)
-   [Life Cycle & Further Features](#life-cycle-&-further-features)
-   [User Stories - the outcome...](#user-stories---the-outcome...)
-   [Version Control](#version-control)
-   [Deployment](#deployment)
-   [Credits](#credits)

# User Stories:

### External user goals:
* Quickly understand the main purpose of the site.
* Navigate easily and identify relevant assets.
* Easily input data and return real time values of cryptocurrencies.
* To view a quick and simple visualisation of the value of current assets.
### Returning external user goals:
* Access real time cryptocurency values.
* Quickly access personal portfolio valuation.
* Be able to easily access contact information.
### Site owner goals:
* Increase the useability and understanding of crypto assets.
* Grow a following of users for further rollout of features.
* Develop further calculations to assist the user gaining information.

# The 5 Planes of User Experience...

## Strategy Plane
--- 
The website is built with the main aim being to create a clear, simple, and effective way to calculate live cryptocurrency assets; information is clear, intuitive, easy to use.

[Click here](readme/readme_images/moni-flowchart.png) to view the Flow Chart
## Scope Plane
---
Features included in this Project

* Direct user input and live crypto prices used for accurate portfolio calculation.
* Pie chart used to visually represent current holding values.
* Addtional information based on calculations the showing current value.
* Dark mode toggle to reduce eye strain and improve battery life.
* Information modal provding basic steps to using Moni.
* Contact option via email using client-side technology.

## Structure Plane
---
The website is built on a single page, having a specific purpose and formatted intuitively.
Layout of the page is simple and allows immediate interaction, buttons are clearly labelled and returned data 

## Skeleton Plane
---
The design has been focused on mobile first, while also being responsive to larger screens. The website was designed to allow immediate interaction and to be appropriate to the intended audience.

![mobile](readme/readme_images/mobile-wireframe.webp)
 ![desktop](readme/readme_images/desktop-wireframe.webp)
## Surface Plane
---

The palette and fonts used for the site is complementary to the design and uses minimal color and style variations for visual identity.
## Light mode Colors
![Moni](readme/readme_images/light-mode.webp)
## Dark mode Colors
![Moni](readme/readme_images/dark-mode.webp)
## Chart Colors
Colors for the chart have been chosen based on the main color for the logos of the corresponding cryptocurrency.

![Chart](readme/readme_images/chart.webp)

## Fonts
Google Fonts is used to import the selected fonts.
* Baloo Tamma 2 regular - Used for the logo.

![Logo](readme/readme_images/baloo.webp)
* Raleway - Used for headings and body text.

![body](readme/readme_images/raleway.webp)

## Technologies used
---
* [Git](https://git-scm.com/) Version control
* [GitHub](https://github.com/) Files, documents and deployment of the website
* [HTML5](https://en.wikipedia.org/wiki/HTML) Markup
* [CSS3](https://en.wikipedia.org/wiki/CSS) Stylesheet
* [Bootstrap](https://getbootstrap.com/) Structure and CDN for the website
* [Google Fonts](https://fonts.google.com/) Fonts
* [Font Awesome](https://fontawesome.com/) Icons
* [adobeXD](https://www.adobe.com/uk/products/xd.html) Logo design
* [Squoosh](https://squoosh.app/) Image optimisation
* [PNG to WEBP](https://convertio.co) PNG conversion

## Resources
---
* [Code Institute](https://codeinstitute.net/) 
* [W3schools](https://www.w3schools.com/)
* [Stackoverflow](https://stackoverflow.com/)
* [Slack](https://slack.com/intl/en-gb/)

### Content
* [Dark Mode](https://dev.to/)dev.to
* [Modal](https://www.w3schools.com/)www.w3schools.com
* [Pricing API](https://coingecko.com/en/api)coingecko.com
* [Chart](https://www.chartjs.org/)www.chartjs.org

## Testing
---
The majority of testing has been ongoing throughout the build using Chrome Developer Tools. The site has been tested on `Safari`, `Google Chrome` and `Firefox` across multiple Apple devices, including iMac, Macbook, iPad, iPhone and Android mobile. All tests have confirmed the site performs as intended, it is visually responsive and has good overall device performance.

## Validation
---
* The HTML has been tested with `W3C Markup Validation` and returned the folowing results:

![html-index](readme/readme_images/html-validator.png)
* The CSS has been tested with `W3C CSS Validator` and returned the following results:

![css](readme/readme_images/css-validator.png)

* `JSHint` has been used to validate the JavaScript and passed with 32 warnings.

## Bugs
---
* Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'.
After researching this error I have found it has to do with **[GitHub](https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites/)** pages.
* Bug with sending email from the contact modal: Safari browser on deployed site and remote server sends, only after "There was an error" alert is closed.
This was resolved by referring back to EmailJS documentation, it was apparent the script being used was from outdated course material.

## User Testing
---
User testing was conducted on slack through the #peer-code-review channel and general feedback was positive.

## Life Cycle & Further Features
---
* Ability to create account to store portfolio information.
* Add date purchased and amount input, to further calculate more data including Return on Investment, Profit/Loss, Total Investment.
* Increase the number of coins available for portfolio calculation.

## User Stories - the outcome...
---
### In this development I wanted the new user to:
* Quickly understand the main purpose of the site.
    - This goal has been acheived with visual communication and a clear header.
    
    ![header](readme/readme_images/header.png)
* Navigate easily and identify relevant assets.
    - Using a single page has meant the navigation process is simplified, identification of the assets is acheived by using the relevant logos.
    
    ![logos](readme/readme_images/logos.png)
* Easily input data and return real time values of cryptocurrencies.
    - Input for the data is simple throught the use of input fields in a accordion, then passed into a function the calculates with fetched API data.
    
    ![input-fields](readme/readme_images/input-fields.png)
* To view a quick and simple visualisation of the value of current assets.
    - This has been acheived by way of a chart that updates when data has been calculated.

    ![chart-update](readme/readme_images/chart-update.png)

## Version Control
---
### Git & GitHub

I used **[GitPod](https://gitpod.io/)** as a local repository and IDE and **[GitHub](https://github.com/)** as a remote repository. The process of version control was:

* First i created a new repository on GitHub 
* I have then opened that repository on GitPod and started coding
* In GitPod i have created all the pages and and folders 
* I was then saving my work and pushing it to GitHub repository to keep it safe
* The process I used for checking, saving, commiting and pushing it to remote repository is:
    * `git status` for checking and displaying the state of the repository and staging area
    * `git add .`  for adding work to git
    * `git commit -m "Commit message"` used for saving changes
    * `git push` used to upload content to a Github
## Deployment
---
To deploy the website on [GitHub](https://github.com/).
1. Go to **"Settings"** in the repository
2. In **"Source"** of **"GitHub Pages"**, select **"master** for Branch and click save
3. The website is now published on GitHub Pages and the link is provided on on the same section
## Credits
---
### Code
* Toggle dark / light mode [W3Schools](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)  [Academind](https://academind.com/tutorials/adding-dark-mode) [PullRequest](https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/)
* Slider switch [W3Schools](https://www.w3schools.com/howto/howto_css_switch.asp)
* Modals [Bootstrap](https://getbootstrap.com/docs/5.0/components/modal/)

### Acknowledgements
I would like to acknowledge the following for the assistance in putting this project together.
* Tutor support
* Mentors
* Code Institute Slack channels Project Milestone & Portfolio 2