#!/bin/bash

echo 
echo "BIP PRODUCTION"
echo

usr=$1
psd=$2

if [[ -z $usr ]]; then
    echo
    echo "user tidak boleh kosong. Mohon isi user Anda."
    echo "bash -s <user> <password>"
    echo
    exit
fi

if [[ -z $psd ]]; then
    echo
    echo "password tidak boleh kosong. Mohon isi password Anda."
    echo "bash -s <user> <password>"
    echo
    exit
fi

# Nama image PostgreSQL yang akan digunakan
image_name="postgres"
# Versi image PostgreSQL yang akan digunakan
image_version="latest"

# Cek apakah image PostgreSQL sudah ada
if [[ "$(docker images -q $image_name:$image_version 2> /dev/null)" == "" ]]; then
    echo "Image PostgreSQL belum ada. Melakukan pull image PostgreSQL $image_version..."
    docker pull $image_name:$image_version
else
    echo "Image PostgreSQL sudah ada , NEXT "
    echo
fi

echo "------------------------------"
container_name="bip-db"
if docker ps -a --format '{{.Names}}' | grep -q "^bip-db$"; then
    echo "Container $container_name is already running."
    echo
    docker ps
    echo
    exit
else
    docker run -d \
    --name bip-db \
    -p 5433:5432 \
    -e "POSTGRES_PASSWORD=$psd" \
    -e "POSTGRES_USER=$usr" \
    -e "POSTGRES_DB=test" \
    $image_name:$image_version
    echo "SUCCESS!"
    echo
    docker ps
    echo
fi
echo "------------------------------"

echo
echo "-----------------------------"
echo "silahkan setting pada prisma "
echo "DATABASE_URL=\"postgresql://${usr}:${psd}@localhost:5433/percobaan?schema=public\""
echo "-----------------------------"
echo