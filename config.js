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
      packagePatterns: ['helm:'],
      datasource: 'helm',
      registryUrls: ['https://tcxcontainers.azurecr.io'],
      versioning: 'semver-coerced',
      authentication: {
        type: 'servicePrincipal',
        clientId: 'c5db4df2-bd84-4606-b590-e6873154cd17',
        clientSecret: process.env.RENOVATE_AZURE_REGISTRY_PASSWORD,
        tenantId: '23235593-4c46-41c1-944b-32a03aab96e6'
      }
    }
  ]
};
