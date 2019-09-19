#/bin/bash
./env2js.sh > config.js
serve -p 80 -c serve.json -s .
