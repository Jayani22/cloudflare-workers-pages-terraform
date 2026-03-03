data "cloudflare_accounts" "account" {}

resource "cloudflare_workers_script" "backend" {
    account_id = data.cloudflare_accounts.account.accounts[0].id
    name       = "my-backend-worker"
    content    = file("../backend/worker.js")
}

resource "cloudflare_pages_project" "frontend" {
    account_id        = data.cloudflare_accounts.account.accounts[0].id
    name              = "cloudflare-workers-pages-terraform"
    production_branch = "main"

    source {
      type = "github"

      config {
        owner                         = "Jayani22"
        repo_name                     = "cloudflare-workers-pages-terraform"
        production_branch             = "main"
        deployments_enabled           = true
      }
    }

    build_config {
      build_command   = ""
      destination_dir = "frontend"
    }
}