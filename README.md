# WebServer + RestServer

## Production Server

https://node-restserver-production.up.railway.app/

## Reconstruir node_modules

```
npm install
```

## Start Server

```
npm start
```

## Backend endpoint

* http://localhost:8080/api/usuarios


## Production endpoint

* https://node-restserver-production.up.railway.app/api/usuarios 

Requests examples: 

Get request:

```
curl http://localhost:8080/api/usuarios 
```

Post request:

```sh
curl -X POST -H 'Content-Type: Application/json' -d '{"nombre": "Zack", "edad": "20" }' http://localhost:8080/api/usuarios
```

Put request:

```
curl -X PUT http://localhost:8080/api/usuarios/11
```
