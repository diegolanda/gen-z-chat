# Gen-Z Chat

This project is a [Next.js](https://nextjs.org) application, initialized with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To start the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# 🔒 Encrypted File Handling in Vercel

This repository includes an **encrypted file** that is not accessible unless you have the correct decryption key. If you do not have the key, you will need to generate your own encrypted version.

## 🔑 Why is this file encrypted?
Some project configurations or data should not be publicly readable, but the project remains open-source. To ensure that only authorized users can access the contents, we encrypt this file before committing it to GitHub.

---

## 🔐 How to Decrypt the File in Vercel Before Building

Since storing sensitive information in the repository is not safe, we will:
1. Store the **decryption key** as a **Vercel environment variable**.
2. Automatically **decrypt the file** before running the build using a **pre-build script**.

### 1️⃣ Add the Decryption Key to Vercel
1. Navigate to your project in [Vercel's Dashboard](https://vercel.com/).
2. Go to **Settings > Environment Variables**.
3. Add a new environment variable:
   - **Key:** `DECRYPTION_KEY`
   - **Value:** `your-secret-passphrase` (do not use quotes)
   - **Environment:** Choose `Production`, `Preview`, and `Development` if needed.
4. Click **Save**.

---

### 2️⃣ Modify the `package.json` or `vercel.json` to Decrypt Before Build
#### Option 1: Using a Build Hook in `vercel.json`
Create a `vercel.json` file (or modify it) in your project's root directory:

```json
{
  "build": {
    "env": {
      "DECRYPTION_KEY": "@DECRYPTION_KEY"
    },
    "scripts": {
      "build": "sh scripts/decrypt.sh && next build"
    }
  }
}
