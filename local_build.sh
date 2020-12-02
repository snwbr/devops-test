#/bin/bash

paths=("frontend" "backend")

for path in ${paths[@]}
do 
  cd $path
  docker build -t ct-$(basename $PWD):v1 .
  cd ..
done

docker-compose down
docker-compose up -d db
sleep 10
docker-compose up -d