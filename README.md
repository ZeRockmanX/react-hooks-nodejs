# Project 01  
Need install nodejs and yarn  

> #二进制安装  
> sudo wget https://nodejs.org/dist/v14.17.0/node-v14.17.0-linux-x64.tar.xz  
> sudo tar -xvf ./node-v14.17.0-linux-x64.tar.xz  
> sudo mv ./node-v14.17.0-linux-x64 /opt/node  
> sudo chmod -R 777 /opt/node  
> #环境变量  
> sudo vim ~/.profile  
> #node  
> NODE_HOME=/opt/node  
> PATH=$PATH:$NODE_HOME/bin  
> export PATH  
> #执行  
> source .profile  
> #查看环境变量  
> node -v && npm -v && npx -v  
> #v10.15.1  
> #v6.4.1  
> whereis node  
> #node: /opt/graalvm-ce-1.0.0-rc12/bin/node /opt/node-v10.15.1-linux-x64/bin/node  
> whereis npm  
> #npm: /opt/graalvm-ce-1.0.0-rc12/bin/npm /opt/node-v10.15.1-linux-x64/bin/npm  
> whereis npx  
> #npx: /opt/node-v10.15.1-linux-x64/bin/npx  
> #使用淘宝源  
> npm set registry https://registry.npm.taobao.org \  
> npm set disturl https://npm.taobao.org/dist \  
> npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass \  
> npm set electron_mirror https://npm.taobao.org/mirrors/electron \  
> npm set puppeteer_download_host https://npm.taobao.org/mirrors \  
> npm set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver \  
> npm set operadriver_cdnurl https://npm.taobao.org/mirrors/operadriver \  
> npm set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs \  
> npm set selenium_cdnurl https://npm.taobao.org/mirrors/selenium \  
> npm set node_inspector_cdnurl https://npm.taobao.org/mirrors/node-inspector \  
> npm cache clean --force  
> #检测  
> npm get registry  
> #安装yarn  
> npm install -g yarn  

<br/>

# UI
## install
> cd frontui  
> yarn install  

## run
> cd frontui  
> yarn start  

<br/>

# BackEnd
## install
> cd server  
> yarn install  

## run
> cd server  
> yarn start  
