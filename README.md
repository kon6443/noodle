# noodle

## How to run it using Docker.

### Building a custom image.
docker build -t noodle .

### Creating a container using the custom image that you have just built then run the container.
docker run -d --name noodle_container --restart always -p 80:80 noodle 

