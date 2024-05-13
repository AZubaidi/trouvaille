
# Trouvaille

## Installation
The back-end for the server can be found here: https://github.com/AZubaidi/bstn-capstone-server 

**Requirements:**
- `node.js`, `postgreSQL`

  *Note: to use MySQL instead, make the database using MySQL and change the `knexfile.js` to use MySQL.*

**Installation steps:**

- Clone this repo
- Clone the back-end repo
- Create a database using postgreSQL, `psql -U postgres`, `create database trouvaille;`
- In the folder for this repo, run `npm i && npm run dev`
- Create a `.env` file in the back-end folder and populate it, using `.env.template` as an example
- In the folder for the back-end, run `npx knex migrate:latest` and `npx knex seed:run` to create and populate your database
- In the folder for the back-end, run `npm i && node index.js`
- The website should now be running!

## Overview

Trouvaille is how you find your next travel destination.\
Narrow down destination points that you didn't know you wanted through quick photo 1v1s.\
Every destination point will have images to help you choose based on how you feel.\
You can log-in to save pin destination points that are interesting to you.\
Hopefully this will help you realize what type of destination points you are attracted to, through the pattern of saved points.

### Problem

Humans love new experiences. Some people claim otherwise, which might be true, but not the full truth.\
Most people end up googling 'places to visit', 'where to travel'. This returns article after article of the bare minimum information.\
This is very annoying as you have to click, wait for the website to load, adjust to this website's layout, and scroll mindlessly for a couple seconds before going to the next link.\
This might repeat a couple of times until the google search tab is closed and you return back to what you were doing, and repeat this process later.

### User Profile

Anyone interested in travel, anyone that has googled 'places to visit', would be interested in a more curated, centralized space like Trovaille.\
It will do one thing and do it well.

### Features

A list of destinations, with multiple starting points for each destination.\
A sort of filtering system, based on very simple two choices, to narrow down points in a destination.\
A profile for each user, with their saved destination points available to them.

## Implementation

### Tech Stack

**Front-end:** `React (TypeScript)`, `MaterialUI` for modals and fonts\
**Back-end:** `Express.js`, `Knex.js`, `PostgreSQL`


***Homepage***\
&emsp;**Hero**\
&emsp;**Selections** (this is a choice of two photos that refine what you're looking for)\
***Points***\
&emsp;Shows you all available points and lets you pin them to your favorites.\
***Pins***\
&emsp;Shows you all your pins (if logged in).

### Data

There are 4 tables in the back-end database:


***destinations***\
&emsp;**id** *PK  (integer auto-increment)\
&emsp;**name** (string not null)\
&emsp;**country** (string)\
&emsp;**photo** (string not null)\
&emsp;**category** (string not null) *(this is a self-made weighting system, 3 integers in a string)\
***points***\
&emsp;**id** *PK  (integer auto-increment)\
&emsp;**destination_id** FK  (integer references destinations.id)\
&emsp;**name** (string not null)\
&emsp;**photo** (string not null)\
&emsp;**category** (string not null)\
***users***\
&emsp;**id** *PK  (integer auto-increment)\
&emsp;**username** (string not null)\
&emsp;**password** (string not null) *(salted and hashed)\
***favorites***\
&emsp;**user_id** *PK  (integer) AND FK (integer references users.id)\
&emsp;**point_id** *PK  (integer) AND FK (integer references points.id)\

### Endpoints

**/destinations**\
&emsp;&emsp;GET /\
&emsp;&emsp;&emsp;&emsp;returns an array of objects of all destinations\
&emsp;&emsp;GET /:id/points\
&emsp;&emsp;&emsp;&emsp;returns an array of objects of all the points of a speicific destination\
**/points**\
&emsp;&emsp;GET /\
&emsp;&emsp;&emsp;&emsp;returns an array of objects of all points\
&emsp;&emsp;GET /:id/\
&emsp;&emsp;&emsp;&emsp;returns an object of a specific point\
**/favorites**\
&emsp;*Requires a bearer token for all methods*\
&emsp;&emsp;GET /\
&emsp;&emsp;&emsp;&emsp;returns an array of all favorites (pins)\
&emsp;&emsp;POST /\
&emsp;&emsp;&emsp;&emsp;*requires a body (point_id)*\
&emsp;&emsp;&emsp;&emsp;puts a favorite in the backend for the user (pin)\
&emsp;&emsp;DELETE /:id\
&emsp;&emsp;&emsp;&emsp;deletes a specific favorite (pin)\
**/register**\
&emsp;*Requires a body (username, password)*\
&emsp;&emsp;POST /\
&emsp;&emsp;&emsp;&emsp;registers a user\
**/login**\
&emsp;*Requires a body (username, password)*\
&emsp;&emsp;POST /\
&emsp;&emsp;&emsp;&emsp;logs in a user and returns a jwt token


### Auth

There is a registration and login system using the backend api.\
The front-end updates state based on if the user is logged in, some functionality requires log in.\
Many backend requests require a bearer token for authorization.


## Roadmap

Global star-based reviews and comments on destination points, with image upload as secondary nice-to-have.\
User-uploaded points, with manual review to only allow high quality submissions.\
Integrations with flight/hotel apis for actions after picking a destination.
