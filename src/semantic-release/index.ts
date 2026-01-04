import type { Options } from 'semantic-release';

export const releaseRules = [
  { release: 'minor', type: 'feat' },
  { release: 'patch', type: 'fix' },
  { release: 'patch', type: 'perf' },
  { release: 'patch', type: 'style' },
  { release: 'patch', type: 'refactor' },
  { release: 'patch', type: 'build' },
  { release: 'patch', scope: 'README', type: 'docs' },
  { release: 'patch', scope: 'README.md', type: 'docs' },
  { release: false, type: 'docs' },
  { release: false, type: 'test' },
  { release: false, type: 'ci' },
  { release: false, type: 'chore' },
  { release: false, type: 'wip' },
  { release: 'major', type: 'BREAKING CHANGE' },
  { release: 'major', scope: 'BREAKING CHANGE' },
  { release: 'major', subject: '*BREAKING CHANGE*' },
  { release: 'patch', subject: '*force release*' },
  { release: 'patch', subject: '*force patch*' },
  { release: 'minor', subject: '*force minor*' },
  { release: 'major', subject: '*force major*' },
  { release: false, subject: '*skip release*' },
];

export const semanticRelease: Options = {
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
