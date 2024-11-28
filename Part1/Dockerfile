FROM ubuntu:latest

# Install uuidgen and bash
RUN apt-get update && apt-get install -y uuid-runtime

# Copy the custom script from the current directory into the container
COPY output_random_uuid_every_5s.sh /output_random_uuid_every_5s.sh

# Create a new script file
RUN chmod +x /output_random_uuid_every_5s.sh

# Set the working directory to /app
WORKDIR /

# Run the script when the container starts
CMD ["/output_random_uuid_every_5s.sh"]
