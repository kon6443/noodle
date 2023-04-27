# noodle

## What is does?
This program is for basic practice of HTTP concepts. <br>
Each client from the browser can order a ramyun which is a Korean instant noodle.
Once they have order their food, they can check the current process from the browser.
When the noodle is done, the server notifies it to the client.

Every time each client requests an order, a new ramyun object is created and starts to make it.
Since there exists each user's sessionID separately, I am using it to store each client's ramyun status.
Therefore, a user's order does not affect to another user which means that each of user has their own ramyun separetly. 

## How to run it using Docker.

### Building a custom image.
docker build -t noodle .

### Creating a container using the custom image that you have just built then run the container.
docker run -d --name noodle_container --restart always -p 80:80 noodle 

## Used skills.
• node.js <br>
• docker <br>

