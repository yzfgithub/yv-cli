#!/usr/bin/env node

console.log('zf-cli working');
import {program} from 'commander'
import process from 'child_process'
import inquirer from 'inquirer'
import ora from 'ora'
import { modifyPackageJsonItem } from '../utils/index.js'

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
                const gitCommand = 'https://github.com/yzfgithub/vue-element-plus-template.git';
                runDownload(gitCommand, answers, name)
            } else if(answers.type === 'vue3+vant') {
                const gitCommand = 'https://github.com/yzfgithub/vue-vant-template.git';
                runDownload(gitCommand, answers, name)
            }
        })
    })

program.parse(process.argv);

function runDownload(gitCommand, answers, name) {
    let spinner = ora('downloading... (just take a break, these whole things may take a long time.)')
    spinner.start();

    process.exec('git clone '+ gitCommand +' '+ name, function(err,stdout,stderr) {
        spinner.stop();
        if(err !== null && stderr !== null) {
            console.log('exec error:' + err);
            return ;
        }
        console.log(stdout);
        console.log('clone success')
        modifyPackageJsonItem(name, answers.version || '1.0.0', 'version')
        modifyPackageJsonItem(name, name, 'name')
    })
}