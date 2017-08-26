# Starter-kit-node
Starter kit with node, express, docker to use with Truce platform

## Prerequisites
1. Configure [AWS CLI](https://slack-files.com/T3DBSSN8P-F6BPNCFTM-3d2d925364). 
2. Install PM2 globally. `npm install pm2 -g`
3. Node version required: `8.2.0`

## Setup linting
Read [this document](https://slack-files.com/T3DBSSN8P-F6BPNCFTM-3d2d925364) to set up linting in Sublime. 

## Setup
1. Clone this starter kit. `git clone https://gitlab.com/transin/starter-kit-node`
2. Run `npm install`
3. Remove the `.git` folder using `rm .git` 

## Development environment
1. Add `.env` file to the local code
2. To start Development environment use `npm run dev`
3. To stop use `Ctrl + C`

## How to use Authentication for your Routes
* We are using keycloak (Enterprise level auth platfrom) for all auth purposes. [Link](https://keycloak.gitbooks.io/documentation/authorization_services/index.html) 

## How to run the docker?
1. Clone the repo
2. Check if it runs locally without using docker
3. Build image from code using `docker build -t <Image Name> .`
4. Run the image using `docker run -it -p 3000:3000 -e PORT=3000 -e AWS_ACCESS_KEY="accesskey" -e AWS_SECRET_KEY="secretkey" --name <container name you want> <Image Name>` 

## Using persistant DB for your service

We are using PostGres hosted on AWS RDS for all RDMS purposes and DynamoDB for all nosql purposes.

## Shared file system for your services (docker volumes)

All ECS instances have EFS integrated to it and mounted on `/efs`. 

## Kafka - Event driven infrastructure

At the heart of our entire infrastructure we have Kafka to which you can read and write. We are using `kafka-node` module for integration. 
Read more about how to connect kafka to our system [here](https://www.npmjs.com/package/kafka-node).

## Caching locally within your service

We are currently using redis as caching mechanism for all the services.

## Integrating with Elastic search

## Logging
1. We are using `winston` and `morgon` for logging
2. Please read [this link](http://www.jyotman.xyz/post/logging-in-node.js-done-right) before proceeding furthur.
3. All server logs can be seen in cloud-watch in AWS, in the foleder `SERVICE_NAME-service`
4. Deployment automatically creates a log folder in AWS Cloudwatch. You can into your AWS account and check the logs.
5. Always use `logger.log` instead of `console.log` 

## API Guidelines
1. Always implement `/ping` api for every microservice so that we can configure health checks on this url

## Codeguide lines

## CI/CD Guidelines

## How to deploy your service to AWS

## This starter kit uses two tutorials for setting up this:
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai







Copy the .env.sample to create a .env file
`cp .env.sample .env`
Update the .env details locally

In docker file for production:
global install pm2
RUN npm start