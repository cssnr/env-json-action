const core = require('@actions/core')
const fs = require('fs')
const dotenv = require('dotenv')

;(async () => {
    try {
        // Parse Inputs
        const source = core.getInput('source', { required: true })
        console.log('source:', source)
        const type = core.getInput('type', { required: true }).toLowerCase()
        console.log('type:', type)
        const dest = core.getInput('dest')
        console.log('dest:', dest)

        let data
        let result
        if (type === 'json') {
            data = dotenv.parse(fs.readFileSync(source, 'utf-8'))
            result = JSON.stringify(data)
        } else if (type === 'env') {
            data = JSON.parse(fs.readFileSync(source, 'utf-8'))
            result = toEnv(data)
        } else {
            return core.setFailed(`Invalid type: ${type}`)
        }
        console.log('data:', data)
        console.log('result:', result)

        // Write File
        if (dest) {
            core.info(`\u001b[32mWriting result to file: ${dest}`)
            fs.writeFileSync(dest, result + '\n')
        }

        // Set Output
        core.setOutput('result', result)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()

/**
 * @function getJSON
 * @param {Object} data
 * @return {String}
 */
function toEnv(data) {
    const lines = []
    for (const [key, value] of Object.entries(data)) {
        lines.push(`${key}=${value}`)
    }
    return lines.join('\n')
}

// /**
//  * @function getJSON
//  * @param {String} source
//  * @return {dotenv.DotenvParseOutput}
//  */
// function getJSON(source) {
//     return dotenv.parse(fs.readFileSync(source, 'utf-8'))
// }
//
// /**
//  * @function getENV
//  * @param {String} source
//  * @return {dotenv.DotenvParseOutput}
//  */
// function getENV(source) {
//     return JSON.parse(fs.readFileSync(source, 'utf-8'))
// }
