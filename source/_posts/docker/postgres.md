
## postgres
```
sudo docker pull postgres
sudo docker run --name postgres-{ContainerName} -e POSTGRES_PASSWORD=${PGPassword} -e POSTGRES_USER={Username} -p 5432:5432 -d postgres


```

```
# login
psql -U {Username} -h 127.0.0.1 -p 5432 

# db interface
postgres=#

# change db
postgres=# \c DB_NAME

```

## useful command
sudo docker run --name postgres-tim -e POSTGRES_USER=timqian -p 5432:5432 -d postgres
psql -f ./tools/initDB.sql
select * from model_prop_log;

psql -U timqian -h 127.0.0.1 -p 5432 [-f initDB]
