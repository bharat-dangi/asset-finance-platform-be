# Use the official Node.js image.
# Use Node.js 20 LTS.
FROM node:20

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install --production

# Copy local code to the container image.
COPY . .

# Build the TypeScript application.
RUN npm run build

# Run the web service on container startup.
CMD ["node", "dist/server.js"]

EXPOSE 5000