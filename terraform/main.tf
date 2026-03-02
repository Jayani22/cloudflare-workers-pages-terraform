data "cloudflare_accounts" "account" {}

resource "cloudflare_workers_script" "backend" {
  account_id = data.cloudflare_accounts.account.accounts[0].id
  name       = "my-backend-worker"
  content    = file("../backend/worker.js")
}