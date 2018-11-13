<?php
defined ('ABSPATH') or die ('No script kiddies please!');
/*
  Plugin Name: Filtro Para Imagens
  Plugin URI: https://github.com/danfellipe/ff_filter-image/
  Description: Filtro Para Imagens
  Version: 1.0
  Author: Fellipe de Palma & Felipe Soares
  Author URI: https://github.com/danfellipe/
  License: MIT
*/

function ff_filter_image($atts){

  $html  = '<form class="" action="" method="post">';
  $html .= '<input type="file" name="upload-img" accept="image/png, image/jpeg"/>';
  $html .= '</form>';
  return $html;
}

add_shortcode( 'filter-image', 'ff_filter_image' );

?>

<script>


</script>
