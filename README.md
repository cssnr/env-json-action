[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/env-json-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/env-json-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/env-json-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/env-json-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/env-json-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/env-json-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/env-json-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/cssnr/env-json-action/blob/master/src/index.js)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/env-json-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/test.yaml?logo=cachet&label=test)](https://github.com/cssnr/env-json-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/env-json-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_env-json-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_env-json-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/env-json-action?logo=github&label=updated)](https://github.com/cssnr/env-json-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/env-json-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/env-json-action)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/env-json-action?logo=github)](https://github.com/cssnr/env-json-action/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/env-json-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/env-json-action?logo=htmx)](https://github.com/cssnr/env-json-action)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/env-json-action?logo=github)](https://github.com/cssnr/env-json-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/env-json-action?style=flat&logo=github)](https://github.com/cssnr/env-json-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/env-json-action?style=flat&logo=github)](https://github.com/cssnr/env-json-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Environment to or from JSON Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

Convert an Environment File to or from JSON for Outputs or Writing to a File.

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/env-json-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/env-json-action/issues) if you find any bugs.

## Inputs

| Input                       |  Default   | Description&nbsp;of&nbsp;Input     |
| :-------------------------- | :--------: | :--------------------------------- |
| [source-data](#source-data) | _Required_ | Source Data or File Path           |
| [source-type](#source-type) |   `json`   | Source Type: [`json`, `env`]       |
| [output-type](#output-type) | _Opposite_ | Output Type: [`json`, `env`]       |
| [output-file](#output-file) |     -      | Optional File to Write Output Data |
| [sensitive](#sensitive)     |  `false`   | Mark Output Data as Sensitive      |
| [summary](#summary)         |   `true`   | Add Summary to Job                 |

#### source-data

Source Environment or JSON Data or File Path.

_Previously:_ `source`

#### source-type

Source Data Type,
one of: [`json`, `env`]

_Previously:_ `type`

#### output-type

Output Data Type,defaults to the opposite of `source-type`,
one of: [`json`, `env`]

_Previously:_ `output`

#### output-file

Optional File Path to Write the Output Data.

_Previously:_ `file`

#### sensitive

Set to `true` if data is sensitive and should be masked.  
This will mask the data as a whole, plus every individual value.

#### summary

Write a Summary for the job. To disable this set to `false`.

<details><summary>👀 View Example Summary</summary>

---

💾 ✔️ `.github/test/results.json`

<details><summary>Results</summary>

```json
{ "VAR1": "success", "VAR2": "2" }
```

</details>
<details><summary>Inputs</summary><table><tr><th>Input</th><th>Value</th></tr><tr><td>source</td><td><code>.github/test/test.env</code></td></tr><tr><td>type</td><td><code>json</code></td></tr><tr><td>dest</td><td><code>.github/test/results.json</code></td></tr><tr><td>sensitive</td><td><code>false</code></td></tr><tr><td>summary</td><td><code>true</code></td></tr></table>
</details>

---

</details>

To see a workflow run you can view a recent
[test.yaml run](https://github.com/cssnr/env-json-action/actions/workflows/test.yaml) _(requires login)_.

```yaml
- name: 'Parse Environment'
  uses: cssnr/env-json-action@master
  with:
    source-data: test.env
```

## Outputs

| output | description                 |
| ------ | --------------------------- |
| result | JSON or Environment Results |

```yaml
- name: 'Parse Environment'
  id: parse
  uses: cssnr/env-json-action@master
  with:
    source-data: test.env

- name: 'Echo Result'
  run: echo '${{ steps.parse.outputs.result }}'
```

## Examples

There are some more examples in the test workflow: [.github/workflows/test.yaml](.github/workflows/test.yaml)

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/env-json-action/network/dependents

## Tags

The following rolling [tags](https://github.com/cssnr/env-json-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                        | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/env-json-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/env-json-action/releases) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/env-json-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/env-json-action/releases) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/env-json-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/env-json-action/releases)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/env-json-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

For general help or to request a feature see:

- Q&A Discussion: https://github.com/cssnr/env-json-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/env-json-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results you can:

- Report an Issue: https://github.com/cssnr/env-json-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Stack%20Deploy%20Action)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [js-test-action](https://github.com/smashedr/js-test-action?tab=readme-ov-file#readme) - JavaScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Python
- [ts-test-action](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme) - TypeScript
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
