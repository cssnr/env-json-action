[![Release](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/release.yaml?logo=github&logoColor=white&label=release)](https://github.com/cssnr/env-json-action/actions/workflows/release.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/cssnr/env-json-action/actions/workflows/test.yaml)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/env-json-action/lint.yaml?logo=github&logoColor=white&label=lint)](https://github.com/cssnr/env-json-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_env-json-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_env-json-action)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/env-json-action?logo=github)](https://github.com/cssnr/env-json-action/releases/latest)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/env-json-action?logo=github&logoColor=white&label=updated)](https://github.com/cssnr/env-json-action/graphs/commit-activity)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/env-json-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/env-json-action)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/env-json-action?logo=htmx&logoColor=white)](https://github.com/cssnr/env-json-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# Environment to or from JSON Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Support](#Support)
- [Contributing](#Contributing)

Convert an Environment File to or from JSON for Outputs or Writing to a File.

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/env-json-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/env-json-action/issues) if you find any bugs.

## Inputs

| input     | required | default | description                          |
| --------- | :------: | ------- | ------------------------------------ |
| source    | **Yes**  | -       | Source Environment or JSON File Path |
| type      |    -     | `json`  | Output Type: [`json`, `env`] \*      |
| dest      |    -     | -       | Optional File to Write Data Too      |
| sensitive |    -     | `false` | Sensitive Data \*                    |
| summary   |    -     | `true`  | Add Summary to Job \*                |

**type** - By default this converts env to json. To perform json to env, use type `env`.

**sensitive** - Set to `true` if data is sensitive and should be masked.

**summary** - Write a Summary for the job. To disable this set to `false`.

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
[test.yaml run](https://github.com/cssnr/env-json-action/actions/workflows/test.yaml)
_(requires login)_.

```yaml
- name: 'Parse Environment'
  uses: cssnr/env-json-action@master
  with:
    source: test.env
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
    source: test.env

- name: 'Echo Result'
  run: echo '${{ steps.parse.outputs.result }}'
```

## Examples

There are some more examples in the test workflow: [.github/workflows/test.yaml](.github/workflows/test.yaml)

For a full deploy workflow example, see:  
https://github.com/cssnr/django5-boiler/blob/master/.github/workflows/deploy.yaml

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/env-json-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/env-json-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/env-json-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Env%20JSON%20Action)

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
