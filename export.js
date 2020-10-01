var fs = require('fs');

var file = process.cwd() + '/resume/resume.json';
fs.readFile(file, function(err, resumeJson) {
    var resumeJson;
    if (err) {
        console.log('resume.json does not exist');
        return;
    } else {
        resumeJson = JSON.parse(resumeJson);
    }
    var render = require(process.cwd() + '/template/index').render;
    fs.writeFileSync(process.cwd() + '/export/index.html', render(resumeJson));
});