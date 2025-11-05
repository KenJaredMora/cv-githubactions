# 🚀 Automated CI/CD Pipeline for Vite App to show my CV (GitHub Actions Version)

This project demonstrates an automated CI/CD pipeline that deploys a Vite + TypeScript application to AWS EC2 using GitHub Actions and Terraform.

## 🧩 Tech Stack

**Application:**

- Vite
- TypeScript

**Infrastructure & Pipeline:**

- AWS EC2 (free tier)
- Terraform (infrastructure provisioning)
- GitHub Actions (CI/CD pipeline) ... Continuous Integration & Deployment

## 🏗️ Architecture Overview

When a pull request is merged or a commit is pushed to the `main` branch, the pipeline automatically:

1. Builds the Vite application
2. Creates a deployment archive / Creates a compressed deployment artifact (vite-build.tar.gz)
3. Deploys and Connects to the EC2 instance via SSH
4. Extracts and deploys the new build
5. Serves the updated application (with Nginx)

## ⚙️ Setup Instructions

### 1. Infrastructure Setup (Terraform)

1. Define your `terraform/terraform.tfvars`:

   ```hcl
   # Make sure the allowed_http_cidr includes the IP of machines you plan to test from
   allowed_http_cidr = ["your.ip.address/32"]
   ```

2. Execute Terraform to provision AWS infrastructure:

   ```bash
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```

3. Wait for deployment to complete and note the EC2 public IP from the outputs.
4. After completion, note the EC2 public IP from the Terraform outputs — you’ll need it for deployment.

### 2. GitHub Repository Configuration

Set up the following GitHub Actions secrets in your repository:
In your repository, go to -->  Settings → Secrets and variables → Actions, and add the following:

- `EC2_HOST`: The public IP address of your EC2 instance (from Terraform output)
- `EC2_USER`: SSH username (typically `ubuntu` for Ubuntu AMI)
- `DEPLOY_SSH_PRIVATE_KEY`: Private SSH key for EC2 access / Private key content (used to connect from GitHub Actions)

### 3. Testing the Pipeline

1. Make any changes to the `my-vite-app` directory
2. Commit and push changes to trigger the pipeline to main
3. GitHub Actions will automatically:
      Build
      Archive
      Deploy the new version
4. Access/Open your deployed site or your deployed application at `http://[EC2_IP]`
5. See your changes live!

## 📁 Project Structure

```text
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── my-vite-app/                    # Vite TypeScript application
├── scripts/deploy.sh               # Deployment script for EC2
├── terraform/                      # Infrastructure as Code
└── README.md                       # This file
```

## 🌟 Features & 🧠 Notes

- **Automated Deployment**: Triggers on main branch changes (Deployment occurs only on main branch merges/pushes.)
- **Free Tier Compatible**: Uses AWS free tier resources
- **SSH Security**: Secure deployment using SSH keys
- **Build Optimization**: Efficient build and deployment process
- To redeploy manually, simply push another commit.
- Zero-downtime deployment (symlink release model)
- Fully IaC-driven infrastructure (Terraform)
