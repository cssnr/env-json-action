const core = require('@actions/core')
const fs = require('fs')
const dotenv = require('dotenv')

;(async () => {
    try {
        core.info('🏳️ Starting Environment to/from JSON Action')

        // Parse Inputs
        const inputs = parseInputs()
        console.log('inputs:', inputs)

        // let data
        let result
        if (inputs.type === 'json') {
            core.info('⌛ Processing env -> json')
            const data = dotenv.parse(fs.readFileSync(inputs.source, 'utf-8'))
            result = JSON.stringify(data)
        } else if (inputs.type === 'env') {
            core.info('⌛ Processing json -> env')
            const data = JSON.parse(fs.readFileSync(inputs.source, 'utf-8'))
            result = toEnv(data)
        } else {
            return core.setFailed(`Invalid type: ${inputs.type}`)
        }
        // console.log('data:', data)
        // console.log('result:', result)

        // Set Secret
        if (inputs.sensitive) {
            core.info('🕵️ Setting Sensitive')
            core.setSecret(result)
        }

        // Write File
        if (inputs.dest) {
            core.info(`💾 \u001b[32mWriring Results: ${inputs.dest}`)
            fs.writeFileSync(inputs.dest, result + '\n')
        }

        // Set Outputs
        core.info('📩 Setting Outputs')
        core.setOutput('result', result)

        // Job Summary
        if (inputs.summary) {
            core.info('📝 Writing Job Summary')
            await writeSummary(inputs, result)
        }

        core.info('✅ \u001b[32;1mFinished Success')
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()

/**
 * @function toEnv
 * @param {Object} data
 * @return {String}
 */
function toEnv(data) {
    const lines = []
    for (const [key, value] of Object.entries(data)) {
        lines.push(`${key}=${value.toString()}`)
    }
    return lines.join('\n')
}

/**
 * @function parseInputs
 * @return {{source: string, type: string, dest: string, sensitive: boolean, summary: boolean}}
 */
function parseInputs() {
    return {
        source: core.getInput('source', { required: true }),
        type: core.getInput('type', { required: true }).toLowerCase(),
        dest: core.getInput('dest'),
        sensitive: core.getBooleanInput('sensitive'),
        summary: core.getBooleanInput('summary'),
    }
}

/**
 * @function writeSummary
 * @param {Object} inputs
 * @param {String} result
 * @return {Promise<void>}
 */
async function writeSummary(inputs, result) {
    const prep = inputs.type === 'json' ? 'to' : 'from'
    core.summary.addRaw(`### Environment ${prep} JSON Action\n`)

    if (inputs.dest) {
        core.summary.addRaw(`💾 ✔️ \`${inputs.dest}\`\n`)
    }

    if (!inputs.sensitive) {
        core.summary.addRaw('<details><summary>Results</summary>\n\n')
        const type = inputs.type === 'json' ? 'json' : 'text'
        core.summary.addRaw(`\`\`\`${type}\n${result}\n\`\`\``)
        core.summary.addRaw('\n\n</details>\n')
    }

    core.summary.addRaw('<details><summary>Inputs</summary>')
    core.summary.addTable([
        [
            { data: 'Input', header: true },
            { data: 'Value', header: true },
        ],
        [{ data: 'source' }, { data: `<code>${inputs.source}</code>` }],
        [{ data: 'type' }, { data: `<code>${inputs.type}</code>` }],
        [{ data: 'dest' }, { data: `<code>${inputs.dest}</code>` }],
        [{ data: 'sensitive' }, { data: `<code>${inputs.sensitive}</code>` }],
        [{ data: 'summary' }, { data: `<code>${inputs.summary}</code>` }],
    ])
    core.summary.addRaw('</details>\n')

    const text = 'View Documentation, Report Issues or Request Features'
    const link = 'https://github.com/cssnr/env-json-action'
    core.summary.addRaw(`\n[${text}](${link}?tab=readme-ov-file#readme)`)
    await core.summary.write()
}
