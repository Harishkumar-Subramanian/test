module.exports = {
  repositories: ['Harishkumar-Subramanian/test'],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['values.yaml'],
      matchStrings: ['(?<currentValue>helm:\\s*targetRevision:\\s*)(?<version>\\S+)'],
      depNameTemplate: 'helm/ttc-standard-app',
      registryUrlTemplate: 'https://trimbletransportationcloud.azurecr.io',
      versioningTemplate: 'semver-coerced',
      datasourceTemplate: 'docker',
      currentValueTemplate: '{{version}}'
    }
  ],
  packageRules: [
    {
      matchDatasources: ['docker'],
      matchPackageNames: ['helm/ttc-standard-app'],
      versioning: 'semver-coerced'
    }
  ],
  hostRules: [
    {
      matchHost: 'https://trimbletransportationcloud.azurecr.io',
      username: process.env.RENOVATE_AZURE_REGISTRY_USERNAME,
      password: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD
    }
  ]
};
