module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'tcxcontainers.azurecr.io',
      registryUrlTemplate: 'https://tcxcontainers.azurecr.io',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'helm',
      currentValueTemplate: '{{version}}'
    }
  ],
  packageRules: [
    {
        'matchDatasources': ['helm'],
        'packagePatterns': ['^@helm/ttc-standard-app'],
        'registryUrls': ['https://trimbletransportationcloud.azurecr.io']
    }
  ],
  hostRules: [
    {
      matchHost: 'https://tcxcontainers.azurecr.io',
      username: 'tcxcontainers',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
