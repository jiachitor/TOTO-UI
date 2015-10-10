var dest = './build',
    src = './src',
    fonts = '../ui/fonts',
    modulesList = ['accordion','article','avgGrid','badge','button','close','dateTimePicker','demo','dropdown','form','goTop','grid','header','icon','image','list','listNews','menu','modal','nav','navbar','pagination','panel','popover','progress','scrollSpy','scrollSpyNav','selected','slider','sticky','table','tabs','tabsimple','uiCheck'],
    modulesNow = ['slider'],
    mui = './node_modules/material-ui/src';

//browserify
var _bundleConfigs = [];
for (var m of modulesNow) {
    var _item = {
        entries: src + '/' + m + '/app/app.jsx',
        dest: dest + '/' + m,
        outputName: 'app.js'
    };
    _bundleConfigs.push(_item);
}

//markup
var _markupConfigs = [];
for (var n of modulesNow) {
    var __item = {
        src: src + '/' + n  + "/www/**",
        dest: dest + '/' + n
    };
    _markupConfigs.push(__item);
}

module.exports = {
    modules:modulesNow,
    default: {
        src: src ,
        dest: dest,
        fonts: fonts
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
