#! /usr/bin/bash

ROOT=`pwd`

source .env

yarn

yarn publish:prepare

cp package.json build
cp .npmrc build

cd $ROOT/build

yarn link