# Trouvaille

## Overview

_What is your app? Brief description in a couple of sentences._

Trouvaille is how you find your next travel destination.\
Narrow down destination points that you didn't know you wanted through quick photo 1v1s.\
Every destination point will have images to help you choose based on how you feel.\
You can log-in to save pin destination points that are interesting to you.\
Hopefully this will help you realize what type of destination points you are attracted to, through the pattern of saved points.

### Problem

_Why is your app needed? Background information around any pain points or other reasons._

Humans love new experiences. Some people claim otherwise, which might be true, but not the full truth.\
Most people end up googling 'places to visit', 'where to travel'. This returns article after article of the bare minimum information.\
This is very annoying as you have to click, wait for the website to load, adjust to this website's layout, and scroll mindlessly for a couple seconds before going to the next link.\
This might repeat a couple of times until the google search tab is closed and you return back to what you were doing, and repeat this process later.

### User Profile

_Who will use your app? How will they use it? Any special considerations that your app must take into account._

Anyone interested in travel, anyone that has googled 'places to visit', would be interested in a more curated, centralized space like Trovaille.\
It will do one thing and do it well.

### Features

_List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented._

A list of destinations, with multiple starting points for each destination.\
A sort of filtering system, based on extremely simple 2 choices, to narrow down points in a destination.\
A profile for each user, with their saved destination points available to them.

## Implementation

### Tech Stack

_List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations._

Front-end: React\
Back-end: express, knex, postgreSQL\

### APIs

_List any external sources of data that will be used in your app._

API to fetch data

### Sitemap

_List the pages of your app with brief descriptions. You can show this visually, or write it out._

### Mockups

_Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches._

### Data

_Describe your data and the relationships between them. You can show this visually using diagrams, or write it out._

### Endpoints

_List endpoints that your server will implement, including HTTP methods, parameters, and example responses._
/destinations
    GET /
        returns an array of objects of all destinations\
    GET /:id/points\
        returns an array of objects of all the points of a speicific destination\
### Auth

_Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented._

Yes, there is a registration and login system using the backend api.


## Roadmap

_Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build._

## Nice-to-haves

_Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing._

Global star-based reviews and comments on destination points, with image upload as secondary nice-to-have.\
User-uploaded points, with manual review to only allow high quality submissions.\
Integrations with flight/hotel apis for actions after picking a destination.
