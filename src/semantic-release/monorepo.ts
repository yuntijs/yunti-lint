import type { Options } from 'semantic-release';

import { releaseRules } from './index';

export const semanticReleaseMonoRepo: Options = {
  $schema: 'https://json.schemastore.org/semantic-release',
  branches: [
    'master',
    'main',
    { name: 'rc-*', prerelease: 'rc', channel: 'rc' },
    { name: 'rc', prerelease: true },
    { name: 'alpha', prerelease: 'alpha', channel: 'alpha' },
    { name: 'beta', prerelease: 'beta', channel: 'beta' },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules,
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: `<a name="readme-top"></a>

# Changelog`,
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
