#!/bin/sh -e

HASURA_BASE_URI=`cat .env | grep HASURA_BASE_URI  | grep -v "#"  |  awk -F = 'NR==1{print $2}'`
echo $HASURA_BASE_URI
HASURA_GRAPHQL_ADMIN_SECRET=`cat .env | grep HASURA_GRAPHQL_ADMIN_SECRET  | grep -v "#" | awk -F = 'NR==1{print $2}'`
echo $HASURA_GRAPHQL_ADMIN_SECRET
hasura migrate create tmp_migration --from-server --endpoint "$HASURA_BASE_URI" --admin-secret "$HASURA_GRAPHQL_ADMIN_SECRET"
hasura metadata export --endpoint "$HASURA_BASE_URI" --admin-secret "$HASURA_GRAPHQL_ADMIN_SECRET"
