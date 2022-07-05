export const template = {
    'vue3+element-plus': {
        gitAddress: 'https://github.com/yzfgithub/vue-element-plus-template.git',
        description: '基于vue3和element-plus的vue项目模版， 包含一个左菜单和一个表单页，完善vue-router，vuex和axios'
    },
    'vue3+vant': {
        gitAddress: 'https://github.com/yzfgithub/vue-vant-template.git',
        description: '基于vue3和vant的vue项目模版， 包含一个左菜单和一个表单页，完善vue-router，vuex和axios'
    }
}
export const promptList = [
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
    },
    {
        type: 'input',
        name: 'description',
        message: 'description',
        default: '这是一个模版项目'
    }
]