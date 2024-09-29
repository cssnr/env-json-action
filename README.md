[![Tags](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/tags.yaml?logo=github&logoColor=white&label=tags)](https://github.com/cssnr/env-json-action/actions/workflows/tags.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/cssnr/env-json-action/actions/workflows/test.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_env-json-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_env-json-action)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/env-json-action?logo=github)](https://github.com/cssnr/env-json-action/releases/latest)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/env-json-action?logo=github&logoColor=white&label=updated)](https://github.com/cssnr/env-json-action/graphs/commit-activity)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/env-json-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/env-json-action)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/env-json-action?logo=htmx&logoColor=white)](https://github.com/cssnr/env-json-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# Environment to/from JSON Action

Convert Environment File to/from a JSON File. Creates an output with the results and optionally writes to a file.

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Support](#Support)
- [Contributing](#Contributing)

> [!NOTE]  
> Please submit
> a [Feature Request](https://github.com/cssnr/env-json-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/env-json-action/issues) if you find any bugs.

## Inputs

| input  | required | default | description                          |
| ------ | -------- | ------- | ------------------------------------ |
| source | Yes      | -       | Environment or JSON Source File Path |
| type   | No       | `json`  | Output type [`json`, `env`] \*       |
| dest   | No       | -       | Optional Output File to Write to     |

**type** - By default this converts .env to json. To perform json to .env, use type `env`.

```yaml
- name: 'Parse Environment'
  uses: cssnr/env-json-action@master
```

## Outputs

| output | description                 |
| ------ | --------------------------- |
| result | JSON or Environment Results |

```yaml
- name: 'Parse Environment'
  id: parse
  uses: cssnr/env-json-action@master

- name: 'Echo Result'
  run: echo '${{ steps.parse.outputs.result }}'
```

## Examples

For now, you can check out the `Test` job here: [.github/workflows/test.yaml](.github/workflows/test.yaml)

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/env-json-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/env-json-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/env-json-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General
  Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Env%20JSON%20Action)

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

Additionally, you can support other GitHub Actions I have published:

- [VirusTotal Action](https://github.com/cssnr/virustotal-action)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action)

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
