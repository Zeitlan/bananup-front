#!/bin/bash

# any future command that fails will exit the script
set -e

cd /root/${PROJECT_DIR}

echo ${DEPLOY_TOKEN} | docker login -u ${DEPLOY_USER} ${CI_REGISTRY} --password-stdin
if [ ${PROD} = 1 ]
then
    make prod
else
    make beta
fi

