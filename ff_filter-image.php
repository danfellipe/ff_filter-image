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

  $html  = '<form class="" action="" method="post" id="fileSelect">';
  $html .= '<input type="file" id="fileElem" name="upload-img" accept="image/png, image/jpeg"/>';
  $html .= '<div id="fileList">';
  $html .= '<div id="fileList">Escolha uma imagem!</p>';
  $html .= '</div>';
  $html .= '<script src="'.  plugins_url('ff_filter-image/main.js', dirname(__FILE__)) .'">';
  $html .= '</form>';
  return $html;
}

add_shortcode( 'filter-image', 'ff_filter_image' );
?>

<script>

</script>
