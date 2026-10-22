export const terminalCommands: Record<string, string> = {
  help: `Available commands:

about
skills
projects
aws
docker
kubernetes
github
contact
clear`,
  about: `Subrata Dey
DevOps & Cloud Engineer
BCA — Chitkara University
MCA Cloud Computing — Chandigarh University Online
Focus: AWS, Linux, Docker, Kubernetes, CI/CD, Terraform`,
  skills: `Cloud: AWS (EC2, S3, IAM, VPC, CloudWatch)
DevOps: Linux, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform
Languages: Python, JavaScript, Node.js, Bash
Data: MongoDB, MySQL, PostgreSQL`,
  projects: `1. Containerized Voting Application
2. Fresh Cart — MERN
3. CI/CD Pipeline (lab)
4. Terraform AWS Infrastructure (lab)

Use the Projects section for case studies.`,
  aws: `AWS learning surface: EC2, S3, IAM, VPC, CloudWatch, Route 53 (architecture study).
No live account resources are claimed from this site.`,
  docker: `Docker is used to package services (voting stack, portfolio image, Fresh Cart packaging path).
Compose for local multi-service runs.`,
  kubernetes: `Kubernetes is a current learning area for scheduling the same container workloads described in the voting project.`,
  github: `Set VITE_GITHUB_USERNAME in .env to load public repositories.
Until then this terminal will not invent repository names.`,
  contact: `Email: YOUR_EMAIL
LinkedIn: YOUR_LINKEDIN
GitHub: YOUR_GITHUB

Replace placeholders in src/data/profile.ts or .env.`,
}

export const terminalWelcome = `subrata-dey@portfolio:~
Type "help" for commands. This terminal is optional and does not replace the page nav.`
