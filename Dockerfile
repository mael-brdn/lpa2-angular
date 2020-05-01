# Use of latest nodejs image
FROM node:latest

# Install angular-cli
RUN npm install -g @angular/cli

# Create a new Project
ADD ./burger /burger

# Change workdir to project directory
WORKDIR burger

# Open port for web app
EXPOSE 4200

# Start server
CMD ["ng","serve","--host=0.0.0.0","--port=4200"]
