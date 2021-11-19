# automated-qa-challenge
Hello and welcome to the automated QA challenge of Archlet. We are super excited to have you here!
In this challenge, you will step into the shoes of one of our users named Jessica and your task is to automatically test within Archlet 1-2 use cases how she wants to use Archlet in her daily work.

We give you a bit of background & business context on Jessica in the story below and dig then into the formalities of the challenge. 

Enjoy :) 

## Story of Jessica
Jessica is a Food Ingredients buyer at an internationally well-known food and beverage company. Every 6 months, Jessica needs to negotiate new contracts with all the suppliers who are providing the company with the right vegetable oils. During the negotiation and the decision making where Jessica needs to decide with which suppliers the company wants work, cost is important but also additional factors have to be considered:
- Scenario 1: Reducing the number of suppliers that are selected in order to reduce supply chain complexity
- Scenario 2: Reducing the share of business that is given to a specific supplier to reduce the company's dependency on it

## Task: Create scenarios in the Vegetable Oils project
We will give you access to an existing project called "Vegetable oils" for which you should create a 2 new scenarios so that we can test Jessica's use cases automatically:
- We already uploaded all of Jessica's supplier data into Archlet so that you can fully focus on the scenario creation.
- come up with an automatic test case to validate the acceptance criteria of the first scenario.
- (at least conceptually if you run out of time) come up with an automatic test case for the second scenario.

In order that you do not need to start from scratch, we provided a basic cypress setup that takes case of the authentication into Archlet and guides you to the scenario page in your project.

 In order to have it running on your machine, you have to:
1. Run `yarn` on this folder
2. Update the variables `YOUR_USERNAME`, `YOUR_PW` and `YOUR_PROJECT_NAME` with the details provided by e-mail
3. Run `yarn cypress run`
4. Run `yarn cypress open` to open the cypress testing UI

If you have further doubts regarding the use of scenarios in Archlet, reach out to us or check out our great [Help Center](https://www.notion.so/Optimization-Scenarios-88dd0637d58f41deb74a23cf7a886ecc).

### Scenario 1: At most 2 suppliers 
- Create a scenario with at most 2 winning suppliers in all countries except from Bosnia
- Hint: You can set the filters accordingly in the "Number of Suppliers" card
- Hint: if you select the "Partial Allocation" in the General Settings box, you ensure that you can create scenarios that do not cover all items


### Scenario 2: At most 10% for Cargill
- Create a scenario where at most 10% of the overall spend are allocated to Cargill
- Hint: you can set the filters accordingly in the Limit Spend card
- Note: it is important to distinguish between the filters "for each" and "for all". If there’s 10 countries bidding, 1 winning supplier for each country is 1 supplier per country. 1 winning supplier for all countries is 1 overall.


## Formalities:
The deliverables of this E2E challenge are the following:
- A git repo where you provide your runnable code to us.
- The e2e test should run through all the steps necessary to create the scenarios.
- As we provided the bare bone in cypress, you ideally create the E2E tests with this framework.
- Based on what you see in the scenario section of Archlet, provide a short *TO DO list* on what you woud do next in terms of testing & improvements. 
