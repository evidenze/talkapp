## Description

A simple talk App APIs.

## Installation

```bash
# Get the project
git clone https://github.com/evidenze/talkapp.git talkapp

# Change directory
cd talkapp

# Copy .env.example to .env
cp .env.example .env

# Create a database (with mysql)
# And update .env file with database credentials
# DATABASE_TYPE=mysql
# DATABASE_HOST=127.0.0.1
# DATABASE_NAME=talkapp
# DATABASE_USERNAME=root
# DATABASE_PASSWORD=root
# DATABASE_PORT=8889
# JWT_SECRET=jhfhgbcgdtrgfjhsYTAR567TIUBEQHGF
```


```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
