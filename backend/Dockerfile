# Stage 1: Build the frontend
FROM node:14 as build-frontend

# Set the working directory for frontend
WORKDIR /frontend

# Copy the frontend source files
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install
COPY ./frontend ./

# Build the frontend
RUN npm run build

# Stage 2: Set up the backend
FROM node:14

# Set the working directory for backend
WORKDIR /app

# Copy package.json and package-lock.json for backend
COPY ./backend/package.json ./backend/package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the frontend build files from the previous stage
COPY --from=build-frontend /frontend/build ./public

# Copy the remaining backend source files
COPY ./backend ./

# Start the backend server
CMD ["node", "server.js"]
