FROM node:14

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

RUN apt-get update && apt-get install -y postgresql-client

# Add the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set the entrypoint
ENTRYPOINT [ "/entrypoint.sh" ]
