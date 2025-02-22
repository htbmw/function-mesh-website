---
title: Manage built-in connectors
category: function-mesh-worker
id: manage-builtin-connectors
---

This document describes how to manage built-in Connectors with Function Mesh Worker service. 

## Built-in connectors in Apache Pulsar

Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar. These connectors import/export data into/from some of the most commonly used data systems.

Using any of these connectors is as easy as writing a simple connector and running the connector locally or submitting the connector to a Pulsar Functions cluster.

Pulsar Functions Worker provides `sinks` and `sources` APIs to let you manage Pulsar IO connectors. It provides a feature about Pulsar built-in connectors, which allows you to use a connector type directly without providing the connectors' NAR package file. Pulsar Functions Worker loads the packages from `connectorsDirectory` ( by default, it is set to `./connectors`) and uses the connectors as a built-in connector list.

## Customize built-in connectors in Function Mesh Worker Service

Function Mesh Worker service requires a customized YAML file that contains the metadata of each built-in connector. The YAML file is placed in `conf/connectors.yaml`. This table outlines the configurable fields of built-in connectors.

| Field | Description |
| ---|---|
| `id` | The ID of the connector. |
| `name` | The name of the connector type. |
| `description` | The description that is used for user help. |
| `sourceClass` | The class name for the connector source implementation. If not defined, it assumes that the connector cannot act as a data source. |
| `sinkClass` | The class name for the connector sink implementation. If not defined, it assumes that the connector cannot act as a data sink. |
| `sourceConfigClass` | The class name for the source configuration implementation. If not defined, the framework cannot do any submission time checks. |
| `sinkConfigClass` | The class name for the sink configuration implementation. If not defined, the framework cannot do any submission time checks. |
| `version` | The version of the connector. |
| `imageRegistry` | The image registry that hosts the connector image. By default, the image registry is empty, which means that it uses the Docker Hub (`docker.io/`) to host the connector image. |
| `imageRepository` | The image repository to the connector. Usually, it is in a format of NAMESPACE/REPOSITORY. |
| `imageTag` | The tag to the connector image. By default, it aligns with Pulsar's version. |
| `typeClassName` | The type class name of the connector or function. By default, it is set to `'[B'`.|
| `sourceTypeClassName` | The type class name of the source connector. If not set, it will inherit the value from the `typeClassName` field. |
| `sinkTypeClassName` |  The type class name of the sink connector. If not set, it will inherit the value from the `typeClassName` field. |
| `jarFullName` | Optional. The JAR or NAR package name of the connector. If not set, it is generated based on the connector ID and connector version.| 
| `defaultSchemaType` |  Optional. The default schema type of the connector's topic. |
| `defaultSerdeClassName` | Optional. The default serde class name of the connector's topic. |

## Sample YAML file

This sample YAML file lists configurations of all Apache Pulsar distributed built-in connectors.

