
Readme.md
[Login page of the express application](https://dl-web.dropbox.com/get/Screenshots/Screenshot%202015-04-21%2007.32.20.png?_subject_uid=275550185&w=AAD31pDDqc_AYjzauy8c3brJ9q-4rWVP3WNmEMo67_GBkg)

Thoughts on my implementation<br>
I found the workshop pretty alright. Beyond extending the user.js file, I was able to
navigate around the express framework files. The experience was a bit more fun in terms of ws
because of the interactivity involved from client to server and server to client.
I think the place where I spent the most time was figuring out exactly how to view the data
of the most current online user. I tried creating export functions in users.js that acted as
getters.

After a few searches through google, I realized that in js, we are unable to
export 'local' data structures. Quickly after, I realized through the req object, we can use
session data which correspond to the most recent logged user logged in "database".
Once noting this, I was able to create conditions based on the current user's session
file. Conditions such as if the current user logged is an admin, proceed to admin pages else
redirect. Using similar logic to provide access to "admin" pages, I was able to display views
of all admins in our local database if the current user themselves were an admin.
The most enjoyable part of the assignment was creating the route (/admin/add) that handled the addition of new users into our local db (if admin). 

All in all, completing this workshop has made me feel pretty comfortable working with routes and bettered my understanding of the express framework.
