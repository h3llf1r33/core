#!/bin/bash

VERSION_TYPE=$1

if [ -z "$VERSION_TYPE" ]; then
    echo "Error: Version type is required"
    echo "Usage: ./release.sh <version-type>"
    echo "Available types: major, minor, patch, premajor, preminor, prepatch"
    exit 1
fi

# Get current version for comparison
CURRENT_VERSION=$(node -p "require('./package.json').version")

# Try to publish first to avoid unnecessary git operations
if ! npm publish --access public --force; then
    echo "Publishing failed. Aborting release process."
    exit 1
fi

# If publish succeeds, proceed with git operations
NEW_VERSION=$(npm --no-git-tag-version version $VERSION_TYPE)

git add .
git commit -m "Release $VERSION_TYPE version ${NEW_VERSION#v}"
git tag $NEW_VERSION
git push && git push --tags