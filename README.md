# ICT Skills 2 Assignment - Single Page app.

Name: Lee Thornton

## Overview.

For this assignment I chose to create a react app of points of interest based on Irish Islands.
The user will be able to view the home page of all irish islands currently listed, they will also 
be able to add their own point of interest. 

Users are able to filter islands by name or by the region they are situated in e.g. North
CRUD functionality is enable with users being able to edit & delete islands. In addition
users are able to like an island by clicking the heart icon & the top rated islands are 
listed to the top hence they will be seen first.

Users are able to click through to view reviews of each island but this requires a login.
A logged in user will be able to create their own review & also vote on other users reviews.
Like the islands the top rated review will be filtered to the top. A user will also be
able to see the location of an island on google Maps.

. . . . . List of user features  . . . .

- app deployed at : https://thawing-stream-18881.herokuapp.com/
- list all islands
- Add an Island shown
- Number of islands 
- filter points by name or by region
- Google map location of point
- Like a point
- user login
- review view protected by login
- Delete points
- Edit points
- Add reviews
- like comments
- JSON Server--backend integration
- e2e testing

## Setup.

. . . . Having cloned the repo,
**Step 1**

Run the auth server

- Navigate to poi-app folder cd poi-app
- Proceed to the mock-auth-backend folder:
  - cd mockJwt
  - cd mock-auth-backend
- Install Dependencies npm install
- run the server node index.js
- Your server should be now running on port 8005
- leave the terminal window open to keep the auth server running

**Step 2**

Run the JSON Server (backend)

- Open a new terminal window & navigate to poi-app folder cd poi-app
- run the Json server json-server 
  - json-server ./points.json -p 3002
- Leave the terminal window open to keep the json server running

**Step 3**

Run the React application

- Open a new terminal window & navigate to poi-app folder cd poi-app
- install dependencies npm install
- To enable google maps functionality, navigate to src folder & create env.json file
{
  "REACT_GOOGLE_MAP": "<Your-API-KEY>"
}
- to run the application from the poi-app folder use command npm start
  - The app is now running at localhost:3000
  
**Step 4 (Optional)**

Run story book
  
- Open a new terminal window within the folder react_poi
- Run npx start-storybook -p 9001 -c .storybook/

**Step 5 (Optional)**

Run Cypress tester

- Open a new terminal window within the folder react_poi
- npx cypress open
- This is a testing tool used for testing new & existing features

## Data Model Design.

Preloaded data which is ran by the JSON server, from the points.json file
Important thing to note if adding additional data, lat & long need to be added in number
format for the Google Map functionality to work.

