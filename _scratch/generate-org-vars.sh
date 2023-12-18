#!/bin/bash

## Generate org vars

org_name="$1"

if [ -z "$org_name" ]; then
  echo "Usage: $0 <org_name>"
  exit 1
fi

cat $org_name.json | jq -c | jq -R > $org_name.txt
