console.log( "working" );

let socket = io( 'http://localhost:7077' );

$( '#alertAll' ).on( 'click', function( event ){
    socket.emit( 'buttonNotifyAll' );
});

socket.on( 'connected', function( data ){
    let message = `<p>SocketID: <strong>${data}</strong> joined us!!!</ps>`
    $( '.messageBox' ).append( message );
});

socket.on( 'trigger_notify', function( data ){
    let message = `<p>SocketID: <strong>${data}</strong> just triggered a notification!!!</p>`
    $( '.messageBox' ).append( message );
});

socket.on( 'exit', function( data ){
    let message = `<p>SocketID: <strong>${data}</strong> left us!!!</p>`
    $( '.messageBox' ).append( message );
});



