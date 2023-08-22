import path from 'path';
import ghpages from 'gh-pages';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/NYUST-GDSC/NYUST-GDSC-Backstage.git' // project github repo
};
console.log('Current working directory:', process.cwd());

const callback = err => {
    if (err) {
        console.error(err);
    } else {
        console.log('publish success');
    }
};

ghpages.publish(path.join(process.cwd(),  '/dist_netlify'), options, callback);