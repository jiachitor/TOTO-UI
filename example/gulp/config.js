var dest = './build',
    src = './src',
    modules = ['article','avgGrid','badge','button','dateTimePicker','dropdown','demo','form','goTop','header','icon','list','listNews','menu','modal','nav','navbar','table','tabs','tabsimple','pagination','selected','uiCheck'],
    mui = './node_modules/material-ui/src';

//browserify
var _bundleConfigs = [];
for ( m of modules) {
    var _item = {
        entries: src + '/' + m + '/app/app.jsx',
        dest: dest + '/' + m,
        outputName: 'app.js'
    };
    _bundleConfigs.push(_item);
}

//markup
var _markupConfigs = [];
for ( m of modules) {
    var _item = {
        src: src + '/' + m  + "/www/**",
        dest: dest + '/' + m
    };
    _markupConfigs.push(_item);
}

module.exports = {
    modules:modules,
    default: {
        src: src ,
        dest: dest
    },
    sass: {
        src: src ,
        dest: dest
    },
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        },
        files: [
            dest + '/**'
        ]
    },
    markup: _markupConfigs,
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: _bundleConfigs
    },
    moveLibs: {
        src: './libs/**' ,
        dest: dest + '/libs'
    },
};
