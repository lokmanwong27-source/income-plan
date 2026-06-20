#!/bin/bash
# changelog-gen.sh — Generate changelog from git log since last tag
# Usage: ./changelog-gen.sh [from-tag] [to-ref]

set -euo pipefail

SINCE="${1:-$(git describe --tags --abbrev=0 2>/dev/null || echo "HEAD~20")}"
UNTIL="${2:-HEAD}"

echo "# Changelog"
echo ""
echo "## $(date +%Y-%m-%d)"
echo ""
echo "### Features"
git log "$SINCE..$UNTIL" --oneline --grep="feat" --format="  - %s (%h)" 2>/dev/null || echo "  (none)"
echo ""
echo "### Bug Fixes"
git log "$SINCE..$UNTIL" --oneline --grep="fix" --format="  - %s (%h)" 2>/dev/null || echo "  (none)"
echo ""
echo "### Improvements"
git log "$SINCE..$UNTIL" --oneline --grep="improve\|refactor\|chore\|perf" --format="  - %s (%h)" 2>/dev/null || echo "  (none)"
echo ""
echo "### Other Changes"
git log "$SINCE..$UNTIL" --oneline --grep -v "feat\|fix\|improve\|refactor\|chore\|perf\|docs" --format="  - %s (%h)" 2>/dev/null || true
echo ""
echo "---"
echo "Generated from: $SINCE → $UNTIL ($(git rev-list --count $SINCE..$UNTIL 2>/dev/null || echo '?') commits)"
