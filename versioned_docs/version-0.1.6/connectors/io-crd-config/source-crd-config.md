---
title: Source CRD configurations
category: connectors
id: source-crd-config
---
This document lists CRD configurations available for Pulsar source connectors. The source CRD configurations consist of source connector configurations and the common CRD configurations.

## Source configurations

This table lists source configurations.

| Field | Description |
| --- | --- |
| `name` | The name of a source connector. |
| `classname` | The class name of a source connector. |
| `tenant` | The tenant of a source connector. |
| `clusterName` | The Pulsar cluster of a source connector. |
| `replicas`| The number of instances that you want to run this source connector. |
| `maxReplicas`| The maximum number of Pulsar instances that you want to run for this source connector. When the value of the `maxReplicas` parameter is greater than the value of `replicas`, it indicates that the source controller automatically scales the source connector based on the CPU usage. By default, `maxReplicas` is set to 0, which indicates that auto-scaling is disabled. |
| `sourceConfig` | The map to a ConfigMap specifying the configuration of a source connector. |
| `processingGuarantee` | The processing guarantees (delivery semantics) applied to the source connector. Available values: `atleast_once`, `atmost_once`, `effectively_once`.|

## Images

This section describes image options available for Pulsar source CRDs.

### Base runner

The base runner is an image base for other runners. The base runner is located at `./pulsar-functions-base-runner`. The base runner image contains basic tool-chains like `/pulsar/bin`, `/pulsar/conf` and `/pulsar/lib` to ensure that the `pulsar-admin` CLI tool works properly to support [Apache Pulsar Packages](http://pulsar.apache.org/docs/en/next/admin-api-packages/).

### Runner images

Function Mesh uses runner images as images of Pulsar connectors. Each runner image only contains necessary tool-chains and libraries for specified runtime.

Pulsar connectors support using the Java runner images as their images. The Java runner is based on the base runner and contains the Java function instance to run Java functions or connectors. The `streamnative/pulsar-functions-java-runner` Java runner is stored at the [Docker Hub](https://hub.docker.com/r/streamnative/pulsar-functions-java-runner) and is automatically updated to align with Apache Pulsar release.

## Output

The output topics of a Pulsar Function. This table lists options available for the `Output`.

|Name | Description |
| --- | --- |
| `topics` | The output topic of a Pulsar Function (If none is specified, no output is written). | 
| `sinkSerdeClassName` | The map of output topics to SerDe class names (as a JSON string). |
| `sinkSchemaType` | The built-in schema type or custom schema class name to be used for messages sent by the function.|
| `producerConf` | The producer specifications. Available options: <br />- `maxPendingMessages`: the maximum number of pending messages. <br />- `maxPendingMessagesAcrossPartitions`: the maximum number of pending messages across partitions. <br />- `useThreadLocalProducers`: configure whether the producer uses a thread. <br />- `cryptoConfig`: cryptography configurations of the producer. <br />- `batchBuilder`: support key-based batcher. 
| `customSchemaSinks` | The map of output topics to Schema class names (as a JSON string). |

## Resources

When you specify a function or connector, you can optionally specify how much of each resource they need. The resources available to specify are CPU and memory (RAM).

If the node where a Pod is running has enough of a resource available, it's possible (and allowed) for a Pod to use more resources than its `request` for that resource. However, a Pod is not allowed to use more than its resource `limit`.

## Authentication

Function Mesh provides the `tlsSecret` and `authSecret` fields for Function, Source and Sink in the CRD definition. You can configure TLS encryption and/or TLS authentication using the following configurations.

- TLS Secret

    | Field | Description |
    | --- | --- |
    | `tlsAllowInsecureConnection` | Allow insecure TLS connection. |
    | `tlsHostnameVerificationEnable` | Enable hostname verification. |
    | `tlsTrustCertsFilePath` | The path of the TLS trust certificate file. |

- Authentication Secret

    | Field | Description |
    | --- | --- |
    | `clientAuthenticationPlugin` | The client authentication plugin. |
    | `clientAuthenticationParameters` | The client authentication parameters. |

## Packages

Function Mesh supports running Pulsar connectors in Java.

| Field | Description |
| --- | --- |
| `jarLocation` | Path to the JAR file for the connector. |
| `extraDependenciesDir` | It specifies the dependent directory for the JAR package. |

## Cluster location

In Function Mesh, the Pulsar cluster is defined through a ConfigMap. Pods can consume ConfigMaps as environment variables in a volume. The Pulsar cluster ConfigMap defines the Pulsar cluster URLs.

| Field | Description |
| --- | --- |
| `webServiceURL` | The Web service URL of the Pulsar cluster. |
| `brokerServiceURL` | The broker service URL of the Pulsar cluster. |

## Pod specifications

Function Mesh supports customizing the Pod running connectors. This table lists sub-fields available for the `pod` field.

| Field | Description |
| --- | --- |
| `labels` | Specify labels attached to a Pod. |
| `nodeSelector` | Specify a map of key-value pairs. For a Pod running on a node, the node must have each of the indicated key-value pairs as labels. |
| `affinity` | Specify the scheduling constraints of a Pod. |
| `tolerations` | Specify the tolerations of a Pod. |
| `annotations`| Specify the annotations attached to a Pod. |
| `securityContext` | Specify the security context for a Pod. |
| `terminationGracePeriodSeconds` | It is the amount of time that Kubernetes gives for a Pod before terminating it. |
| `volumes` | It is a list of volumes that can be mounted by containers belonging to a Pod. |
| `imagePullSecrets` | It is an optional list of references to secrets in the same namespace for pulling any of the images used by a Pod. |
| `serviceAccountName` | Specify the name of the service account which is used to run Pulsar Functions or connectors in the Function Mesh Worker service.|
| `initContainers` | Initialization containers belonging to a Pod. A typical use case could be using an Initialization container to download a remote JAR to a local path. |
| `sidecars` | Sidecar containers run together with the main function container in a Pod. |
