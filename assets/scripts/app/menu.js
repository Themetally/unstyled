let $ = jQuery
let $document = $(document)


const open = ( $el ) => {
    $el.addClass( 'is-open' )

    return true // true triggers e.preventDefault()
}

const close = ( $el ) => {
    $el.removeClass( 'is-open' )

    return true // true triggers e.preventDefault()
}

const toggle = ( $el ) => {
    let func = ( $el.hasClass( 'is-open' ) ) ? close : open
    return func( $el )
}


/*
    Toggle the responsive menu popup
 */
$document.on( 'click', '.site-menu-toggle', function ( e ) {

    let $el       = $( this )
    let $dropdown = $( '#primary-menu' )


    if ( toggle( $dropdown ) ) {
        e.preventDefault()
    }

} )

/*
    Open Dropdowns
 */
$document.on( 'click', '.menu-item-has-children > a', function ( e ) {
    let $el       = $( this )
    let $parent   = $el.parent()
    let $dropdown = $parent.find( '> .sub-menu' )

    if ( !$dropdown.length ) {
        return // no children, no dropdown action
    }

    if ( toggle( $parent ) ) {
        e.preventDefault()
    }


} )

/*
    Listen for the ESC Key and close the menu
 */
$document.on( 'keyup', function ( e ) {
    if ( e.key === 'Escape' && $( '#site-menu .is-open' ).length > 0 ) {
        close( $('#site-menu .is-open') )
    }
} )

/*
    Close when clicked outside the menu
 */
$document.on( 'click', function ( e ) {
    if ( ! $( e.target ).closest( '#site-menu' ).length ) {
        close( $('#site-menu').find('.is-open') )
    }
} )