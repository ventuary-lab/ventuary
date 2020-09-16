#!/bin/bash

set -e

git clean -fd
git reset --hard

branch=$(git branch | grep '*' | awk '{ print $2 }')

git pull origin "$branch"

npm i
npm run build
npm run export

