# Getting started

OpenAPI spec can help standardize apis so that the consumer can reduce the learning curve to understading your api. This is accomplished by learning one spec and knowning all swagger compliant apis, having a thriving community, and auto generating documentation.

In this repo I demonstate using a swagger configuration file in `./services/generator/api.yaml` to describe a REST api that can be generated with the following command

```
./ctl.sh up gen
```

This command will generate an API written in Nodejs in `./services/api/server`. Once the code has been generated you can interact with the service by running the following command:

```
./ctl.sh up api
```

To test the service is available try to retrive a `flag` that doesn't exist.

```
curl http://localhost:3000/flag/12
```

You should receieve `getFlagById ok!` as output because the business logic for our generated api has not been implemented.
