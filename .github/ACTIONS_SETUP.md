# GitHub Actions Setup Guide

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)

**Triggers:**
- Push to `master` or `main` branch
- Pull requests to `master` or `main` branch

**Jobs:**

#### Test Build (Always runs)
- ✅ Checks out code
- ✅ Installs dependencies with Bun
- ✅ Runs type checking (`bun run check`)
- ✅ Builds the project (`bun run build`)
- ✅ Uploads build artifacts

#### Deploy (Conditional)
**Only runs when:**
1. Push to `master`/`main` (not PRs)
2. Test build passes
3. Core components changed

**Core Components** (trigger deployment):
- `src/lib/components/` - UI components
- `src/lib/services/` - Services (like blog service)
- `src/routes/+layout.svelte` - Root layout
- `src/routes/+page.svelte` - Home page
- `src/routes/blog/` - Blog pages
- `src/routes/layout.css` - Global styles
- `svelte.config.js` - SvelteKit config
- `vite.config.ts` - Vite config
- `package.json` - Dependencies

**Non-Core Changes** (skip deployment):
- Blog content (`src/lib/blog/*.md`)
- Documentation files
- README updates
- GitHub Actions workflows

### 2. PR Preview (`pr-preview.yml`)

**Triggers:**
- Pull request opened, updated, or reopened

**Features:**
- Runs build tests
- Comments on PR with build status
- Provides quick feedback to contributors

### 3. Lint and Format (`lint.yml`)

**Triggers:**
- Pull requests

**Features:**
- Checks code formatting
- Ensures code quality

## Setup Instructions

### 1. Required Secrets

Add these secrets to your GitHub repository (`Settings > Secrets and variables > Actions`):

#### For Vercel Deployment:
```
VERCEL_TOKEN          # Your Vercel API token
VERCEL_ORG_ID         # Your Vercel organization ID
VERCEL_PROJECT_ID     # Your Vercel project ID
```

#### For Netlify Deployment (Optional):
```
NETLIFY_AUTH_TOKEN    # Your Netlify API token
NETLIFY_SITE_ID       # Your Netlify site ID
```

### 2. Get Vercel Credentials

1. **Vercel Token:**
   - Go to https://vercel.com/account/tokens
   - Create a new token
   - Copy and add as `VERCEL_TOKEN`

2. **Organization ID:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login and get org ID
   vercel whoami
   ```
   - Or find it in your Vercel team settings URL

3. **Project ID:**
   - Go to your Vercel project settings
   - Look for "Project ID" under General settings
   - Or run `vercel link` in your project

### 3. Get Netlify Credentials (Optional)

1. **Auth Token:**
   - Go to https://app.netlify.com/user/applications
   - Create a new personal access token
   - Copy and add as `NETLIFY_AUTH_TOKEN`

2. **Site ID:**
   - Go to your Netlify site dashboard
   - Site settings > General > Site information
   - Copy the "API ID"

### 4. Enable GitHub Actions

1. Go to your repository settings
2. Navigate to `Actions > General`
3. Ensure "Allow all actions and reusable workflows" is selected
4. Save changes

## Workflow Behavior

### Scenario 1: Blog Content Update
```
✍️ Update src/lib/blog/my-post.md
📝 Commit and push
✅ Build test runs
⏭️ Deployment skipped (content-only change)
```

### Scenario 2: Component Update
```
🔧 Update src/lib/components/Button.svelte
📝 Commit and push
✅ Build test runs
✅ Build passes
🚀 Deployment triggered
🎉 Site updated
```

### Scenario 3: Pull Request
```
🔀 Create PR
✅ Build test runs
💬 Bot comments on PR
👀 Review and merge
🚀 Deployment triggers on merge (if core changes)
```

## Customization

### Modify Core Component Paths

Edit `.github/workflows/ci-cd.yml`:

```yaml
CORE_PATHS="src/lib/components src/lib/services ..."
```

Add or remove paths as needed.

### Change Deployment Platform

The workflow supports both Vercel and Netlify. To use only one:

1. **Vercel only:** Remove the Netlify deployment step
2. **Netlify only:** Remove the Vercel deployment step

### Add More Checks

Add additional jobs in `ci-cd.yml`:

```yaml
test:
  runs-on: ubuntu-latest
  steps:
    - name: Run tests
      run: bun test
```

## Monitoring

### Check Workflow Status

1. Go to `Actions` tab in your repository
2. Click on any workflow run
3. View logs and status

### Debug Failed Builds

1. Click on failed workflow
2. Expand failed step
3. Read error messages
4. Fix issues and push again

## Best Practices

1. **Always test locally first:**
   ```bash
   bun run check
   bun run build
   ```

2. **Use PRs for major changes:**
   - Create feature branch
   - Open PR
   - Wait for CI checks
   - Merge after approval

3. **Keep main branch stable:**
   - Use branch protection rules
   - Require status checks to pass
   - Require reviews before merging

4. **Monitor deployments:**
   - Check Actions tab regularly
   - Set up email notifications
   - Review deployment summaries

## Troubleshooting

### Build fails with "Module not found"
- Ensure all dependencies are in `package.json`
- Run `bun install` locally and commit `bun.lockb`

### Deployment skipped unexpectedly
- Check if changed files match core component paths
- Review workflow logs for "core_changed" output

### Secrets not working
- Verify secrets are added to repository settings
- Check secret names match exactly (case-sensitive)
- Ensure secrets have no trailing spaces

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
- [Netlify Deployment Guide](https://docs.netlify.com/site-deploys/overview/)

---

Need help? Check the Actions tab for detailed logs or open an issue.
