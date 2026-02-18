build-server name:
    docker build -f deps/db-sync/Dockerfile -t {{ name }} .
    docker push {{ name }}

build-client url="localhost" port="8787":
    yarn install
    ENABLE_DB_SYNC_LOCAL=true DB_SYNC_LOCAL_URL={{ url }} DB_SYNC_LOCAL_PORT={{ port }} yarn release-electron
