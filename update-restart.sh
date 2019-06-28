#!/bin/bash

# any future command that fails will exit the script
set -e

cd /root/${PROJECT_DIR}

echo "Pulling git"
git pull origin deployment
git checkout ${CI_COMMIT_SHA}

make prod
