#!/bin/bash
# git-cleanup.sh — Clean up merged branches and pruned remotes
# Safe: only deletes branches already merged into the current branch

set -euo pipefail

echo "🧹 Cleaning up merged branches..."

# Fetch latest and prune
git fetch --prune 2>/dev/null || true

# Delete local branches merged into main/master
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

for branch in $(git branch --merged | grep -v "\*" | grep -v "main" | grep -v "master" | grep -v "develop" | sed 's/^ *//'); do
  if [[ -n "$branch" ]]; then
    echo "   Deleting: $branch"
    git branch -d "$branch" 2>/dev/null || echo "   ⏭️  Could not delete $branch (not fully merged)"
  fi
done

# Delete remote tracking branches that no longer exist
echo "🧹 Pruning remote tracking branches..."
git remote prune origin 2>/dev/null || true

# Delete local branches whose upstream is gone
for branch in $(git branch -vv | grep ': gone]' | awk '{print $1}'); do
  if [[ -n "$branch" ]]; then
    echo "   Deleting orphaned: $branch"
    git branch -d "$branch" 2>/dev/null || true
  fi
done

echo "✅ Cleanup complete!"
echo "   Remaining branches:"
git branch | wc -l | tr -d ' ' | xargs -I{} echo "   {} branches"