"points": [
    {
      "id": 1,
      "name": "Tory Island",
      "details": "Tory Island, or simply Tory, is an island 14.5 kilometres off the north-west coast of County Donegal in Ulster, Ireland, and is the most remote inhabited island of Ireland.",
      "category": "North",
      "lat": 55.2655,
      "long": -8.2304,
      "upvotes": 10,
      "reviews": [
        {
          "id": 1,
          "author": "Joe Bloggs",
          "review": "I agree with .....",
          "upvotes": 5
        },
        {
          "id": 2,
          "author": "Jane Smith",
          "review": "On the other hand .....",
          "upvotes": 2
        }
      ]
    },

## UI Design.

. . . . . Screenshots of app's views with brief statements of their use

![][header]

>> The header is used for navigation to the home view of the app. Clicking on Point app
 returns the users to the home page.
 Also contains a login button for users to login. Number of points currently listed. 

![][filter]

>> The filtering function for points is placed just above the list of points. Tbe user is 
able to type in text to search for a point's name or select a region based on the dropdown menu.

![][adding]

>> The adding form allows a user to create a point that will then be displayed in the pointlist.
Placeholders indicating Name, Details, Lat & long are provided to indicate to the user 
the details needed to create a point. There is also a dropdown menu of pre-determined regions 
that the user must select from.

![][pointlist]

>>The point listing piece show's all points pre-loaded in from the json server. Each point
is contained in their own card with Edit & Delete buttons & a heart icon(this indicates likes)
Each card contains a link to all the reviews which are also pre-loaded from the json server.

![][delete]

>>Once the delete button is selected by the user. The point card changes to yellow, the user is
then given the option to either cancel the delete or confirm & remove the point.

![][edit]

>>If the user selects the edit option the card background changes colour to blue. The user
is then given the option to save their changes or cancel & revert back to the original data.

![][login]

>>if the user clicks on the login button or into reviews assuming they haven't already 
logged in, they will then be redirected to the login view. They need to enter email details
& a password that's been pre-loaded in the auth server.

[
    {
        "identifier": "a@b.com",
        "password": "test",
        "roles": ["admin"]
    },
    {
        "identifier": "c@d.com",
        "password": "test",
        "roles": []
    }
]

![][signout]

>> Once the user has logged in, the user email that's logged in is indicated in the header,
also the user can click the signout button to log out. Clicking point app will return
the user to the homepage.

![][reviewlist]

>> Once the user has logged in they will be taken to a view where reviews are listed,
they can also give a review a thumbs up if they agree with the view. Reviews are sorted
by number of likes.

![][addReview]

>>The user is able to create their own review which can then be voted upon by other users.
The placeholders indicate a user is to make a review & also to detail their name.

![][map]

>>The Google map piece use's the co-ordinates (long, lat) pre-loaded by the Json server to
display the location of islands on the map.

## Routing.

- /points (public)- displays all points, adding point functionality, header component & filtering controls for points.
- /points/:id (private) - displays all reviews, adding review functionality, google map location
- /login (public) - displays the login component, only a registered username and password will grant access

## Storybook.

![][storybook]

- Below is a full list of all the stories used in storybook to test views & functionality.
- I pretty much used storybook in parallel with the application for testing. Checking it was working correctly in Storybook before it worked
in the app server itself.

## Backend.

For the backend integration I chose to use a JSON server as the API. Initially I had chosen to integrate the backend with my
poi-API from a previous assignment. But I found there was limited data available due to the new features created
in the react app. I also created a custom random generator API but I also found this didn't generate the desired data
& didn't give the app an authenticate feel. The JSON server in my view was the best option as it allowed me to easily customize
any preloaded data in line with feature creation.

Please see an example below of an island generated using the Json server.

It is also worth noting that the deployed version of this app is set up to load data from the Json server,
as search it will need to be running in order to generate preloaded data.

{
  "points": [
    {
      "id": 1,
      "name": "Tory Island",
      "details": "Tory Island, or simply Tory, is an island 14.5 kilometres off the north-west coast of County Donegal in Ulster, Ireland, and is the most remote inhabited island of Ireland.",
      "category": "North",
      "lat": 55.2655,
      "long": -8.2304,
      "upvotes": 10,
      "reviews": [
        {
          "id": 1,
          "author": "Joe Bloggs",
          "review": "I agree with .....",
          "upvotes": 5
        },
        {
          "id": 2,
          "author": "Jane Smith",
          "review": "On the other hand .....",
          "upvotes": 2
        }
      ]
    }, 
## Authentication (if relevant).

For authentication I chose to implement a Mock auth server, as outlined in the setup steps above.
There are two sample accounts generated but more can be added by customizing the accounts.json file.
I utilized authentication to protect the reviews view for only logged in users, also only allowing logged in users to create reviews.
Below are the sample accounts generated:

[
    {
        "identifier": "a@b.com",
        "password": "test",
        "roles": ["admin"]
    },
    {
        "identifier": "c@d.com",
        "password": "test",
        "roles": []
    }
]
## Independent learning.

Most of the independent learning was spent around Cypress testing, for example how to click buttons
hidden within wrapped headers. For example the login button. I explored some bootstrap react to implement
accordion functions for the create reviews & points options but unfortunately I never got around to implementing these elements
in the final UI design.

[header]: ./images/Header.PNG
[filter]: ./images/Filter.PNG
[adding]: ./images/Add.PNG
[pointlist]: ./images/Pointlist.PNG
[delete]: ./images/Deletepoint.PNG
[edit]: ./images/Edit.PNG
[login]: ./images/Login.PNG
[reviewlist]: ./images/Reviewlist.PNG
[addReview]: ./images/Addreview.PNG
[map]: ./images/Map.PNG
[signout]: ./images/Reviewheader.PNG
[storybook]: ./images/Storybook.PNG


