import type { Options as SemRelOptions } from 'semantic-release';
import { type Options, createConfig } from 'semantic-release-config-gitmoji/lib/createConfig';

export const options: Options = {
  changelogTitle: `<a name="readme-top"></a>

# Changelog`,
  message: 'chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
  releaseRules: [
    {
      release: 'minor',
      type: 'feat',
    },
    {
      release: 'patch',
      type: 'fix',
    },
    {
      release: 'patch',
      type: 'perf',
    },
    {
      release: 'patch',
      type: 'style',
    },
    {
      release: 'patch',
      type: 'refactor',
    },
    {
      release: 'patch',
      type: 'build',
    },
    { release: 'patch', scope: 'README', type: 'docs' },
    { release: 'patch', scope: 'README.md', type: 'docs' },
    { release: false, type: 'docs' },
    {
      release: false,
      type: 'test',
    },
    {
      release: false,
      type: 'ci',
    },
    {
      release: false,
      type: 'chore',
    },
    {
      release: false,
      type: 'wip',
    },
    {
      release: 'major',
      type: 'BREAKING CHANGE',
    },
    {
      release: 'major',
      scope: 'BREAKING CHANGE',
    },
    {
      release: 'major',
      subject: '*BREAKING CHANGE*',
    },
    { release: 'patch', subject: '*force release*' },
    { release: 'patch', subject: '*force patch*' },
    { release: 'minor', subject: '*force minor*' },
    { release: 'major', subject: '*force major*' },
    { release: false, subject: '*skip release*' },
  ],
} as Options;

export const overwriteSemRelPlugins = (fullOptions: SemRelOptions) => {
  if (fullOptions.plugins) {
    for (const plugin of fullOptions.plugins) {
      if (plugin[0] === '@semantic-release/commit-analyzer') {
        plugin[1].config = 'conventional-changelog-angular';
      }
      if (plugin[0] === '@semantic-release/release-notes-generator') {
        plugin[1].parserOpts = {
          headerPattern:
            /^(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?!\s).)(?:\s\(?(?<ticket>#\d*)\)?)?$/,
        };
      }
    }
  }
  return fullOptions;
};

export const semanticRelease = {
  $schema: 'https://json.schemastore.org/semantic-release',
  ...overwriteSemRelPlugins(createConfig(options)),
};
