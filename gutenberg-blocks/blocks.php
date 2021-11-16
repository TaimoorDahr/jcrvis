<?php

if (!defined('ABSPATH')) exit;

function my_custom_block_editor_assets()
{
    $url = get_template_directory_uri() . "/gutenberg-blocks/";

    $asset_file = include(get_template_directory() . "/gutenberg-blocks/" . 'build/index.asset.php');

    // Scripts.
    wp_enqueue_script(
        'my-custom-block-js', // Handle.
        $url . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file["version"]
    );

    // Styles.
    wp_enqueue_style(
        'my-custom-block-editor-css', // Handle.
        $url . 'build/editor.css',
        array('wp-edit-blocks')
    );
}

add_action('enqueue_block_editor_assets', 'my_custom_block_editor_assets');

function my_custom_block_assets()
{
    $url = get_template_directory_uri() . "/gutenberg-blocks/";

    wp_enqueue_style(
        'my-custom-block-frontend-css', // Handle.
        $url . 'build/style.css'
    );
}

add_action('enqueue_block_assets', 'my_custom_block_assets');
