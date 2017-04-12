#!/bin/bash

if [ "$NODE_ENV" = "development" ];
then
    echo "Creating Development Database";
    createdb community-dev -O postgres -U postgres -e;
elif [ "$NODE_ENV" = "test" ];
    then
        echo "Creating Test Database";
        createdb community-test -O postgres -U postgres -e;
fi;