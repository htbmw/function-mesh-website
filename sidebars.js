module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/overview', 'overview/why-function-mesh'],
    },
    'install-function-mesh',
    {
      type: 'category',
      label: 'Functions',
      items: [
        'functions/function-overview',
        'functions/function-crd',
        {
          type: 'category',
          label: 'Package Pulsar Functions',
          items: [
            'functions/package-function/package-function-overview',
            'functions/package-function/package-function-java',
            'functions/package-function/package-function-python',
            'functions/package-function/package-function-go'
          ],
        },
        {
          type: 'category',
          label: 'Run Pulsar Functions',
          items: [
            'functions/run-function/run-java-function',
            'functions/run-function/run-python-function',
            'functions/run-function/run-go-function',
            'functions/run-function/run-stateful-function',
            'functions/run-function/run-window-function'
          ],
        },
        'functions/function-monitor', 
        'functions/produce-function-log',
        'functions/function-debug'
      ],
    },
    {
      type: 'category',
      label: 'Connectors',
      items: [
        'connectors/pulsar-io-overview',
        {
          type: 'category',
          label: 'Pulsar connector CRD configurations',
          items: [
            'connectors/io-crd-config/source-crd-config', 
            'connectors/io-crd-config/sink-crd-config'
          ],
        },
        'connectors/run-connector',
        'connectors/pulsar-io-monitoring',
        'connectors/pulsar-io-debug',
      ]
    },
    {
      type: 'category',
      label: 'Meshes',
      items: ['function-mesh/function-mesh-overview', 'function-mesh/function-mesh-crd', 'function-mesh/run-function-mesh'],
    },
    {
      type: 'category',
      label: 'Function Mesh Worker',
      items: [
        'function-mesh-worker/function-mesh-worker-overview',
        'function-mesh-worker/deploy-mesh-worker',
        'function-mesh-worker/manage-builtin-connectors',
        {
          type: 'category',
          label: 'Reference',
          items: [
            'function-mesh-worker/reference/general-option',
            'function-mesh-worker/reference/customizable-option',
            'function-mesh-worker/reference/rest-api'
          ],
        },
      ],
    },
    'scaling',
    {
      type: 'category',
      label: 'Migration',
      items: ['migration/migrate-function'],
    },
    {
      type: 'category',
      label: 'Releases',
      items: ['releases/release-note-0-1-4', 'releases/release-note-0-1-5', 'releases/release-note-0-1-6', 'releases/release-note-0-1-7', 'releases/release-note-0-1-8', 'releases/release-note-0-1-9', 'releases/release-note-0-2-0', 'releases/release-note-0-3-0', 'releases/release-note-0-4-0', 'releases/release-note-0-5-0', 'releases/release-note-0-6-0', 'releases/release-note-0-7-0', 'releases/release-note-0-8-0'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/function-mesh-config'],
    }
  ],
}
