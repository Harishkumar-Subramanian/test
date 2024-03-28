module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'helm/ttc-standard-app',
      registryUrlTemplate: 'https://tcxcontainers.azurecr.io/helm/v1/repo/helm/ttc-standard-app',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'helm',
      currentValueTemplate: '{{version}}'
    }
  ],
  hostRules: [
    {
      matchHost: 'https://tcxcontainers.azurecr.io/helm/v1/repo/helm/ttc-standard-app',
      username: 'tcxcontainers',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
