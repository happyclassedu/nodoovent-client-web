#Nodoovent-client-web

Web client for the nodoovent application using nodoovent API. 

Nodoovent-client-web is a Web application running with the Javascript framework node.js as server.
To handle the application Web server layer, Nodoovent-client-web is using a top layer framework : Express.

### Requirements :

* jQuery >= 1.7.2
* node.js >= 0.6.17
* express >= 3.0.0alpaha1

### Installation instruction :

* Client : 

##### Optional - Debugger :

	-> We recommend you to use a Web browser debugger (WebKit Inspector, Firebug, etc.)

* Server :

##### node.js :

	-> /!\ Not from ubuntu repositories
	-> Use ppa repository to get the latest version (0.6.17 currently) :

	sudo apt-get install python-software-properties
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs
	(Docs at https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)	

##### express :
	
	sudo npm install -g express
	cd /repository/of/my/application
	npm install -d

##### Optional - node.js debugger (development version only) :

	-> Use node-inspector :

	sudo npm install node-inspector
	(Docs at https://github.com/dannycoates/node-inspector)


### Howto :

... launch the server ?
-> With a terminal, go to your application repository and type "node app.js".

... launch the client ?
-> With a Web browser, go to the Internet address (if exists) or to the ip address, add ':' and then the port number.

### Documentation :

* Project : 
	* [todoovent wiki](https://github.com/g4llic4/nodoovent/wiki)
* About node.js : 
	* [Official node.js doc](http://nodejs.org/api/)
	* [Node.js tutorial (en) ](http://www.nodebeginner.org/)
	* [Node.js tutorial (fr) ](http://nodejs.developpez.com/tutoriels/javascript/node-js-livre-debutant/)
	* [Howtonode - Node.js Planet](http://howtonode.org/)
	* [MySQL and Node.js](http://www.giantflyingsaucer.com/blog/?p=2596)
	* [Many links on this post](http://stackoverflow.com/a/5511507)