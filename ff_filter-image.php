<?php
defined ('ABSPATH') or die ('No script kiddies please!');

/*
  Plugin Name: Filtro para Imagens
  Plugin URI: https://github.com/danfellipe/ff_filter-image/
  Description: Filtro para Imagens
  Version: 1.0
  Author: Fellipe de Palma & Felipe Soares
  Author URI: https://github.com/danfellipe/
  License: MIT
*/

function ff_filter_image($atts){
    include_once( 'controles.html' );
    $js = '<script src="' .  plugins_url('ff_filter-image/main.js', dirname(__FILE__)) .'">';
    return $js;
}
add_shortcode( 'filter-image', 'ff_filter_image' );

// Inclui estilos necessários ao plugin
function add_css() {
    $arquivo_css = plugins_url( 'ff_filter_image.css', __FILE__ );
    if ( is_front_page() ){
        wp_enqueue_style ( 'style', $arquivo_css );
    }
}
add_action( 'wp_enqueue_scripts', 'add_css' );
?>
