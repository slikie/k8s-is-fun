#!/bin/bash

UUID=$(uuidgen)

# Loop indefinitely, printing the current date and UUID every 5 seconds
while true; do
  echo "$(date -Ins): $UUID"
  sleep 5
done
