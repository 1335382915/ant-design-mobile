webpackJsonp([116,141],{518:function(n,s){n.exports={content:["section",["p","SVG \u56fe\u6807 (\u53c2\u8003\uff1a",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/Why-use-svg-icon"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 svg \u66ff\u6362 iconfont"],")"],["h2","\u56fe\u6807\u7684\u547d\u540d\u89c4\u8303"],["p","\u6211\u4eec\u4e3a\u6bcf\u4e2a\u56fe\u6807\u8d4b\u4e88\u4e86\u8bed\u4e49\u5316\u7684\u547d\u540d\uff0c\u547d\u540d\u89c4\u5219\u5982\u4e0b:"],["ul",["li",["p","\u5b9e\u5fc3\u548c\u63cf\u7ebf\u56fe\u6807\u4fdd\u6301\u540c\u540d\uff0c\u7528 ",["code","-o"]," \u6765\u533a\u5206\uff0c\u6bd4\u5982 ",["code","question-circle"],"(\u5b9e\u5fc3) \u548c ",["code","question-circle-o"],"(\u63cf\u7ebf)\uff1b"]],["li",["p","\u547d\u540d\u987a\u5e8f\uff1a",["code","[icon\u540d]-[\u5f62\u72b6\u53ef\u9009]-[\u63cf\u7ebf\u4e0e\u5426]-[\u65b9\u5411\u53ef\u9009]"],"\u3002"]]],["h2","\u5982\u4f55\u4f7f\u7528 (WEB \u7248)"],["p","\u4e00. \u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"],["pre",{lang:"sh",highlighted:'npm install svg<span class="token operator">-</span>sprite<span class="token operator">-</span>loader<span class="token variable">@0</span><span class="token punctuation">.</span><span class="token number">3.1</span> <span class="token operator">-</span>D'},["code","npm install svg-sprite-loader@0.3.1 -D"]],["blockquote",["p","Tip: \u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/kisenka/svg-sprite-loader"},"svg-sprite-loader"]," \u65b9\u6848\u6765\u5b9e\u73b0\u56fe\u6807 sprite \u6548\u679c\uff0c\n\u8fd9\u80fd\u907f\u514d\u4e00\u4e2a\u9875\u9762\u591a\u6b21\u5f15\u7528\u540c\u4e00\u4e2a svg \u56fe\u6807\u4ea7\u751f\u91cd\u590d\u4ee3\u7801\u3002"]],["p","\u4e8c. \u5728",["code","webpack.config.js"],"\u6587\u4ef6\u91cc\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a"],["h4","\u5982\u679c\u4f7f\u7528\u7eaf\u7cb9\u7684 webpack \uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> svgDirs <span class="token operator">=</span> <span class="token punctuation">[</span>\n  require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'antd-mobile\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/warn\\.js$/</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// 1. \u5c5e\u4e8e antd-mobile \u5185\u7f6e svg \u6587\u4ef6</span>\n  <span class="token comment" spellcheck="true">// path.resolve(__dirname, \'src/my-project-svg-foler\'),  // 2. \u81ea\u5df1\u79c1\u4eba\u7684 svg \u5b58\u653e\u76ee\u5f55</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(svg)$/i</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'svg-sprite\'</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> svgDirs<span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// \u628a svgDirs \u8def\u5f84\u4e0b\u7684\u6240\u6709 svg \u6587\u4ef6\u4ea4\u7ed9 svg-sprite-loader \u63d2\u4ef6\u5904\u7406</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","const path = require('path');\n\nconst svgDirs = [\n  require.resolve('antd-mobile').replace(/warn\\.js$/, ''),  // 1. \u5c5e\u4e8e antd-mobile \u5185\u7f6e svg \u6587\u4ef6\n  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. \u81ea\u5df1\u79c1\u4eba\u7684 svg \u5b58\u653e\u76ee\u5f55\n];\n\nmodule.exports = {\n  module: {\n    loaders: [\n      {\n        test: /\\.(svg)$/i,\n        loader: 'svg-sprite',\n        include: svgDirs,  // \u628a svgDirs \u8def\u5f84\u4e0b\u7684\u6240\u6709 svg \u6587\u4ef6\u4ea4\u7ed9 svg-sprite-loader \u63d2\u4ef6\u5904\u7406\n      },\n    ]\n  }\n};"]],["h4","\u5982\u679c\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build"},"atool-build"]," \u4f5c\u4e3a\u6784\u5efa\u5de5\u5177\uff0cwebpack.config.js \u6587\u4ef6\u5199\u6cd5\u7a0d\u6709\u4e0d\u540c\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>webpackConfig<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\n<span class="token keyword">const</span> svgDirs <span class="token operator">=</span> <span class="token punctuation">[</span>\n  require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'antd-mobile\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/warn\\.js$/</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// 1. \u5c5e\u4e8e antd-mobile \u5185\u7f6e svg \u6587\u4ef6</span>\n  <span class="token comment" spellcheck="true">// path.resolve(__dirname, \'src/my-project-svg-foler\'),  // 2. \u81ea\u5df1\u79c1\u4eba\u7684 svg \u5b58\u653e\u76ee\u5f55</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// \u56e0\u4e3a\u4e00\u4e2a SVG \u6587\u4ef6\u4e0d\u80fd\u88ab\u5904\u7406\u4e24\u904d. \u5728 atool-build \u9ed8\u8ba4\u4e3a svg\u914d\u7f6e\u7684svg-url-loade \u91cc exclude \u6389\u9700\u8981 svg-sprite-loader\u5904\u7406\u7684\u76ee\u5f55</span>\n  <span class="token comment" spellcheck="true">// https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js#L162</span>\n  <span class="token comment" spellcheck="true">// https://github.com/kisenka/svg-sprite-loader/issues/4</span>\n  webpackConfig<span class="token punctuation">.</span>module<span class="token punctuation">.</span>loaders<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>loader <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>loader<span class="token punctuation">.</span>test <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> loader<span class="token punctuation">.</span>test<span class="token punctuation">.</span>test <span class="token operator">===</span> <span class="token string">\'function\'</span> <span class="token operator">&amp;&amp;</span> loader<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      loader<span class="token punctuation">.</span>exclude <span class="token operator">=</span> svgDirs<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// 4. \u914d\u7f6e webpack loader</span>\n  webpackConfig<span class="token punctuation">.</span>module<span class="token punctuation">.</span>loaders<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.(svg)$/i</span><span class="token punctuation">,</span>\n    loader<span class="token punctuation">:</span> <span class="token string">\'svg-sprite\'</span><span class="token punctuation">,</span>\n    include<span class="token punctuation">:</span> svgDirs<span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u628a svgDirs \u8def\u5f84\u4e0b\u7684\u6240\u6709 svg \u6587\u4ef6\u4ea4\u7ed9 svg-sprite-loader \u63d2\u4ef6\u5904\u7406</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> webpackConfig<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","const path = require('path');\n\nmodule.exports = function(webpackConfig, env) {\n\n\nconst svgDirs = [\n  require.resolve('antd-mobile').replace(/warn\\.js$/, ''),  // 1. \u5c5e\u4e8e antd-mobile \u5185\u7f6e svg \u6587\u4ef6\n  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. \u81ea\u5df1\u79c1\u4eba\u7684 svg \u5b58\u653e\u76ee\u5f55\n];\n\n  // \u56e0\u4e3a\u4e00\u4e2a SVG \u6587\u4ef6\u4e0d\u80fd\u88ab\u5904\u7406\u4e24\u904d. \u5728 atool-build \u9ed8\u8ba4\u4e3a svg\u914d\u7f6e\u7684svg-url-loade \u91cc exclude \u6389\u9700\u8981 svg-sprite-loader\u5904\u7406\u7684\u76ee\u5f55\n  // https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js#L162\n  // https://github.com/kisenka/svg-sprite-loader/issues/4\n  webpackConfig.module.loaders.forEach(loader => {\n    if (loader.test && typeof loader.test.test === 'function' && loader.test.test('.svg')) {\n      loader.exclude = svgDirs;\n    }\n  });\n  // 4. \u914d\u7f6e webpack loader\n  webpackConfig.module.loaders.unshift({\n    test: /\\.(svg)$/i,\n    loader: 'svg-sprite',\n    include: svgDirs, // \u628a svgDirs \u8def\u5f84\u4e0b\u7684\u6240\u6709 svg \u6587\u4ef6\u4ea4\u7ed9 svg-sprite-loader \u63d2\u4ef6\u5904\u7406\n  });\n\n  return webpackConfig;\n}"]],["h4","\u5982\u679c\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," \u521b\u5efa\u9879\u76ee\uff0c\u5219\u9ed8\u8ba4\u6784\u5efa\u5de5\u5177\u4e3a ",["a",{title:null,href:"https://github.com/sorrycc/roadhog"},"roadhog"],"\uff0c\u5176\u914d\u7f6e\u65b9\u5f0f\u53c2\u8003 ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#svgspriteloaderdirs"},"\u5b98\u65b9\u6587\u6863"]],["blockquote",["p","roadhog \u7248\u672c\u5fc5\u987b >=  0.6.0-beta1"]],["h2","\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b:"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>'},["code",'<Icon type="check" />']],["blockquote",["p","\u6ce8\u610f\uff1a\u4ec5\u5185\u7f6e\u90e8\u5206\u5fc5\u8981\u7684\u56fe\u6807\uff0c\u6240\u6709\u56fe\u6807\u540d\u5b57\u5217\u8868\u8bf7\u67e5\u770b ",["a",{title:null,href:"https://mobile.ant.design/components/icon"},"demo"],", \u540c\u65f6\u6211\u4eec\u63d0\u4f9b\u4e86 iconfont \u5bf9\u5e94\u7684 svg \u56fe\u6807\u65b9\u4fbf\u4e0b\u8f7d\u4f7f\u7528\uff0c",["a",{title:null,href:"https://github.com/ant-design/ant-design-icons"},"svg \u56fe\u6807\u5730\u5740 https://github.com/ant-design/ant-design-icons"]],["p","\u5982\u679c\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," \u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528",["a",{title:null,href:"https://github.com/sorrycc/roadhog"},"roadhog"],", roadhog \u7684 ",["code",".roadhogrc"]," \u6587\u4ef6\u6682\u4e0d\u652f\u6301\u914d\u7f6e webpack loader, \u4e0d\u8fc7 roadhog \u4ecd\u7136\u652f\u6301\u7528 ",["code","webpack.config.js"]," \u914d\u7f6e\u3002"]],["h2","\u672c\u5730\u90e8\u7f72"],["p","\u652f\u6301\u6dfb\u52a0\u672c\u5730\u79c1\u6709\u7684 svg \u56fe\u6807\uff0c\u4f7f\u7528\u65b9\u5f0f\u5982",["code","<Icon type={require('./reload.svg')} />"],"\uff0c\u6b64\u65f6\u9700\u8981\u5728\u4ee5\u4e0a ",["code","webpack.config.js"]," \u7684",["code","svgDirs"]," \u6570\u7ec4\u91cc\u52a0\u5165\u672c\u5730\u56fe\u6807\u8def\u5f84\uff0c\u7ed9 svg-sprite-loader \u63d2\u4ef6\u5904\u7406\u3002"],["blockquote",["p","\u8fd8\u6709\u4e00\u79cd\u4e0d\u63a8\u8350\u4f46\u5f88\u7b80\u4fbf\u7684\u65b9\u5f0f\uff1a",["code","<Icon type={require('!svg-sprite!./reload.svg')} />"],"\n\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u5c06\u672c\u5730 svg \u6587\u4ef6\u6240\u5728\u8def\u5f84\u52a0\u5165\u5230",["code","svgDirs"],"\u6570\u7ec4\u91cc\u4e86\uff0c",["a",{title:null,href:"http://webpack.github.io/docs/using-loaders.html#loaders-in-require"},"\u8be6\u7ec6\u53c2\u8003 webpack loaders-in-require"]]],["h2","\u5982\u4f55\u4f7f\u7528 (RN \u7248)"],["blockquote",["p","RN \u7248\u672c\u7531\u4e8e Icon \u65e0\u6cd5\u505a\u7eaf UI\uff0c\u9700\u8981 native \u652f\u6301"]],["ul",["li",["p","\u4e0b\u8f7d ",["code","https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf"]," \u91cd\u547d\u540d\u4e3a ",["code","anticon.ttf"]]],["li",["p","\u6253\u5f00 iOS \u9879\u76ee ",["code","info.plist"]," \u6587\u4ef6\uff0c\u6dfb\u52a0 ",["code","Fonts provided by application"],"\uff0c\u6307\u5b9a\u4e00\u4e2a item \u7684\u503c\u4e3a ",["code","anticon.ttf"],"\uff0c \u5c06 ",["code","anticon.ttf"]," \u62d6\u8fdb\u9879\u76ee\uff1b"]],["li",["p","Android \u9879\u76ee\u5c06 ",["code","anticon.ttf"]," \u653e\u5728 ",["code","android/app/src/main/assets/fonts/"]," \u76ee\u5f55\u4e0b;"]]],["p","\u4f7f\u7528\u65b9\u5f0f\uff1a"],["pre",{lang:"html",highlighted:'\u5185\u7f6e\u7684\u51e0\u4e2a\u56fe\u6807\uff1a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\u81ea\u5b9a\u4e49\u56fe\u6807\uff1a&lt;Icon type={\'\\ue601\'} size={55} /> (\u5177\u4f53\u53c2\u770b demo)'},["code",'\u5185\u7f6e\u7684\u51e0\u4e2a\u56fe\u6807\uff1a <Icon type="check" size="md" color="red" />\n\u81ea\u5b9a\u4e49\u56fe\u6807\uff1a<Icon type={\'\\ue601\'} size={55} /> (\u5177\u4f53\u53c2\u770b demo)']],["blockquote",["p","\u6ce8\uff1a \u81ea\u5b9a\u4e49\u56fe\u6807\u9700\u8981\u5148\u67e5\u627e\u5bf9\u5e94\u56fe\u6807\u7684 unicode \u5b57\u7b26\uff0c\u53ef\u4ee5\u53bb ant.design \u5b98\u7f51\u7528 chrome \u8c03\u8bd5\u5de5\u5177\u67e5\u770b\u5bf9\u5e94\u56fe\u6807\u7684\u503c"]]],meta:{category:"Components",type:"Data Display",title:"Icon",filename:"components/icon/index.en-US.md"},api:["section",["h2","API"],["p","Support WEB, React-Native."],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","type"],["td","\u5185\u7f6e icon \u540d\u79f0\u6216 require \u8d44\u6e90(",["code","web"],") \u6216 unicode (",["code","RN"],")"],["td","String / reqiure('xxx')"]],["tr",["td","size"],["td","\u56fe\u6807\u5927\u5c0f"],["td","'xxs'/'xs'/'sm'/'md'/'lg' (",["code","RN/WEB"],")/ number(",["code","RN Only"],")"],["td",["code","md"]]],["tr",["td","color(",["code","RN Only"],")"],["td","\u56fe\u6807\u989c\u8272"],["td","Color"],["td","'#000'"]]]]]}}});