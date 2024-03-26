module.exports = {
  extends: ['config:recommended'],
  packageRules: [
    {
      matchPackageNames: ['helm/ttc-standard-app'],
      matchDatasources: ['docker']
    }
  ],
  customManagers: [
    {
      customType: 'regex',
      fileMatch: ['^apps/.*/.*/values\\.yaml$'],
      matchStrings: ['^helm:\\s*targetRevision:\\s*(?<currentValue>.*)$'],
      depNameTemplate: 'helm/ttc-standard-app',
      datasourceTemplate: 'docker',
      versioningTemplate: 'semver'
    }
  ],
  repositories: ['Harishkumar-Subramanian/test']
};
