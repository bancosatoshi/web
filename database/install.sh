#! /usr/bin/bash

ROOT=`pwd`

source .env

yarn

yarn publish:prepare

cp package.json build

cd $ROOT/build

yarn link