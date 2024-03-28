module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'tcxcontainers.azurecr.io',
      registryUrlTemplate: 'oci://tcxcontainers.azurecr.io',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'helm',
      currentValueTemplate: '{{version}}'
    }
  ],
  packageRules: [
    {
        'matchDatasources': ['helm'],
        'packagePatterns': ['^@helm/ttc-standard-app'],
        'registryUrls': ['oci://trimbletransportationcloud.azurecr.io']
    }
  ],
  hostRules: [
    {
      matchHost: 'oci://tcxcontainers.azurecr.io',
      username: 'tcxcontainers',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
