module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'helm',
      currentValueTemplate: '{{version}}'
    }
  ],
  registryAliases: {
    stable: 'https://tcxcontainers.azurecr.io/helm/ttc-standard-app'
  },
  hostRules: [
    {
      matchHost: 'https://tcxcontainers.azurecr.io/helm/ttc-standard-app',
      hostType: 'docker',
      username: 'tcxcontainers',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
