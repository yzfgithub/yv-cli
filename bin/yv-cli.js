#!/usr/bin/env node

console.log('zf-cli working');

import { program } from 'commander'
import process from 'child_process'
import inquirer from 'inquirer'
import { runDownload } from '../utils/index.js'
import { template, promptList } from '../utils/constant.js'

program.command('create <projectName>')
    .description('创建新项目')
    .action((projectName, cmd) => {
        console.log('inaction',projectName)
        inquirer.prompt(promptList).then(answers => {
            const gitAddress = template[answers.type].gitAddress;
            runDownload(gitAddress, answers, projectName)
        })
    })

program
    .command('list')
    .description('查看所有可用模版')
    .action(() => {
        for(let key in template) {
            console.log(`${key}：${template[key].description}`)
        }
    })

program.parse(process.argv);

