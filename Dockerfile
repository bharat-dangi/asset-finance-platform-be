# Step 1: Use official Node.js image as the base image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application
COPY . .


# Step 7: Expose the port the app will run on
EXPOSE 5000

# Step 8: Define the command to run the app
CMD ["npm", "start"]