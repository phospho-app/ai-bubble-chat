(()=>{const n=document.createElement("style");n.textContent="\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Inter', sans-serif; /* Using a modern sans-serif font like Inter */\n}\n\n/* Chat Bubble (Floating button) */\n.chat-bubble {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 60px;\n    height: 60px;\n    background: #3e8ef7;\n    border-radius: 50%;\n    cursor: pointer;\n    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease;\n    z-index: 1000;\n}\n\n.chat-bubble:hover {\n    transform: scale(1.1);\n}\n\n.chat-bubble-icon {\n    font-size: 28px;\n}\n\n/* Chat Window Modal */\n.chat-window {\n    position: fixed;\n    bottom: 90px;\n    right: 20px;\n    width: 350px;\n    height: 450px;\n    background: #1e1e1e;\n    border-radius: 16px;\n    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n    display: none;\n    flex-direction: column;\n    z-index: 1000;\n    opacity: 0;\n    transform: translateY(30px);\n    transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n.chat-window.active {\n    display: flex;\n    opacity: 1;\n    transform: translateY(0);\n    background: #1e1e1e;\n}\n\n/* Header */\n.chat-header {\n    padding: 16px;\n    background: #1e1e1e;\n    color: white;\n    font-size: 16px;\n    font-weight: 600;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top-left-radius: 16px;\n    align-self: flex-end;\n    border-top-right-radius: 16px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.close-button {\n    background: none;\n    border: none;\n    color: white;\n    cursor: pointer;\n    font-size: 18px;\n    transition: color 0.3s ease;\n}\n\n.close-button:hover {\n    color: #3e8ef7;\n}\n\n/* Chat Messages Section */\n.chat-messages {\n    flex-grow: 1;\n    padding: 20px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n    background: #1e1e1e;\n}\n\n.message {\n    padding: 12px 18px;\n    border-radius: 20px;\n    max-width: 80%;\n    word-wrap: break-word;\n    font-size: 14px;\n    line-height: 1.4;\n}\n\n.message.sent {\n    background: #2A2A2A;\n    color: white;\n    align-self: flex-end;\n}\n\n.message.received {\n    background: #3e8ef7;\n    color: white;\n    align-self: flex-start;\n}\n\n/* Chat Input Section */\n.chat-input {\n    display: flex;\n    padding: 16px;\n    gap: 12px;\n    background: #1e1e1e;\n}\n\n.message-input {\n    flex-grow: 1;\n    padding: 12px 18px;\n    border: 1px solid #e0e0e0;\n    border-radius: 30px;\n    outline: none;\n    font-size: 14px;\n    transition: border-color 0.3s ease;\n}\n\n.message-input:focus {\n    border-color: #3e8ef7;\n}\n\n.send-button {\n    background: #3e8ef7;\n    color: white;\n    border: none;\n    border-radius: 30px;\n    padding: 0px 16px;\n    cursor: pointer;\n    transition: background 0.3s ease;\n    font-size: 24px;\n    align-items: center;\n}\n\n.send-button:hover {\n    background: #3378d1;\n}\n\n.send-button:active {\n    background: #2566a0;\n}\n\n\n.phospho-typing-indicator {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.typing-dots {\n  display: flex;\n  align-self: flex-start;\n}\n\n.typing-dots span {\n  height: 8px;\n  width: 8px;\n  margin: 0 4px;\n  background-color: #3e8ef7;\n  display: block;\n  border-radius: 50%;\n  opacity: 0.4;\n  animation: typing 1s infinite ease-in-out;\n  align-self: flex-start;\n}\n\n.typing-dots span:nth-child(1) {\n  animation-delay: 0.1s;\n}\n\n.typing-dots span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.typing-dots span:nth-child(3) {\n  animation-delay: 0.3s;\n}\n\n.highlighted-link {\n  text-decoration: underline;\n  color: rgb(255, 255, 255);\n}\n\n/* Copy button styling */\n.copy-btn {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: #444;\n  color: #e6e6e6;\n  border: none;\n  border-radius: 3px;\n  padding: 2px 5px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.copy-btn:hover {\n  background-color: #555;\n}\n\n\n/* Code block styling */\npre {\n  background-color: #2b2b2b;\n  border: 1px solid #444;\n  border-radius: 4px;\n  padding: 10px;\n  overflow-x: auto;\n  position: relative;\n}\n\ncode {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 14px;\n  color: #2b2b2b;\n}\n\n/* Inline code styling */\np code {\n  background-color: #2c2f33;\n  color: #e6e6e6;\n  padding: 2px 4px;\n  border-radius: 3px;\n}\n\n/* Fade In Animation */\n.chat-window.fade-in {\n    animation: fadeIn 0.3s forwards;\n}\n\n@media (max-width: 767px) {\n  .chat-window {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  .chat-messages {\n    max-height: 70%;\n  }\n\n  .chat-input {\n    flex-wrap: wrap;\n  }\n\n  .message-input {\n    flex-grow: 1;\n    width: 100%;\n  }\n\n  .send-button {\n    margin-top: 12px;\n    font-size: 40px;\n  }\n}\n\n@keyframes typing {\n  0% {\n    transform: translateY(0px);\n    background-color: #0000ff;\n  }\n  28% {\n    transform: translateY(-7px);\n    background-color: #3e8ef7;\n  }\n  44% {\n    transform: translateY(0px);\n    background-color: #0000ff;\n  }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(30px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}",document.head.appendChild(n);const e=document.createElement("div");e.className="chat-bubble",e.innerHTML='<span class="chat-bubble-icon">💬</span>',document.body.appendChild(e);const t=document.createElement("div");t.className="chat-window",t.innerHTML='\n  <div class="chat-header">\n    <button class="close-button"></button>\n  </div>\n  <div class="chat-messages"></div>\n  <div class="chat-input">\n    <input type="text" class="message-input" placeholder="Type a message...">\n    <button class="send-button">↑</button>\n  </div>\n',document.body.appendChild(t);const o=t.querySelector(".close-button"),a=t.querySelector(".chat-messages"),r=t.querySelector(".message-input"),i=t.querySelector(".send-button");let s=!1;function c(){s=!1,e.querySelector(".chat-bubble-icon").textContent=s?"⌑":"💬",t.classList.remove("active")}function l(n,e=!0){const t=document.createElement("div");t.className="message "+(e?"sent":"received"),t.textContent=n,a.appendChild(t),a.scrollTop=a.scrollHeight}function d(){const n=a.querySelector(".typing-indicator");n&&n.remove()}async function p(){const n=r.value.trim();if(n){l(n,!0),r.value="",function(){d();const n=document.createElement("div");n.className="message bot typing-indicator",n.innerHTML='<div class="typing-dots"><span></span><span></span><span></span></div>',a.appendChild(n),a.scrollTop=a.scrollHeight}();try{const e=await fetch("http://localhost:8080/question_on_url",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n})});if(e.ok)if(e.body instanceof ReadableStream){const n=e.body.getReader(),t=new TextDecoder;let o="";const r=async()=>{const{done:e,value:i}=await n.read();e?d():(o+=t.decode(i,{stream:!0}),console.log("receivedText",o),function(n){d();let e=a.querySelector(".message.received:last-child");e||(e=document.createElement("div"),e.className="message received",e.innerHTML="<p></p>",a.appendChild(e));const t=function(n){return(n=(n=(n=n.replace(/```(\w+)?\n([\s\S]*?)```/g,((n,e,t)=>{return`<pre><code class="language-${e||""}">${o=t.trim(),o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</code></pre>`;var o}))).replace(/`([^`]+)`/g,"<code>$1</code>")).replace(/\$\$([\s\S]*?)\$\$/g,((n,e)=>`<div class="latex-container">${e}</div>`))).replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/^\s*\n\*/gm,"<ul>\n*").replace(/^(\*\s.*)\n([^\*])/gm,"$1\n</ul>\n\n$2").replace(/^\*\s(.*)/gm,"<li>$1</li>").replace(/\[([^\]]+)\]\(([^\)]+)\)/g,'<a href="$2" class="highlighted-link" target="_blank">$1</a>').replace(/^\s*(\n)?(.+)/gm,(function(n){return/\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(n)?n:"<p>"+n+"</p>"}))}(n);e.querySelector("p").innerHTML=t,e.querySelectorAll("pre").forEach((n=>{if(!n.querySelector(".copy-btn")){const e=document.createElement("button");e.textContent="Copy",e.className="copy-btn",e.addEventListener("click",(()=>{const t=n.querySelector("code").textContent;navigator.clipboard.writeText(t).then((()=>{e.textContent="Copied!",setTimeout((()=>{e.textContent="Copy"}),2e3)}))})),n.appendChild(e)}})),a.scrollTop=a.scrollHeight}(o),r())};await r()}else d(),console.error("Error: Response is not a StreamingResponse");else d(),console.error("Error with the request:",e.statusText)}catch(n){d(),console.error("Error:",n)}}}l("Hello! How can I assist you today?",!1),e.addEventListener("click",(function(){s=!s,t.classList.toggle("active",s),e.querySelector(".chat-bubble-icon").textContent=s?"⌑":"💬",s&&r.focus()})),o.addEventListener("click",c),i.addEventListener("click",p),r.addEventListener("keypress",(n=>{"Enter"===n.key&&p()})),document.addEventListener("click",(n=>{!s||t.contains(n.target)||e.contains(n.target)||c()}))})();