#!/bin/sh
if [ ! -z ${API_URL} ]; then
 echo "window.RUNTIME_API_URL='${API_URL}';"
fi