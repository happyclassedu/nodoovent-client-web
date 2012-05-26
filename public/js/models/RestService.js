/**
 * RestService Object.
 * Once instantiated, allow user to make requests on a remote service.
 * 
 * @param address {String} Remote service address. Default '127.0.0.1'.
 * @param port {Integer} Remote service port. Default 1337.
 * @param timeout {Integer} Maximum elapsed time per request. Default 6000.
 * @param isAsync {Boolean} Asynchronous behavior. Default true.
 * @param contentType {String} Type used one sends a request. Default 'application/json'.
 * @param dataType {String} Type used when remote service sends its respone. Default 'json'.
 */
function RestService ( address, port, timeout, isAsync, contentType, dataType ) {
	this.url = address || 'http://127.0.0.1'
	this.ports = port || '1337';
	this.timeout = timeout || 6000;
	this.isAsync = isAsync || true;
	this.contentType = contentType || 'application/json';
	this.dataType = dataType || 'json';
}

/**
 * Ajax read resource function.
 * 
 * @param destination {String} Required resource url.
 * @param successCallback {Function} Function to execute if url is reached.
 * @param failureCallback {Function} Function to execute if url is not reached.
 * [ @param isAsync {Boolean} Override the class default asynchronous behavior. ]
 */
RestService.prototype.read = function ( destination, successCallback, failureCallback, isAsync ) {
	$.ajax ( {
		async: isAsync || this.isAsync,
		type: 'GET',
		url: this.url + ':' + this.port + destination + '/' + id,
		dataType: this.dataType,
		success: successCallback,
		error: failureCallback /*( req, status, ex )*/,
		timeout: this.timeout
	} );
};

/**
 * Ajax create resource function.
 * 
 * @param destination {String} Required resource url.
 * @param model {Integer} Required resource model. Must be db compliant.
 * @param successCallback {Function} Function to execute if url is reached.
 * @param failureCallback {Function} Function to execute if url is not reached.
 * [ @param isAsync {Boolean} Override the class default asynchronous behavior. ]
 */
RestService.prototype.create = function ( destination, model, successCallback, failureCallback, isAsync ) {
	$.ajax ( {
		async: isAsync || this.isAsync,
		type : 'POST',
		url : this.url + ':' + this.port + destination,
		contentType : this.contentType,
		data : JSON.stringify ( model ),
		dataType : this.dataType,
		processData : false,
		sucess : successCallback,
		error: failureCallback /*( req, status, ex )*/,
		timeout : this.timeout
	} );
};

/**
 * Ajax update resource function.
 * 
 * @param destination {String} Required resource url.
 * @param model {Integer} Required resource model. Must be db compliant.
 * @param successCallback {Function} Function to execute if url is reached.
 * @param failureCallback {Function} Function to execute if url is not reached.
 * [ @param isAsync {Boolean} Override the class default asynchronous behavior. ]
 */
RestService.prototype.update = function ( destination, model, successCallback, failureCallback, isSync ) {
	$.ajax ( {
		async: isAsync || this.isAsync,
		type : 'PUT',
		url : this.url + ':' + this.port + destination,
		contentType : this.contentType,
		data : JSON.stringify ( model ),
		dataType : this.dataType,
		processData : false,
		sucess : successCallback,
		error: failureCallback /*( req, status, ex )*/,
		timeout : this.timeout
	} );
};

/**
 * Ajax remove resource function.
 * 
 * @param destination {String} Required resource url.
 * @param successCallback {Function} Function to execute if url is reached.
 * @param failureCallback {Function} Function to execute if url is not reached.
 * [ @param isAsync {Boolean} Override the class default asynchronous behavior. ]
 */
RestService.prototype.remove = function ( destination, successCallback, failureCallback, isAsync ) {
	$.ajax ( {
		async: isAsync || this.isAsync,
		type : 'DELETE',
		url: this.url + ':' + this.port + destination,
		dataType : this.dataType,
		sucess : successCallback,
		error: failureCallback /*( req, status, ex )*/,
		timeout : this.timeout
	} );
};
