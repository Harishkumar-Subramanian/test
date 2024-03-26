module.exports = {
  extends: ['config:recommended'],
  repositories: ['Harishkumar-Subramanian/test'],
  hostRules: [
    {
      hostType: 'docker',
      matchHost: 'trimbletransportationcloud.azurecr.io',
      username: 'global-pull-token',
      password: process.env.OCI_REGISTRY_PASSWORD
    }
  ]
};
