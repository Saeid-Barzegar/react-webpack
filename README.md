# React JS boilerplate with webpack and babel
Welcome to the Awesome React-Webpack Project! This README provides a comprehensive guide to set up, run, and deploy your project. Whether you're a developer or contributor, these instructions will help you get started.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Running in Development Mode](#running-in-development-mode)
- [Building for Production](#building-for-production)
- [Analyzing Bundle Size](#analyzing-bundle-size)
- [Contributing](#contributing)
- [About the Project](#about-the-project)

## Introduction
The Project is a boilerplate to start the development of you web application using the powerful combination of React JS and Webpack. This project aims to showcase best practices in modern web development and provide an optimal development experience.

## Installation
To get started, follow these steps to install the project dependencies:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run the following command to install the required dependencies:
```bash
yarn
```
or
```bash
npm install
```

## Running in Development Mode
After installation of npm packages run these commands to start the project on development mode
```bash
yarn start
```
or
```bash
npm run start
```
it will run the project on webpack server on port 9000
your project will be available on "http://localhost:9000" address;

## Building for Production
Run the below commands to build the entire project for PRODUCTION
this command include the maximum optimisation and compression the bundle and images for PRODUCTION
```bash
yarn build
```
or
```bash
npm run build
```

# Analyzing Bundle Size
to analyze the final bundle size you can run 
```bash
yarn bundle:analyze
```
or
```bash
npm run bundle:analyze
```
It will run a service and shows the final bundle size and shows which bundle has the maximum size in your bundle files

