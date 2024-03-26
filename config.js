module.exports = {
  extends: ['config:recommended'],
  packageRules: [
    {
      matchPackageNames: ['helm/ttc-standard-app'],
      matchDatasources: ['helm']
    }
  ],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['^apps/.*/.*/values\\.yaml$'],
      matchStrings: ['^helm:\\s*targetRevision:\\s*(?<currentValue>.*)$'],
      depNameTemplate: 'helm/ttc-standard-app',
      datasourceTemplate: 'helm',
      versioningTemplate: 'semver'
    }
  ],
  repositories: ['Harishkumar-Subramanian/tutorial']
};
