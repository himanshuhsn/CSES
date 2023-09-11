"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[932],{6343:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(7294),r=n(5497),a=n(9029),o=n(4160),i=n(5434),c=n(4316);const s=(0,c.Z)("section",{target:"e1jikabl1"})({name:"ns1hxi",styles:"display:flex;justify-content:space-between;align-items:center;padding:48px 0;width:100%;@media (max-width: 780px){flex-direction:column;}"}),d=(0,c.Z)("div",{target:"e1jikabl0"})("transition:all 200ms;",(e=>{let{isLeft:t}=e;return!t&&"margin-left: auto;"})," a{display:flex;text-decoration:none;justify-content:center;align-items:center;width:100%;height:100%;svg{width:25px;height:25px;color:",(e=>{let{theme:t}=e;return t.colors.text}),";",(e=>{let{isLeft:t}=e;return t?"margin-right: 16px":"margin-left: 16px"}),";}p{letter-spacing:0.142em;text-transform:uppercase;font-size:12px;margin:0;color:",(e=>{let{theme:t}=e;return t.colors.text}),";}h3{color:",(e=>{let{theme:t}=e;return t.colors.text}),";border:none;margin:0;padding:0;font-size:16px;}}&:hover{opacity:0.8;a svg{opacity:0.8;}}@media (max-width: 780px){width:100%;",(e=>{let{isLeft:t}=e;return t&&"margin-bottom: 16px"}),";a{justify-content:",(e=>{let{isLeft:t}=e;return t?"flex-start":"flex-end"}),";}}");var u=n(917);function m(e){let{prev:t,next:n}=e;return(0,u.tZ)(s,null,t&&(0,u.tZ)(d,{isLeft:!0},(0,u.tZ)(o.Link,{to:t.link},(0,u.tZ)(i.sG8,null),(0,u.tZ)("div",null,(0,u.tZ)("p",null,"Prev"),(0,u.tZ)("h3",null,t.label)))),n&&(0,u.tZ)(d,null,(0,u.tZ)(o.Link,{to:n.link},(0,u.tZ)("div",null,(0,u.tZ)("p",null,"Next"),(0,u.tZ)("h3",null,n.label)),(0,u.tZ)(i.AeI,null))))}m.defaultProps={prev:null,next:null};var p=n(9674);function h(e){let{repositoryEditUrl:t,repositoryProvider:n}=e;const l=(0,p.u)();return t?(0,u.tZ)("a",{href:t,target:"_blank",rel:"noopener noreferrer",css:(0,u.iv)("display:flex;align-items:center;text-decoration:none;margin-top:48px;color:",l.colors.text,";opacity:0.8;font-size:14px;font-weight:normal;","")},(0,u.tZ)(i.zmo,{style:{marginRight:"5px"}}),"Edit this page on ",n):null}function g(e){let{mdx:t,pageContext:n,children:o}=e;const{prev:i,next:c,repositoryEditUrl:s,repositoryProvider:d}=n,{title:p,description:g,image:f,disableTableOfContents:x}=t.frontmatter,{headings:y}=t,{slug:E}=t.fields;return(0,u.tZ)(l.Fragment,null,(0,u.tZ)(a.Z,{title:p,description:g,slug:E,image:f}),(0,u.tZ)(r.Z,{disableTableOfContents:x,title:p,headings:y},o,(0,u.tZ)(h,{repositoryEditUrl:s,repositoryProvider:d}),(0,u.tZ)(m,{prev:i,next:c})))}function f(e){let{data:{mdx:t},pageContext:n,children:l}=e;return(0,u.tZ)(g,{mdx:t,pageContext:n},l)}h.defaultProps={repositoryEditUrl:null,repositoryProvider:null}},856:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({p:"p",code:"code",h2:"h2",a:"a",span:"span",pre:"pre"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"To use YAML files, create a new YAML file in a ",l.createElement(t.code,null,"yamlFiles")," folder and it will be exposed as ",l.createElement(t.code,null,"all{FileName}Yaml")," GraphQL node."),"\n",l.createElement(t.p,null,"To store YAML in another folder, please change ",l.createElement(t.code,null,"yamlFilesPath")," option of ",l.createElement(t.code,null,"@rocketseat/gatsby-theme-docs")," plugin which is configured in ",l.createElement(t.code,null,"gatsby.config.js"),"."),"\n",l.createElement(t.h2,{id:"example-file",style:{position:"relative"}},l.createElement(t.a,{href:"#example-file","aria-label":"example file permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Example file"),"\n",l.createElement(t.p,null,"If our project has ",l.createElement(t.code,null,"letters.yml")," or ",l.createElement(t.code,null,"letters.yaml")," under a ",l.createElement(t.code,null,"yamlFiles")," folder which looks like:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-yml"},"- character: a\n- character: b\n- character: c\n")),"\n",l.createElement(t.p,null,"Then the following three nodes would be created:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'[\n  {\n    "character": "a"\n  },\n  {\n    "character": "b"\n  },\n  {\n    "character": "c"\n  }\n]\n')),"\n",l.createElement(t.h2,{id:"query-graphql-node",style:{position:"relative"}},l.createElement(t.a,{href:"#query-graphql-node","aria-label":"query graphql node permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Query GraphQL node"),"\n",l.createElement(t.p,null,"We can query the GraphQL nodes which is created from the YAML file as the following code:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-graphql"},"{\n  allLettersYaml {\n    edges {\n      node {\n        character\n      }\n    }\n  }\n}\n")),"\n",l.createElement(t.p,null,"Which would return:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'{\n  "allLettersYaml": {\n    "edges": [\n      {\n        "node": {\n          "character": "a"\n        }\n      },\n      {\n        "node": {\n          "character": "b"\n        }\n      },\n      {\n        "node": {\n          "character": "c"\n        }\n      }\n    ]\n  }\n}\n')),"\n",l.createElement(t.p,null,"More information, please refer to ",l.createElement(t.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-transformer-yaml/"},"gatsby-transformer-yaml plugin page"),"."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(6343);function c(e){return l.createElement(i.Z,e,l.createElement(o,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-docs-query-js-content-file-path-src-docs-usage-using-yaml-files-md-5672e1f52a2a3ccb5517.js.map