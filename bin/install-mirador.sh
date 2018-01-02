#!/bin/sh
# Convenience wrapper for rake task mirador:install

SRC_DIR=$1
echo "SRC_DIR=${SRC_DIR}"
if [ "$SRC_DIR" = "" ]; then
  echo "Usage: $0 <src_dir>"
  echo "    where <src_dir> is the root directory of the mirador build"
else
  rake mirador:install[${SRC_DIR}]
fi

