#!/usr/bin/env node

console.log('zf-cli working');

import {program} from 'commander'
import process from 'child_process'
import inquirer from 'inquirer'
import { runDownload } from '../utils/index.js'

program.command('init <name>')
    // .option('--typescript', "创建vue+ts项目")
    .action((name, cmd) => {
        const promptList =
            [
                {
                    type: 'list',
                    name: 'type',
                    message: 'Please select a project  template',
                    choices: [
                        'vue3+vant',
                        'vue3+element-plus'
                    ]
                },
                {
                    type: 'input',
                    name: 'version',
                    message: 'Version(1.0.0)',
                    default: '1.0.0'
                }
            ]
        
        console.log('inaction',name)
        inquirer.prompt(promptList).then(answers => {
            if(answers.type === 'vue3+element-plus') {
                const gitAddress = 'https://github.com/yzfgithub/vue-element-plus-template.git';
                runDownload(gitAddress, answers, name)
            } else if(answers.type === 'vue3+vant') {
                const gitAddress = 'https://github.com/yzfgithub/vue-vant-template.git';
                runDownload(gitAddress, answers, name)
            }
        })
    })

program.parse(process.argv);

