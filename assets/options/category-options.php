<?php

if (!defined('ABSPATH')) exit;

function custom_add_featured_category_field($term)
{
    wp_nonce_field('category_meta_edit', 'category_meta_edit_nonce');
?>
    <div class="form-field form-required">
        <label for="_home_featured"><?php _e('Home Featured'); ?></label>
        <input name="_home_featured" id="home_featured" class="selectit" type="checkbox" />
        <p><?php _e('Enable to show in Homepage category section'); ?></p>
    </div>
    <div class="form-field">
        <label for="_featured_image"><?php _e('Featured Image Link'); ?></label>
        <input name="_featured_image" id="featured_image" class="selectit" type="url" />
        <p><?php _e('Image to show Homepage category section'); ?></p>
    </div>
<?php
}

add_action('category_add_form_fields', 'custom_add_featured_category_field');

function custom_edit_featured_category_field($term)
{
    wp_nonce_field('category_meta_edit', 'category_meta_edit_nonce');
    $home_featured = get_term_meta($term->term_id, '_home_featured', true);
    $featured_image = get_term_meta($term->term_id, '_featured_image', true);
?>

    <tr class="form-field form-required">
        <th scope="row">
            <label for="_home_featured"><?php _e('Home Featured'); ?></label>
        </th>
        <td>
            <input name="_home_featured" id="home_featured" class="selectit" <?php checked($home_featured, "on"); ?> type="checkbox" />
            <p class="description"><?php _e('Enable to show in Homepage category section'); ?></p>
        </td>
    </tr>
    <tr class="form-field">
        <th scope="row">
            <label for="_featured_image"><?php _e('Featured Image Link'); ?></label>
        </th>
        <td>
            <input name="_featured_image" id="featured_image" class="selectit" value="<?= $featured_image ?>" type="url" />
            <p class="description"><?php _e('Image to show Homepage category section'); ?></p>
        </td>
    </tr>
<?php
}

add_action('category_edit_form_fields', 'custom_edit_featured_category_field');

// Save the field
function custom_save_tax_meta($term_id)
{
    if (!wp_verify_nonce($_POST['category_meta_edit_nonce'], 'category_meta_edit')) return;

    update_term_meta($term_id, '_home_featured', $_POST['_home_featured']);
    update_term_meta($term_id, '_featured_image', $_POST['_featured_image']);
}

// save_tax_meta
add_action('created_category', 'custom_save_tax_meta', 10, 2);
add_action('edited_category', 'custom_save_tax_meta', 10, 2);


// Add column to Category list
function custom_featured_category_columns($columns)
{
    return array_merge($columns, array('featured' =>  __('Home Featured')));
}

add_filter('manage_edit-category_columns', 'custom_featured_category_columns');

// Add the value to the column
function custom_featured_category_columns_values($deprecated, $column_name, $term_id)
{
    if ($column_name === 'featured') {
        $home_featured = get_term_meta($term_id, '_home_featured', true);
        if ($home_featured === "on") {
            echo _e('Yes');
        } else {
            echo _e('No');
        }
    }
}
add_action('manage_category_custom_column', 'custom_featured_category_columns_values', 10, 3);
