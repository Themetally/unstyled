let $ = jQuery


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

$( document ).on( 'click', '.menu-toggle', function ( e ) {

    let $el       = $( this )
    let $dropdown = $( '#primary-menu' )

    if ( toggle( $dropdown ) ) {
        e.preventDefault()
    }

} )

$( document ).on( 'click', '.page_item_has_children > a, .menu_item_has_children > a', function ( e ) {
    let $el       = $( this )
    let $parent   = $el.parent()
    let $dropdown = $parent.find( '> .children' )

    if ( !$dropdown.length ) {
        return // no children, no dropdown action
    }

    if ( toggle( $parent ) ) {
        e.preventDefault()
    }


} )