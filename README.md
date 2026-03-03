# Cloudflare Workers + Pages Deployment using Terraform
### Cloudflare Calculator App (Terraform Deployment)

This project demonstrates deploying application on Cloudflare using **Terraform**.
It includes:
- Backend deployed using **Cloudflare Workers**
- Frontend deployed using **Cloudflare Pages**
- Infrastructure provisioning using **Terraform**
- CI/CD integration via **GitHub**

Both backend and frontend resources are created and managed using Terraform.

---

## Architecture Overview

Frontend (Cloudflare Pages)  
-> Sends user input (numbers + operation)  
→ Backend (Cloudflare Worker) processes logic  
→ Returns JSON response  
→ Frontend dynamically renders result 

---

## Backend (Cloudflare Worker)
The Worker:
- Parses query parameters
- Validates input
- Performs arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Handles divide-by-zero errors
- Created using Terraform resource: `cloudflare_workers_script`
- Deployed using: `terraform apply`
- Hosted on workers.dev subdomain
- Returns structured JSON response
- Enables CORS enabled to allow frontend communication

---

## Frontend (Cloudflare Pages)
The frontend:
- Accepts user input (two numbers + operation)
- Sends request to backend Worker API
- Dynamically displays calculated result
- Automatically deploys on Git push
- Created using Terraform resource: `cloudflare_pages_project`
- Connected to GitHub repository
- Auto-deployment enabled on push to main
- Static HTML application
- Build output directory: `frontend`

Hosted on: https://cloudflare-workers-pages-terraform-a0g.pages.dev/

## Terraform Setup
1. Initialize
terraform init

2. Plan
terraform plan

3. Apply
terraform apply

This will:
- Create Cloudflare Worker
- Deploy Worker script
- Create Cloudflare Pages project
- Connect GitHub repository
- Configure build settings

---

## Security

- API token stored as environment variable
`export TF_VAR_cloudflare_api_token=your_token`
- Terraform state files excluded using .gitignore
- No credentials stored in repository

---

## Features Implemented
- Infrastructure as a Code (Terraform)
- Serverless backend deployment
- Static frontend hosting
- GitHub-based CI/CD
- Cross-Origin communication (CORS) configuration
- End-to-end deployment verification
