
# Steps

  

**Because this demo involves using typescript, we can create a simple react application using the command `npx create-react-app my-app --template typescript`.**

  

## Step 1 - Installation

### `npm install --save-dev jest typescript ts-jest @types/jest`

  

## Step 2 - Make the TS transpile [Jest config file]

**By default, Jest can run without any config files, but it will not compile .ts files. To make it transpile TypeScript with ts-jest, we will need to create a configuration file that will tell Jest to use a ts-jest preset.**

### `npx ts-jest config:init`

  

Alternatively, look at the **ts-jest** installation guide [here](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation).