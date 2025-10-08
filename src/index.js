const core = require('@actions/core')
const fs = require('node:fs')
const dotenv = require('dotenv')

;(async () => {
    try {
        core.info('🏳️ Starting Environment to/from JSON Action')

        // Inputs
        const inputs = getInputs()
        core.startGroup('Inputs')
        console.log(inputs)
        core.endGroup() // Inputs

        // Verify Inputs
        if (!inputs.sourceData) return core.setFailed(`Missing Input: source`)
        if (!['json', 'env'].includes(inputs.sourceType)) {
            return core.setFailed(`Invalid source-type: ${inputs.sourceType}`)
        }
        if (!inputs.outputType) {
            inputs.outputType = inputs.sourceType === 'json' ? 'env' : 'json'
        }
        if (!['json', 'env'].includes(inputs.outputType)) {
            return core.setFailed(`Invalid output-type: ${inputs.outputType}`)
        }
        core.info(`🔁 Converting: ${inputs.sourceType} -> ${inputs.outputType}`)

        // Process Data
        /** @type {Object} */
        let source = {}
        if (inputs.sourceType === 'json') {
            core.info('⌛ Processing Source: JSON')
            if (fs.existsSync(inputs.sourceData)) {
                core.info('JSON File...')
                source = JSON.parse(fs.readFileSync(inputs.sourceData, 'utf-8'))
            } else {
                core.info('JSON Input...')
                source = JSON.stringify(inputs.sourceData)
            }
        } else if (inputs.sourceType === 'env') {
            core.info('⌛ Processing Source: ENV')
            if (fs.existsSync(inputs.sourceData)) {
                core.info('Environment File...')
                source = dotenv.parse(fs.readFileSync(inputs.sourceData, 'utf-8'))
            } else {
                core.info('Environment Input...')
                for (let name of inputs.sourceData.split('\n')) {
                    // console.log(`name: ${name} - value: ${process.env[name]}`)
                    if (name && process.env[name]) {
                        source[name] = process.env[name]
                    }
                }
            }
        }
        // console.log('-- SOURCE DATA --\n', source, '\n-----------------')

        /** @type {String} */
        let result
        if (inputs.outputType === 'json') {
            core.info('Generating Result using: JSON.stringify')
            result = JSON.stringify(source)
        } else {
            core.info('Generating Result using: toEnv')
            result = toEnv(source)
        }
        // console.log(`---- RESULT -----\n${result}\n-----------------`)

        // Set Secret
        if (inputs.sensitive) {
            core.info('🕵️ Setting Sensitive')
            core.setSecret(result)
            for (const value of Object.values(source)) {
                // console.log('core.setSecret:', value)
                core.setSecret(value.toString())
            }
        }

        // Write File
        if (inputs.outputFile) {
            core.info(`💾 \u001b[32mWriring Results: ${inputs.outputFile}`)
            fs.writeFileSync(inputs.outputFile, result + '\n')
        }

        // Set Outputs
        core.info('📩 Setting Outputs')
        core.setOutput('result', result)

        // Summary
        if (inputs.summary) {
            core.info('📝 Writing Job Summary')
            try {
                await addSummary(inputs, result)
            } catch (e) {
                console.log(e)
                core.error(`Error writing Job Summary ${e.message}`)
            }
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
 * @function addSummary
 * @param {Object} inputs
 * @param {String} result
 * @return {Promise<void>}
 */
async function addSummary(inputs, result) {
    core.summary.addRaw(`## Environment to/from JSON Action\n`)

    if (inputs.outputFile) {
        core.summary.addRaw(`💾 ✔️ \`${inputs.outputFile}\`\n`)
    }

    if (!inputs.sensitive) {
        core.summary.addRaw('<details><summary>Results</summary>\n\n')
        core.summary.addRaw(`\`\`\`${inputs.outputType}\n${result}\n\`\`\``)
        core.summary.addRaw('\n\n</details>\n')
    }

    core.summary.addRaw('<details><summary>Inputs</summary>')
    core.summary.addTable([
        [
            { data: 'Input', header: true },
            { data: 'Value', header: true },
        ],
        [{ data: 'sourceData' }, { data: `<code>${inputs.sourceData}</code>` }],
        [{ data: 'sourceType' }, { data: `<code>${inputs.sourceType}</code>` }],
        [{ data: 'outputType' }, { data: `<code>${inputs.outputType}</code>` }],
        [{ data: 'outputFile' }, { data: `<code>${inputs.outputFile}</code>` }],
        [{ data: 'sensitive' }, { data: `<code>${inputs.sensitive}</code>` }],
        [{ data: 'summary' }, { data: `<code>${inputs.summary}</code>` }],
    ])
    core.summary.addRaw('</details>\n')

    const text = 'View Documentation, Report Issues or Request Features'
    const link = 'https://github.com/cssnr/env-json-action'
    core.summary.addRaw(`\n[${text}](${link}?tab=readme-ov-file#readme)\n\n---`)
    await core.summary.write()
}

/**
 * Get Inputs
 * @typedef {Object} Inputs
 * @property {String} sourceData
 * @property {String} sourceType
 * @property {String} outputType
 * @property {String} outputFile
 * @property {Boolean} sensitive
 * @property {Boolean} summary
 * @return {Inputs}
 */
function getInputs() {
    return {
        sourceData: core.getInput('source-data') || core.getInput('source'),
        sourceType: core.getInput('source-type') || core.getInput('type'),
        outputType: core.getInput('output-type') || core.getInput('output'),
        outputFile: core.getInput('output-file') || core.getInput('dest'),
        sensitive: core.getBooleanInput('sensitive'),
        summary: core.getBooleanInput('summary'),
    }
}
