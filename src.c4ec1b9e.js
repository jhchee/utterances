parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var b={};Object.defineProperty(b,"__esModule",{value:!0});var d=function(){function e(){var e=this;this.element=document.createElement("form"),this.element.innerHTML="\n      <h3 id=\"heading-repository\">Repository</h3>\n      <p>\n        Choose the repository utterances will connect to.\n      </p>\n      <ol>\n        <li>Make sure the repo is public, otherwise your readers will not be able to view the issues/comments.</li>\n        <li>Make sure the <a href=\"https://github.com/apps/utterances\">utterances app</a>\n          is installed on the repo, otherwise users will not be able to post comments.\n        </li>\n        <li>If your repo is a fork, navigate to it's <em>settings</em> tab and confirm\n          the <em>issues</em> feature is turned on. </li>\n      </ol>\n      <fieldset>\n        <div>\n          <label for=\"repo\">repo:</label><br/>\n          <input id=\"repo\" class=\"form-control\" type=\"text\" placeholder=\"owner/repo\">\n          <p class=\"note\">\n            A <strong>public</strong> GitHub repository. This is where the blog\n            post issues and issue-comments will be posted.\n          </p>\n        </div>\n      </fieldset>\n\n      <h3 id=\"heading-mapping\">Blog Post<->Issue Mapping</h3>\n      <p>Choose how Utterances will map blog posts to GitHub issues.</p>\n      <fieldset>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"pathname\" name=\"mapping\" checked=\"checked\">\n            Issue title contains page pathname\n            <p class=\"note\">\n              Utterances will search for an issue whose title contains the blog post's pathname\n              URL component. If a matching issue is not found, Utterances will automatically\n              create one the first time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"url\" name=\"mapping\">\n            Issue title contains page URL\n            <p class=\"note\">\n              Utterances will search for an issue whose title contains the blog post's URL.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"title\" name=\"mapping\">\n            Issue title contains page title\n            <p class=\"note\">\n              Utterances will search for an issue whose title contains the blog post's title.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"og:title\" name=\"mapping\">\n            Issue title contains page og:title\n            <p class=\"note\">\n              Utterances will search for an issue whose title contains the page's\n              <a href=\"http://ogp.me/\">Open Graph</a> title meta.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post.\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"issue-number\" name=\"mapping\">\n            Specific issue number\n            <p class=\"note\">\n              You configure Utterances to load a specific issue by number. Issues are not automatically\n              created.\n            </p>\n          </label>\n        </div>\n        <div class=\"form-checkbox\">\n          <label>\n            <input type=\"radio\" value=\"specific-term\" name=\"mapping\">\n            Issue title contains specific term\n            <p class=\"note\">\n              You configure Utterances to search for an issue whose title contains a specific term of your choosing.\n              If a matching issue is not found, Utterances will automatically create one the first\n              time someone comments on your post. The issue's title will be the term you chose.\n            </p>\n          </label>\n        </div>\n      </fieldset>\n\n      <h3 id=\"heading-theme\">Theme</h3>\n      <p>\n        Choose an Utterances theme that matches your blog.\n        Can't find a theme you like?\n        <a href=\"https://github.com/utterance/utterances/blob/master/CONTRIBUTING.md\">Contribute</a> a custom theme.\n      </p>\n\n      <select id=\"theme\" class=\"form-select\" value=\"github-light\" aria-label=\"Theme\">\n        <option value=\"github-light\">GitHub Light</option>\n        <option value=\"github-dark\">GitHub Dark</option>\n      </select>\n\n      <h3 id=\"heading-enable\">Enable Utterances</h3>\n\n      <p>Add the following script tag to your blog's template. Position it where you want the\n      comments to appear. Customize the layout using the <code>.utterances</code> and\n      <code>.utterances-frame</code> selectors.\n      </p>\n      <div class=\"config-field\" id=\"script\" class=\"highlight highlight-text-html-basic\"></div>\n      <button id=\"copy-button\" type=\"button\" class=\"btn btn-blue code-action\">Copy</button>\n      <br/>\n      <br/>",this.element.addEventListener("submit",function(e){return e.preventDefault()}),this.element.action="javascript:",this.script=this.element.querySelector("#script"),this.repo=this.element.querySelector("#repo"),this.theme=this.element.querySelector("#theme");var t=document.getElementById("theme-stylesheet");this.theme.addEventListener("change",function(){t.href="/stylesheets/themes/"+e.theme.value+"/index.css";var n={type:"set-theme",theme:e.theme.value};document.querySelector("iframe").contentWindow.postMessage(n,location.origin)}),this.element.querySelector("#copy-button").addEventListener("click",function(){return e.copyTextToClipboard(e.script.textContent)}),this.element.addEventListener("change",function(){return e.outputConfig()}),this.element.addEventListener("input",function(){return e.outputConfig()}),this.outputConfig()}return e.prototype.outputConfig=function(){var e,t=this.element.querySelector("input[name=\"mapping\"]:checked");e="issue-number"===t.value?this.makeConfigScriptAttribute("issue-number","[ENTER ISSUE NUMBER HERE]"):"specific-term"===t.value?this.makeConfigScriptAttribute("issue-term","[ENTER TERM HERE]"):this.makeConfigScriptAttribute("issue-term",t.value),this.script.innerHTML=this.makeConfigScript(this.makeConfigScriptAttribute("repo",""===this.repo.value?"[ENTER REPO HERE]":this.repo.value)+"\n"+e+"\n"+this.makeConfigScriptAttribute("theme",this.theme.value)+"\n"+this.makeConfigScriptAttribute("crossorigin","anonymous"))},e.prototype.makeConfigScriptAttribute=function(e,t){return"<span class=\"pl-s1\">        <span class=\"pl-e\">"+e+"</span>=<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>"+t+"<span class=\"pl-pds\">\"</span></span></span>"},e.prototype.makeConfigScript=function(e){return"<pre><span class=\"pl-s1\">&lt;<span class=\"pl-ent\">script</span> <span class=\"pl-e\">src</span>=<span class=\"pl-s\"><span class=\"pl-pds\">\"</span>https://utteranc.es/client.js<span class=\"pl-pds\">\"</span></span></span>\n"+e+"\n<span class=\"pl-s1\">        <span class=\"pl-e\">async</span>&gt;</span>\n<span class=\"pl-s1\">&lt;/<span class=\"pl-ent\">script</span>&gt;</span></pre>"},e.prototype.copyTextToClipboard=function(e){var t=document.createElement("textarea");t.style.cssText="position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(n){}document.body.removeChild(t)},e}(),c=d;b.ConfigurationComponent=c;var a={};Object.defineProperty(a,"__esModule",{value:!0});document.querySelector("h2#configuration").insertAdjacentElement("afterend",new c().element);if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}return{"7QCb":a};});