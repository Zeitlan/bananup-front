#!/bin/bash

# any future command that fails will exit the script
set -e

# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
# echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
echo "ALL_SERVERS ${ALL_SERVERS}"

# Lets iterate over this array and ssh into each EC2 instance
# Once inside the server, run updateAndRestart.sh
for server in "${ALL_SERVERS[@]}"
do
  echo "copying file to ${server}"
  scp -r $DOCKER_FILE \
	  Makefile \
	  $ENV_FILE \
	  root@${server}:/root/${PROJECT_DIR}

  echo "deploying to ${server}"
  ssh root@${server} env DEPLOY_USER=${DEPLOY_USER} \
                     env DEPLOY_TOKEN=${DEPLOY_TOKEN} \
                     env CI_REGISTRY=${CI_REGISTRY} \
                     env PROJECT_DIR=${PROJECT_DIR} \
                     env PROD=${PROD} \
                     'bash' < update-restart.sh
done