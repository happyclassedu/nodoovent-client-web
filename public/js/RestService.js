function Rest ( url ) {
	this.destination = url;

	this.read = function ( id, successCallback ) {
		$.ajax ( {
			type : 'GET',
			url : this.destination + '/' + id,
			dataType : 'json',
			success : successCallback,
			error : function ( req, status, ex ) {},
			timeout : 6000
		} );
	}

	this.readAll = function ( successCallback ) {
			$.ajax ( {
			type : 'GET',
			url : this.destination,
			dataType : 'json',
			success : successCallback,
			error : function ( req, status, ex ) {},
			timeout : 6000
		} );
	}

	this.update = function ( model, successCallback ) {
		$.ajax ( {
			type : 'PUT',
			url : this.destination,
			contentType : 'application/json',
			data : JSON.stringify ( model ),
			dataType : 'json',
			processData : false,
			sucess : successCallback,
			error : function ( req, status, ex ) {},
			timeout : 6000
		} );
	};

	this.create = function ( model, successCallback ) {
		$.ajax ( {
			type : 'POST',
			url : this.destination,
			contentType : 'application/json',
			data : JSON.stringify ( model ),
			dataType : 'json',
			processData : false,
			sucess : successCallback,
			error : function ( req, status, ex ) {},
			timeout : 6000
		} );
	};

	this.remove = function ( id, successCallback ) {
		$.ajax ( {
			type : 'DELETE',
			url : this.destination + '/' + id,
			dataType : 'json',
			sucess : successCallback,
			error : function ( req, status, ex ) {},
			timeout : 6000
		} );
	};

}