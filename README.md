# Fischer Full-Stack-Challenge 🍭🍬🍫

[Deployed URL]()

For Rails generated Businesses routes:

`rails server`

`http://localhost:3000/businesses for Rails XML CRUD`

Test routes httPie: `http GET/DELETE/PUT/POST :3000/businessses.json or :businesses/:id.json`

```haskell
Business: {
  id: int (auto),
  name: string,
  longdesc: string,
  shortdesc: string,
  founded: int,
  founders: string,
  location: string,
  timestamps (auto)
}
```

## Techstars Engineering: Fun Front to Back

Welcome to the Techstars Engineering Full Stack code Challenge. We work on diverse project and value team members who can do it all from CSS to DevOps and everything inbetween. We love to code and are passionate about doing it well.

This is your chance to show the team how you approach problems and give us insight into your abilities. For the challenge, you are required to design, develop, and style a Full Stack application using Rails as the API and React as the front-end. Do not use Rails templates for your UI. Feel free to use any third party libraries you see fit. You will have **48 hours** to submit a solution for the given requirements. We strongly prefer that whatever you do, you do it well, as opposed to trying to razzle dazzle us. Please read all the instructions carefully and email us if you have any questions.

## Getting Started

First, fork this repository into your own GitHub account. Then complete each of the parts below, working as you would in a professional environment. Once you have completed all the sections, please update the README, to reflect how to build and run your application, as well as any architectural decisions you have made. Add your deployment url to your github repo so we can test the deployed application. When you believe you are ready to submit your challenge, submit a pull request into our master branch. We will see the notification and get back to you on next steps.

## What we are looking for

[] Ability to set up a REST API (Strongly Recommend Rails).
[] Ability to set up a Relational Database - PostgreSQL
[] Understanding of the HTTP protocol and how it works with REST API conventions
[x] Understanding the basics of CRUD

- Create
- Read
- Update
- Delete
  [x] Ability to layout and design an HTML page with CSS
  [x] React
  [x] Ability to use javascript on the front-end to interact with a REST API
- Ability to develop automated tests for your application
  [x] Ability to translate user stories as into a web application
  [] Ability to deploy a front-end and back-end stack.

## The Challenge

### Intro

Build an application that will be a directory of companies, and the people who have founded them. The main page should be a list of all the companies with some high-level information (Name, Short Description, City, State). When the user click on a company, show its details. Included in those details will be the founding members of company, a long description.

### Part 1 : Companies Index

1. Create the basic layout for the page
2. Create a list view of all companies

- Company Name
- Company Location
- Short Description

3. Add ability to create a new company

### Part 2 : Companies Create

1. Implement form to create a new company
2. Fields
   _ Company Name **required**
   _ Company Location (City, State) **required**
   _ Company Description **required**
   _ Founded Date
   <br />

![step 2](Step_2.png)

### Part 3 : Company Details

1. Shows all of the company's information
2. Ability to update company
3. Ability to delete company
   <br />

![step 3](Step_3.png)

### Part 4 : Founders

1. In the Company details add the ability to add a Founder to a Company.
2. Each Founder can only belong to a single company.
3. Founder Fields
   - Founder Full Name
   - Founder Title
4. Founders added should display in the company detail page.
   <br />

![step 4](Step_4.png)

### Part 5 : Tests

Create a test suite for your application, writing unit and or functional tests that adequately cover the code base. TDDers will have already completed this challenge.

### Part 6 : Deployment

Sign-up for a Heroku account (or other provider) and deploy your application to the web. Please provide us with tye deployed URL. Bonus points for using a provider other than Heroku like Digital Ocean. Please seed your application with at least a dozen Companies and Founders.

### Next Steps

If you move onto the next stage of the interview process we will have you come in and pair program with our engineers and build on top of your code base. Example features we might implement together would be to add category tags, add a search component or add images to Companies and Founders using a third party hosting service.

---

My steps:

`rails new full-stack-challenge --database=postgresql`

`rails g scaffold Business name:string shortdesc:text longdesc:text location:string founded:integer founders:array`

`rails g scaffold Founders name:string businessid:integer`

`rake db:migrate`

`gem 'webpacker_lite'`

`gem 'react_on_rails', '8.0.3'`

Running dev with react app:

`foreman start -f Procfile.dev`

---

## Resources

[Testing with RSpec and Jest](https://www.freecodecamp.org/news/how-to-get-started-testing-a-ruby-on-rails-reactjs-app-with-rspec-jest-and-enzyme-d058f415894e/)
