# Developer Automation Scripts

> Battle-tested scripts to automate common dev workflows
> Save hours each week with one-command operations

## Included Scripts

### Deployment
- `deploy.sh` — Deploy to Vercel/Render with one command
- `rollback.sh` — Quick rollback to previous deployment
- `ssl-check.sh` — Check SSL certificate expiration
- `backup-db.sh` — Automated database backup to S3/S3-compatible

### Dev Utils
- `git-cleanup.sh` — Delete merged branches, prune remotes
- `docker-clean.sh` — Clean up dangling images, volumes, containers
- `log-watch.sh` — Tail multiple log files with colored output
- `port-scan.sh` — Find what's running on which port
- `env-check.sh` — Validate all required env vars are set
- `new-project.sh` — Scaffold a new Next.js project with your preferred stack
- `image-optimize.sh` — Batch optimize PNG/JPEG/WebP images

### CI/CD
- `semver.sh` — Bump version and create git tag
- `changelog-gen.sh` — Generate changelog from git log
- `notify-slack.sh` — Send deployment notifications to Slack

## Usage

```bash
# Make executable
chmod +x scripts/*.sh

# Quick deploy
./scripts/deployment/deploy.sh

# Clean up Docker
./scripts/dev-utils/docker-clean.sh
```

## Requirements

- Bash 4.0+
- Standard Unix tools (grep, sed, awk, curl, git, docker where applicable)

## License

MIT — Free for personal and commercial use.

---

Crafted by Codex AI
