<?php /* Define the custom box */

if (!defined('ABSPATH')) exit;

// WP 3.0+
add_action('add_meta_boxes', 'seo_metabox');

// backwards compatible
add_action('admin_init', 'seo_metabox', 1);

/* Do something with the data entered */
add_action('save_post', 'save_seo');

/**
 *  Adds a box to the main column on the Post edit screen
 * 
 */
function seo_metabox()
{
    add_meta_box('seo', __('SEO'), 'seo_code', 'post', 'normal', 'high');
}

/**
 *  Prints the box content
 */

function seo_code($post)
{
    wp_nonce_field(plugin_basename(__FILE__), $post->post_type . '_seo_noncename');
    $keyword_meta = get_post_meta($post->ID, '_keywords_meta', true) ? get_post_meta($post->ID, '_keywords_meta', true) : ""; ?>

    <div class="custom-seo-meta-box">
        <div>
            <h4>
                <label for="keywords_meta" class="custom-meta-title"><?php _e('Meta Keywords'); ?></label>
            </h4>
            <input name="_keywords_meta" id="keywords_meta" class="custom-meta-title" value="<?= $keyword_meta ?>" />
            <br />
            <span>e.g. "Keyword1,Keyword2,Keyword3"</span>
        </div>
    </div>
    <style>
        input#keywords_meta {
            padding: 0px 8px;
            min-height: 34px;
            font-size: 1em;
            box-shadow: rgb(0 0 0 / 7%) 0px 1px 2px inset;
            border: 1px solid rgb(221, 221, 221);
            border-radius: 0px;
            width: 100%;
            max-width: 540px;
        }
    </style>
<?php
}

/** 
 * When the post is saved, saves our custom data 
 */
function save_seo($post_id)
{
    // verify if this is an auto save routine. 
    // If it is our form has not been submitted, so we dont want to do anything
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;

    // verify this came from the our screen and with proper authorization,
    // because save_post can be triggered at other times
    if (!wp_verify_nonce(@$_POST[$_POST['post_type'] . '_seo_noncename'], plugin_basename(__FILE__)))
        return;

    // Check permissions
    if (!current_user_can('edit_post', $post_id))
        return;

    // OK, we're authenticated: we need to find and save the data
    if ('post' == $_POST['post_type']) {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        } else {
            update_post_meta($post_id, '_keywords_meta', $_POST['_keywords_meta']);
        }
    }
}
