# Cloudflare Workers + Pages Deployment using Terraform

This project demonstrates how to deploy:

- Backend using **Cloudflare Workers**
- Frontend using **Cloudflare Pages**
- Infrastructure provisioning using **Terraform**
- GitHub integration for automatic deployments
Both backend and frontend resources are created and managed using Terraform.

---

## Architecture Overview

Frontend (Cloudflare Pages) -> Calls Backend API -> Cloudflare Worker (Serverless Backend)

- Backend returns JSON response
- Frontend fetches and displays response
- CORS enabled for cross-origin communication

---

## Backend (Cloudflare Worker)
- Created using Terraform resource: `cloudflare_workers_script`
- Deployed using: `terraform apply`
- Hosted on workers.dev subdomain
- Returns JSON response
- CORS enabled to allow frontend access

---

## Frontend (Cloudflare Pages)
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

---

## Loom Video Link:
https://www.loom.com/share/bdd0f1513ecf49f38616a994ae567fa6
