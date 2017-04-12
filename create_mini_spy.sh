#!/bin/bash

if [[ $NODE_ENV -eq "development" ]];
then
    echo "Here!";
    createdb community-dev -O postgres -U postgres -e;
elif [[ $NODE_ENV -eq "test" ]];
    then
        createdb community-test -O postgres -U postgres -e;
fi;