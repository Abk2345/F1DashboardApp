#!/bin/bash

# Wait for the PostgreSQL service to become available
until PGPASSWORD=123 psql -h postgres -U postgres -d F1DriversDatabase -c '\q'; do
  >&2 echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

# Execute the script to save data (replace with the correct path)
node save_data.js

# Start your main application
exec node app.js
