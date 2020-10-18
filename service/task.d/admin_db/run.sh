#!/usr/bin/env bash

cd `dirname $0`
export CURR_DIR=`pwd`
export BASE_DIR=${CURR_DIR}/../..

source ${BASE_DIR}/common.d/func.sh


echo ${NODE} ${BASE_DIR}/admin_db.js --mysql_admin_file ${BASE_DIR}/../../conf.d/mysql_admin.json
${NODE} ${BASE_DIR}/admin_db.js --mysql_admin_file ${BASE_DIR}/../../conf.d/mysql_admin.json
