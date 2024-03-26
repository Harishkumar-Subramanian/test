module.exports = {
    hostRules: [
      {
        hostType: 'docker',
        matchHost: 'https://trimbletransportationcloud.azurecr.io',
        username: process.env.OCI_REGISTRY_USERNAME,
        password: process.env.OCI_REGISTRY_PASSWORD,
      },
    ],
    packageRules: [
      {
        matchDatasources: ['helm'],
        registryUrls: ['oci://trimbletransportationcloud.azurecr.io'],
        enabled: true
      }
    ],
     customManagers: [
       {
         customType: 'regex',
         fileMatch: ['^apps/.*/.*/values\\.yaml$'],
         matchStrings: ['^helm:\\n\\s*targetRevision: (?<currentValue>.*)$'],
         datasourceTemplate: 'helm',
        }
    ],
    repositories: ['Harishkumar-Subramanian/test'],
  };