```yaml
- id: pulsar-io-aerospike
  name: aerospike
  description: Aerospike database sink
  sinkClass: org.apache.pulsar.io.aerospike.AerospikeStringSink
  sinkConfigClass: org.apache.pulsar.io.aerospike.AerospikeSinkConfig
  imageRepository: streamnative/pulsar-io-aerospike
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-canal
  name: canal
  description: canal source and read data from mysql
  sourceClass: org.apache.pulsar.io.canal.CanalStringSource
  sourceConfigClass: org.apache.pulsar.io.canal.CanalSourceConfig
  imageRepository: streamnative/pulsar-io-canal
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-cassandra
  name: cassandra
  description: Writes data into Cassandra
  sinkClass: org.apache.pulsar.io.cassandra.CassandraStringSink
  sinkConfigClass: org.apache.pulsar.io.cassandra.CassandraSinkConfig
  imageRepository: streamnative/pulsar-io-cassandra
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-data-generator
  name: data-generator
  description: Test data generator source
  sourceClass: org.apache.pulsar.io.datagenerator.DataGeneratorSource
  sourceConfigClass: org.apache.pulsar.io.datagenerator.DataGeneratorSourceConfig
  sinkClass: org.apache.pulsar.io.datagenerator.DataGeneratorPrintSink
  imageRepository: streamnative/pulsar-io-data-generator
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-debezium-mongodb
  name: debezium-mongodb
  description: Debezium MongoDb Source
  sourceClass: org.apache.pulsar.io.debezium.mongodb.DebeziumMongoDbSource
  imageRepository: streamnative/pulsar-io-debezium-mongodb
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-debezium-mysql
  name: debezium-mysql
  description: Debezium MySql Source
  sourceClass: org.apache.pulsar.io.debezium.mysql.DebeziumMysqlSource
  imageRepository: streamnative/pulsar-io-debezium-mysql
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-debezium-postgres
  name: debezium-postgres
  description: Debezium Postgres Source
  sourceClass: org.apache.pulsar.io.debezium.postgres.DebeziumPostgresSource
  imageRepository: streamnative/pulsar-io-debezium-postgres
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-dynamodb
  name: dynamodb
  description: DynamoDB connectors
  sourceClass: org.apache.pulsar.io.dynamodb.DynamoDBSource
  imageRepository: streamnative/pulsar-io-dynamodb
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-elastic-search
  name: elastic_search
  description: Writes data into Elastic Search
  sinkClass: org.apache.pulsar.io.elasticsearch.ElasticSearchSink
  sinkConfigClass: org.apache.pulsar.io.elasticsearch.ElasticSearchConfig
  imageRepository: streamnative/pulsar-io-elastic-search
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-file
  name: file
  description: Reads data from local filesystem
  sourceClass: org.apache.pulsar.io.file.FileSource
  sourceConfigClass: org.apache.pulsar.io.file.FileSourceConfig
  imageRepository: streamnative/pulsar-io-file
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-flume
  name: flume
  description: flume source and sink connector
  sourceClass: org.apache.pulsar.io.flume.source.StringSource
  sinkClass: org.apache.pulsar.io.flume.sink.StringSink
  sinkConfigClass: org.apache.pulsar.io.flume.FlumeConfig
  imageRepository: streamnative/pulsar-io-flume
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-hbase
  name: hbase
  description: Writes data into hbase table
  sinkClass: org.apache.pulsar.io.hbase.sink.HbaseGenericRecordSink
  sinkConfigClass: org.apache.pulsar.io.hbase.sink.HbaseSinkConfig
  imageRepository: streamnative/pulsar-io-hbase
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-hdfs2
  name: hdfs2
  description: Writes data into HDFS 2.x
  sinkClass: org.apache.pulsar.io.hdfs2.sink.text.HdfsStringSink
  sinkConfigClass: org.apache.pulsar.io.hdfs2.sink.HdfsSinkConfig
  imageRepository: streamnative/pulsar-io-hdfs2
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-hdfs3
  name: hdfs3
  description: Writes data into HDFS 3.x
  sinkClass: org.apache.pulsar.io.hdfs3.sink.text.HdfsStringSink
  sinkConfigClass: org.apache.pulsar.io.hdfs3.sink.HdfsSinkConfig
  imageRepository: streamnative/pulsar-io-hdfs3
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-influxdb
  name: influxdb
  description: Writes data into InfluxDB database
  sinkClass: org.apache.pulsar.io.influxdb.InfluxDBGenericRecordSink
  sinkConfigClass: org.apache.pulsar.io.influxdb.v2.InfluxDBSinkConfig
  imageRepository: streamnative/pulsar-io-influxdb
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-jdbc-clickhouse
  name: jdbc-clickhouse
  description: JDBC sink for ClickHouse
  sinkClass: org.apache.pulsar.io.jdbc.ClickHouseJdbcAutoSchemaSink
  imageRepository: streamnative/pulsar-io-jdbc-clickhouse
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-jdbc-mariadb
  name: jdbc-mariadb
  description: JDBC sink for MariaDB
  sinkClass: org.apache.pulsar.io.jdbc.MariadbJdbcAutoSchemaSink
  imageRepository: streamnative/pulsar-io-jdbc-mariadb
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-jdbc-postgres
  name: jdbc-postgres
  description: JDBC sink for PostgreSQL
  sinkClass: org.apache.pulsar.io.jdbc.PostgresJdbcAutoSchemaSink
  imageRepository: streamnative/pulsar-io-jdbc-postgres
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-jdbc-sqlite
  name: jdbc-sqlite
  description: JDBC sink for SQLite
  sinkClass: org.apache.pulsar.io.jdbc.SqliteJdbcAutoSchemaSink
  sinkConfigClass: org.apache.pulsar.io.jdbc.JdbcSinkConfig
  imageRepository: streamnative/pulsar-io-jdbc-sqlite
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-kafka
  name: kafka
  description: Kafka source and sink connector
  sourceClass: org.apache.pulsar.io.kafka.KafkaBytesSource
  sinkClass: org.apache.pulsar.io.kafka.KafkaBytesSink
  sourceConfigClass: org.apache.pulsar.io.kafka.KafkaSourceConfig
  sinkConfigClass: org.apache.pulsar.io.kafka.KafkaSinkConfig
  imageRepository: streamnative/pulsar-io-kafka
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-kafka-connect-adaptor
  name: kafka-connect-adaptor
  description: Kafka source connect adaptor
  sourceClass: org.apache.pulsar.io.kafka.connect.KafkaConnectSource
  imageRepository: streamnative/pulsar-io-kafka-connect-adaptor
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-kinesis
  name: kinesis
  description: Kinesis connectors
  sinkClass: org.apache.pulsar.io.kinesis.KinesisSink
  sourceClass: org.apache.pulsar.io.kinesis.KinesisSource
  sourceConfigClass: org.apache.pulsar.io.kinesis.KinesisSourceConfig
  sinkConfigClass: org.apache.pulsar.io.kinesis.KinesisSinkConfig
  imageRepository: streamnative/pulsar-io-kinesis
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-mongo
  name: mongo
  description: MongoDB source and sink connector
  sinkClass: org.apache.pulsar.io.mongodb.MongoSink
  sourceClass: org.apache.pulsar.io.mongodb.MongoSource
  sourceConfigClass: org.apache.pulsar.io.mongodb.MongoConfig
  sinkConfigClass: org.apache.pulsar.io.mongodb.MongoConfig
  imageRepository: streamnative/pulsar-io-mongo
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-netty
  name: netty
  description: Netty Tcp or Udp Source Connector
  sourceClass: org.apache.pulsar.io.netty.NettySource
  sourceConfigClass: org.apache.pulsar.io.netty.NettySourceConfig
  imageRepository: streamnative/pulsar-io-netty
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-nsq
  name: nsq
  description: Ingest data from an NSQ topic
  sourceClass: org.apache.pulsar.io.nsq.NSQSource
  sourceConfigClass: org.apache.pulsar.io.nsq.NSQSourceConfig
  imageRepository: streamnative/pulsar-io-nsq
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-rabbitmq
  name: rabbitmq
  description: RabbitMQ source and sink connector
  sourceClass: org.apache.pulsar.io.rabbitmq.RabbitMQSource
  sinkClass: org.apache.pulsar.io.rabbitmq.RabbitMQSink
  sourceConfigClass: org.apache.pulsar.io.rabbitmq.RabbitMQSourceConfig
  sinkConfigClass: org.apache.pulsar.io.rabbitmq.RabbitMQSinkConfig
  imageRepository: streamnative/pulsar-io-rabbitmq
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-redis
  name: redis
  description: Writes data into Redis
  sinkClass: org.apache.pulsar.io.redis.sink.RedisSink
  sinkConfigClass: org.apache.pulsar.io.redis.sink.RedisSinkConfig
  imageRepository: streamnative/pulsar-io-redis
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-solr
  name: solr
  description: Writes data into solr collection
  sinkClass: org.apache.pulsar.io.solr.SolrGenericRecordSink
  sinkConfigClass: org.apache.pulsar.io.solr.SolrSinkConfig
  imageRepository: streamnative/pulsar-io-solr
  version: 2.7.1
  imageTag: 2.7.1
- id: pulsar-io-twitter
  name: twitter
  description: Ingest data from Twitter firehose
  sourceClass: org.apache.pulsar.io.twitter.TwitterFireHose
  sourceConfigClass: org.apache.pulsar.io.twitter.TwitterFireHoseConfig
  imageRepository: streamnative/pulsar-io-twitter
  version: 2.7.1
  imageTag: 2.7.1
```