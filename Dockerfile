# Use an official Node.js runtime as a base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve the build files
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3001

# Command to run the app using the HTTP server
CMD ["npm", "start"]
