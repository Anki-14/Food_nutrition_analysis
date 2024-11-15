# Use a Python base image
FROM python:3.9

# Set the working directory to /app/backend
WORKDIR /app/backend

# Copy the backend directory to the container
COPY backend /app/backend
COPY requirements.txt /app

# Install dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt

# Run the application
CMD ["python", "app.py"]
