
# Competitive Programming Problems Tracker

This application allows you to store and manage information about various competitive programming (CP) problems you have solved. It includes both a backend API and a frontend interface to perform operations like grouping the problems by difficulty.

## Features

- Store information about CP problems including problem link, date solved, difficulty, and topic.
- Group and display problems by difficulty.

## Technologies Used

- **Backend**: Next.js API routes, MongoDB
- **Frontend**: Next.js, React, Tailwind CSS
- **Database**: MongoDB

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/Kirito-89/cp-problem-tracker
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Set Up Environment Variables

Create a .env.local file in the root directory and add your MongoDB URI:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/cp-problems?retryWrites=true&w=majority
```
## Usage

You can access the form to submit relevant information about the problem to be saved in the database by navigating to http://localhost:3000/form.

At http://localhost:3000/, you can view the list of problems grouped by difficulty.

![Alt text](/public/image1.png)
![Alt text](/public/image2.png)
