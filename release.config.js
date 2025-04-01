module.exports = {
    branches: ['main'],
    repositoryUrl: 'https://github.com/Selenuix/SaveSurge',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', {'changelogFile': './CHANGELOG.md'}],
        '@semantic-release/npm',
        '@semantic-release/github',
    ],
    'dryRun': false
};
