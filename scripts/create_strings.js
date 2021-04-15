var ios_script = require('./create_ios_strings');

module.exports = function(context) {
    var platforms = context.opts.platforms;

    var promises = [];

    if (platforms.indexOf('ios') >= 0) {
        promises.push(ios_script(context));
    }

    return Promise.all(promises);
};
