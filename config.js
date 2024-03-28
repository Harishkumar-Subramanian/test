module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'helm/ttc-standard-app',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'helm',
      currentValueTemplate: '{{version}}'
    }
  ],
  packageRules: [
    {
        'matchDatasources': ['helm'],
        'packagePatterns': ['helm/ttc-standard-app'],
        'registryUrls': ['tcxcontainers.azurecr.io']
    }
  ],
  hostRules: [
    {
      hostType: 'helm',
      matchHost: 'tcxcontainers.azurecr.io',
      username: 'c5db4df2-bd84-4606-b590-e6873154cd17',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
