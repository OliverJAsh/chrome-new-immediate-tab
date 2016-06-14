#!/bin/bash

echo "Bump version in manifest"
read

rm -rf upload upload.zip
mkdir upload

cp \
    background.js manifest.json \
    upload

pushd upload
    zip -r upload.zip .
    mv upload.zip ..
popd

