# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm install aws-sdk
# Copy your application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]

