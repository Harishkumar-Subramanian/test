module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'helm/ttc-standard-app',
      registryUrlTemplate: 'https://tcxcontainers.azurecr.io/helm/v1/repo',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'helm',
      currentValueTemplate: '{{version}}'
    }
  ],
  packageRules: [
    {
        'matchDatasources': ['helm'],
        'packagePatterns': ['^@helm/ttc-standard-app'],
        'registryUrls': ['https://trimbletransportationcloud.azurecr.io/helm/v1/repo']
    }
  ],
  hostRules: [
    {
      matchHost: 'https://tcxcontainers.azurecr.io/helm/v1/repo',
      username: 'tcxcontainers',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
