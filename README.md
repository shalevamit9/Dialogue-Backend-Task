# Dialogue-Backend-Task

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/shalevamit9/Dialogue-Backend-Task.git
cd Dialogue-Backend-Task
```

```bash
npm install
```

## Usage
Run the application with the following command

```bash
npm start
```

Open:</br>
• http://localhost:4000/api/v1/marvel-actors to see the which marvel movies did each actor play in.</br>
• http://localhost:4000/api/v1/marvel-actors-multiple-characters to see the actors who played more than one Marvel character.

## Use Docker
You can also run this app as a Docker container

Step 1: Build the Docker image

```bash
docker build -t dialogue-backend-task .
```

Step 2: Run the Docker container locally:

```bash
docker run -p 4000:4000 -d dialogue-backend-task
```

## Test
To run the testing code use:
```bash
npm test
```