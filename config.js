module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'helm/ttc-standard-app',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'custom.helm',
      currentValueTemplate: '{{version}}'
    }
  ],
   packageRules: [
  {
        'matchDatasources': ['helm'],
        'packagePatterns': ['helm/ttc-standard-app'],
        'registryUrls': ['trimbletransportationcloud.azurecr.io']
  },
  hostRules: [
    {
      hostType: 'helm',
      matchHost: 'trimbletransportationcloud.azurecr.io',
      username: 'global-pull-token',
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
