---
title: Release notes v0.9.0
category: releases
id: release-note-0-9-0
---

Here are some highlights of this release. For a full list of updates available for Release v0.9.0, check out the [Function Mesh change log](https://github.com/streamnative/function-mesh/releases/tag/v0.9.0).

## Support health checks

Kubernetes provides several [probes](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#types-of-probe) to monitor and act on the state of Pods (Containers) and to ensure that only healthy Pods serve traffic. With these probes, you can control when a Pod should be started, ready for service, or live to serve traffic. Implementing health checks using probes provides Function Mesh a solid foundation, better reliability, and higher uptime.

For details about how to configure health checks, see [health checks](/functions/function-crd.md#health-checks).

## Support passing the `imageTag` through the custom runtime option

Function Mesh uses [runner images](/functions/function-crd.md#runner-images) as images of Pulsar functions, sources, and sinks. In this release, Function Mesh worker service supports passing the runner image tag configuration through the custom `runnerImageTag` runtime option. Therefore, the Function Mesh Controller can get the runner image tag and replace it based on configurations.

## Support validating Pulsar configurations using Webhook

The `spec.pulsar` and `spec.pulsar.pulsarConfig` options are mandatory for creating and updating a Pulsar function, source, and sink. In practice, it is impossible to set default values for them. Therefore, in this release, a validating webhook is introduced to validate Pulsar configurations. For details, see [messaging](/functions/function-crd.md#messaging).
