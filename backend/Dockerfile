# Use an official Python runtime as the base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port your app will run on (optional)
EXPOSE 8000

# Command to run your application
CMD ["python", "app.py"]

