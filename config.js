"use strict"

var __src = 'src';
var __build = 'build';

module.exports = {
    src: __src, 
    dest: __build, 
    browsersync: {
       
        ui: {
            port: 1985
        }, 
        server: {
            baseDir: [__build], 
            index: 'index.html'
        }, 
        
        /* proxy: "localhost:3000", */
        files: [
            __build +'/css/**/*.css', 
            __build +'/images/**/*', 
            __build +'/js/**/*.js', 
            __build +'/*.html'
        ]
    }, 
    del: {
        src: __build +'/**/*'
    }, 
    styles: {
        src: __src +'/css',
		sass_src:__src +'/sass',
		quality_source:[
			__src +'/sass/quality/leaders.scss', //上级部门
			__src +'/sass/quality/check.scss',//审核 
			__src +'/sass/quality/report.scss', //上报
			__src +'/sass/quality/releases.scss', //下达
			__src +'/sass/quality/check.scss', //验收跟踪
			__src +'/sass/quality/statistics.scss', //统计
			__src +'/sass/quality/inspection.scss',  //数据检测
		],
		quality_file:'quality.css',
        general_source_ele: __src +'/sass/global/*.scss', 
			 general_source: __src +'/sass/global.scss',
        general_file: 'global.css',  
        subpage_file: 'subpage.css', 
        dest: __build +'/css', 
        cssMinOptions: {
            advanced: false, 
            aggressiveMerging: false, 
            compatibility: 'ie7', 
            keepBreaks: false, 
            keepSpecialComments: '*', 
            mediaMerging: true, 
            processImport: false
        }
    }, 
    images: {
        src:  __src +'/images', 
        dest: __build +'/images'
    }, 
    scripts: {
        src:  __src +'/js', 
        dest: __build +'/js', 
        uglifyOptions: {
            mangle: {
                toplevel: true, 
                except: [
                    'define', 
                    'require', 
                    'exports', 
                    'module', 
                    'moudles', 
                    '$'
                ]
            },  
            compress: {
                sequences: true, 
                properties: false, 
                dead_code: true, 
                drop_debugger: true, 
                unsafe: false, 
                conditionals: true, 
                comparisons: true, 
                evaluate: true, 
                booleans: true, 
                loops: true, 
                unused: true, 
                hoist_funs: true, 
                hoist_vars: true, 
                if_return: true, 
                join_vars: true, 
                cascade: true, 
                side_effects: true, 
                warnings: true, 
                global_defs: {}
            }, 
            preserveComments: 'some'
        }
    }, 
    html: {
        src: __src +'', 
        dest: __build +''
    }, 
    watch: {
        styles: [__src +'/sass/**/*.scss'],
        images: __src +'/images/**/*', 
        scripts: __src +'/js/**/*.js', 
        html: __src +'/*.html',
			
    }
};