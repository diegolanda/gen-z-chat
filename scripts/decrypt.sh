#!/bin/sh

# Ensure the script exits on failure
set -e

# Check if the decryption key is set
if [ -z "$DECRYPTION_KEY" ]; then
  echo "Error: DECRYPTION_KEY is not set."
  exit 1
fi

# Decrypt the file
openssl enc -d -aes-256-cbc -in secret_file.enc -out secret_file.txt -k "$DECRYPTION_KEY"

echo "Decryption completed successfully."
