# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json first and install dependencies
COPY package.json ./

# Ensure react-scripts is installed
RUN npm install && npm install react-scripts --save

# Copy the entire frontend source code after installing dependencies
COPY . .

# Expose the React development server port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
