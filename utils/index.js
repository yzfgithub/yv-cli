import fs from 'fs'

export function modifyPackageJsonItem(file, value, type) {
    var packageJson = fs.readFileSync(`./${file}/package.json`);
    var packageObj = JSON.parse(packageJson);
    packageObj[type] = value
    fs.writeFileSync(`./${file}/package.json`, JSON.stringify(packageObj, null, '\t'), function(err) {
        if(err) {
            console.log(err)
        }
    })

}