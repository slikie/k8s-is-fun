FROM node:23-alpine

# Copy the custom script from the current directory into the container
COPY ./ /app

# Set the working directory to /app
WORKDIR /app

# Create a new script file
RUN npm i

# Run the script when the container starts
CMD [ "node", "index.js" ]
