#!/bin/sh

# Ensure the script exits on failure
set -e

# Check if the decryption key is set
if [ -z "$DECRYPTION_KEY" ]; then
  echo "Error: DECRYPTION_KEY is not set."
  exit 1
fi

# Decrypt the file using GPG
gpg --batch --yes --passphrase "$DECRYPTION_KEY" --output src/openai/systemPrompt.ts --decrypt src/openai/systemPrompt.ts.gpg

echo "Decryption completed successfully."

