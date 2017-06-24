webpackJsonp([48,157],{654:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," (Web project) / ",["a",{title:null,href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"],"(React Native project) is one of best React application development tool, we are going to use ",["code","antd-mobile"]," within it\uff1b"],["h2","Install and Initialization"],["p","We need to install the appropriate tools first, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"]," too."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g yarn\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app  <span class="token comment" spellcheck="true"># web project</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-native-app  <span class="token comment" spellcheck="true"># react-native project</span>'},["code","$ npm install -g yarn\n$ npm install -g create-react-app  # web project\n$ npm install -g create-react-native-app  # react-native project"]],["p","Then we create a new project named antm-demo."],["pre",{lang:"bash",highlighted:'$ create-react-app antm-demo  <span class="token comment" spellcheck="true"># web project</span>\n$ create-react-native-app antm-demo  <span class="token comment" spellcheck="true"># react-native project</span>'},["code","$ create-react-app antm-demo  # web project\n$ create-react-native-app antm-demo  # react-native project"]],["p","The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it."],["p","Then we go inside antm-demo and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antm-demo\n$ yarn start'},["code","$ cd antm-demo\n$ yarn start"]],["ul",["li",["p",["code","Web project"],": Open browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],', it renders a header saying "Welcome to React" on the page.']],["li",["p",["code","React Native project"],": Run ",["code","npm run ios"]," in terminal, it should be ok if you can see the page content in simulator."]]],["h2","Import antd-mobile"],["p","First we install antd-mobile and ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"(A babel plugin for importing components on demand ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand"},"principle"],") from yarn or npm."],["pre",{lang:"bash",highlighted:"$ yarn add antd-mobile\n$ yarn add babel-plugin-import --dev"},["code","$ yarn add antd-mobile\n$ yarn add babel-plugin-import --dev"]],["ul",["li",["h3","Web project"],["ol",["li",["p","generate the customized configration boilerplate"],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> run <span class="token function">eject</span>'},["code","npm run eject"]]],["li",["p","install devDependencies"],["pre",{lang:"bash",highlighted:'yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 <span class="token function">less</span> less-loader postcss-pxtorem'},["code","yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem"]]],["li",["p","Modify ",["code","config/webpack.config.dev.js"]],["pre",{lang:"js",highlighted:'<span class="token operator">...</span>\n<span class="token keyword">const</span> pxtorem <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-pxtorem\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\nextensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.web.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.json\'</span><span class="token punctuation">,</span> <span class="token string">\'.jsx\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token operator">...</span>\nrules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    exclude<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token operator">...</span>\n      <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n      <span class="token regex">/\\.svg$/</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n  <span class="token comment" spellcheck="true">// Process JS with Babel.</span>\n  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.(js|jsx)$/</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span><span class="token string">\'import\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      cacheDirectory<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n  <span class="token comment" spellcheck="true">// It is generally necessary to use the Icon component, need to configure svg-sprite-loader</span>\n  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.(svg)$/i</span><span class="token punctuation">,</span>\n    loader<span class="token punctuation">:</span> <span class="token string">\'svg-sprite-loader\'</span><span class="token punctuation">,</span>\n    include<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'antd-mobile\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/warn\\.js$/</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// 1. svg files of antd-mobile</span>\n      <span class="token comment" spellcheck="true">// path.resolve(__dirname, \'src/my-project-svg-foler\'),  // folder of svg files in your project</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'style-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'css-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'postcss-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          ident<span class="token punctuation">:</span> <span class="token string">\'postcss\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// https://webpack.js.org/guides/migrating/#complex-options</span>\n          plugins<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>\n            <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'last 2 versions\'</span><span class="token punctuation">,</span> <span class="token string">\'Firefox ESR\'</span><span class="token punctuation">,</span> <span class="token string">\'> 1%\'</span><span class="token punctuation">,</span> <span class="token string">\'ie >= 8\'</span><span class="token punctuation">,</span> <span class="token string">\'iOS >= 8\'</span><span class="token punctuation">,</span> <span class="token string">\'Android >= 4\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token function">pxtorem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> rootValue<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> propWhiteList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'less-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          modifyVars<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">"@primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>'},["code","...\nconst pxtorem = require('postcss-pxtorem');\n...\nextensions: ['.web.js', '.js', '.json', '.jsx'],\n...\nrules: [\n  {\n    exclude: [\n      ...\n      /\\.less$/,\n      /\\.svg$/,\n      ...\n    ]\n  },\n  ...\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    ...\n    options: {\n      plugins: [\n        ['import', { libraryName: 'antd-mobile', style: true }],\n      ],\n      cacheDirectory: true,\n    }\n  },\n  ...\n  // It is generally necessary to use the Icon component, need to configure svg-sprite-loader\n  {\n    test: /\\.(svg)$/i,\n    loader: 'svg-sprite-loader',\n    include: [\n      require.resolve('antd-mobile').replace(/warn\\.js$/, ''),  // 1. svg files of antd-mobile\n      // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project\n    ]\n  },\n  {\n    test: /\\.less$/,\n    use: [\n      require.resolve('style-loader'),\n      require.resolve('css-loader'),\n      {\n        loader: require.resolve('postcss-loader'),\n        options: {\n          ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n          plugins: () => [\n            autoprefixer({\n              browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],\n            }),\n            pxtorem({ rootValue: 100, propWhiteList: [] })\n          ],\n        },\n      },\n      {\n        loader: require.resolve('less-loader'),\n        options: {\n          modifyVars: { \"@primary-color\": \"#1DA57A\" },\n        },\n      },\n    ],\n  }\n]"]],["blockquote",["p","Note, we only modified webpack.config.dev.js now, if you wish this config working on production environment, you need to update webpack.config.prod.js as well."]]],["li",["p","Entry html page Required settings:"]],["li",["p","Use HD program settings, see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"},"antd-mobile-0.8-\u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]," for details."]],["li",["p","Use ",["a",{title:null,href:"https://github.com/ftlabs/fastclick"},"FastClick"],", ref ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/576"},"#576"]]],["li",["p","Use Promise fallback support (some Android phones do not support Promise), as follows:"],["pre",{lang:"js",highlighted:'<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>Promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">writeln</span><span class="token punctuation">(</span><span class="token string">\'&lt;script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"\'</span><span class="token operator">+</span><span class="token string">\'>\'</span><span class="token operator">+</span><span class="token string">\'&lt;\'</span><span class="token operator">+</span><span class="token string">\'/\'</span><span class="token operator">+</span><span class="token string">\'script>\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","if(!window.Promise) {\n  document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n}"]]]]],["li",["h3","React Native project"],["ol",["li",["p","Modify the ",["code",".babelrc"]," config, then restart the service."],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"babel-preset-expo"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"antd-mobile"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    ...\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "presets": ["babel-preset-expo"],\n  "plugins": [["import", { "libraryName": "antd-mobile" }]],\n  "env": {\n    ...\n  }\n}']]],["li",["p","Modify the ",["code","App.js"]," file, import ",["code","Button"]," component from antd-mobile."],["pre",{lang:"js",highlighted:'<span class="token operator">...</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">...</span>\n    <span class="token operator">&lt;</span>Button<span class="token operator">></span>antd<span class="token operator">-</span>mobile button<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","...\nimport { Button } from 'antd-mobile';\n\n...\nrender() {\n  return (\n    ...\n    <Button>antd-mobile button</Button>\n    ...\n  );\n}"]]]]]],["h2","Customize Theme"],["ul",["li",["h3","Web project"],["p","Please see: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui"},"web-custom-ui"]," / ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro"},"web-custom-ui-pro"]]],["li",["h3","React Native project"],["ol",["li",["p","Create ",["code","theme.js"]," file in the project root, overwrite the theme variables that you want to change, eg:"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  brand_primary<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  color_link<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  border_color_base<span class="token punctuation">:</span> <span class="token string">\'green\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = {\n  brand_primary: 'red',\n  color_link: 'red',\n  border_color_base: 'green',\n};"]]],["li",["p","Create ",["code","scripts/custom-rn-theme.js"]," file in the project root, copy the contents of ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/blob/master/rn-custom-ui/scripts/custom-rn-theme.js"},"rn-custom-ui/scripts/custom-rn-theme.js"]," to ",["code","scripts/custom-rn-theme.js"],"."]],["li",["p","Modify the ",["code","start"]," script in ",["code","package.json"]," like this:"],["pre",{lang:"json",highlighted:'<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  ...\n  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"node scripts/custom-rn-theme &amp;&amp; react-native-scripts start"</span><span class="token punctuation">,</span>\n  ...\n<span class="token punctuation">}</span>\n\nThen restart the service.'},["code",'"scripts": {\n  ...\n  "start": "node scripts/custom-rn-theme && react-native-scripts start",\n  ...\n}\n\nThen restart the service.']]]],["blockquote",["p","Note: if you want to overwrite some styles for a single component, please see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831"},"ant-design-mobile/issues/1174"]," (currently support 1.x verion)"]]]]],meta:{order:3,title:"Use in create-react(-native)-app",filename:"docs/react/use-with-create-react-app.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd-mobile",title:"Import antd-mobile"},"Import antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customize-Theme",title:"Customize Theme"},"Customize Theme"]]]}}});