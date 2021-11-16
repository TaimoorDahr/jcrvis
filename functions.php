<?php

function add_menu_locations()
{
    register_nav_menu("primary_menu", "Primary Menu");
    register_nav_menu("footer_menu", "Footer Menu");
}

function basic_support()
{
    add_theme_support("custom-logo");
    add_theme_support("post-thumbnails");
    add_image_size("featured", 915, 99999, true);
}

function get_seo_title()
{
    $seo_title = "";
    if (is_home()) {
        $seo_title = (wp_title('', false, "right")  ?: get_bloginfo("name") . " - " . get_bloginfo("description"));
    } elseif (is_search()) {
        $seo_title = (wp_title('', false, "right")  ?: "You searched for " . get_search_query() . " – " . get_bloginfo("name"));
    } else {
        $seo_title = wp_title('', false, "right");
    }

    return $seo_title;
}

function get_seo_description()
{
    $seo_description = "";
    if (is_single()) {
        $seo_description = (get_post_meta(get_the_ID(), "_yoast_wpseo_metadesc", true) ?: get_the_excerpt());
    } elseif (is_home()) {
        $seo_description = (get_post_meta(get_the_ID(), "_yoast_wpseo_metadesc", true) ?: get_the_excerpt());
    } elseif (is_category()) {
        $seo_description = trim(preg_replace('/\s+/', ' ', wp_strip_all_tags(category_description())));
    } elseif (is_author()) {
        $seo_description = get_the_author_meta('description');
    } elseif (is_page()) {
        $seo_description = (get_post_meta(get_the_ID(), "_yoast_wpseo_metadesc", true) ?: get_the_excerpt());
    } elseif (is_search()) {
        $seo_description = "You searched for " . get_search_query() . " – " . get_bloginfo("name");
    }

    return $seo_description;
}

function get_my_custom_logo()
{
    $logo = get_theme_mod('custom_logo');
    $image = wp_get_attachment_image_src($logo, 'full');
    return $image;
}

function add_seo()
{
    echo '<title>' . get_seo_title() . '</title>';
    if (!empty(get_seo_description())) echo '<meta name="description" content="' . get_seo_description()  . '" />';
    if (is_single() && !empty(get_post_meta(get_the_ID(), "_keywords_meta", true))) echo '<meta name="keywords" content="' . get_post_meta(get_the_ID(), "_keywords_meta", true)  . '" />';
}

function custom_additional_styles()
{
    $post_type = "";
    if (is_single()) {
        $post_type = "single";
    } elseif (is_category()) {
        $post_type = "category";
    } elseif (is_author()) {
        $post_type = "author";
    } elseif (is_home()) {
        $post_type = "index";
    } elseif (is_search()) {
        $post_type = "search";
    } elseif (is_404()) {
        $post_type = "404";
    } elseif (is_page()) {
        if (is_page_template('contact.php')) {
            $post_type = "contact";
        } else if (is_page_template('sitemap.php')) {
            $post_type = "sitemap";
        } else {
            $post_type = "page";
        }
    }

    wp_enqueue_style("single", get_template_directory_uri() . '/assets/css/' . $post_type . '.min.css');
}

function custom_additional_scripts()
{
    if (is_single()) {
        echo '<script defer src="' . get_stylesheet_directory_uri() . '/assets/js/single-custom-scripts.js' . '"></script>';
    } elseif (is_page_template('contact.php')) {
        echo '<script defer src="' . get_stylesheet_directory_uri() . '/assets/js/jquery.validate.min.js' . '"></script>';
        echo '<script defer src="' . get_stylesheet_directory_uri() . '/assets/js/verify.js' . '"></script>';
    }
    echo '<script defer src="' . get_stylesheet_directory_uri() . '/assets/js/custom-scripts.js' . '"></script>';
}

function dom_xpath()
{
    $content = get_the_content();

    $dom = new DOMDocument();
    $dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_NOERROR);
    return new DOMXpath($dom);
}
function get_my_dom()
{
    $content = get_the_content();

    $dom = new DOMDocument();
    return $dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_NOERROR);
}

function get_elem_value($xpath, $elem_path, $doc_context)
{
    $elem =  $xpath->query($elem_path, $doc_context)[0];
    if (empty($elem)) {
        return "";
    } else {
        return $elem->nodeValue;
    }
}

function get_elem_attribute($xpath, $elem_path, $doc_context, $attribute)
{
    $elem =  $xpath->query($elem_path, $doc_context)[0];
    if (empty($elem)) {
        return "";
    } else {
        return $elem->getAttribute($attribute);
    }
}

function get_all_products()
{
    $products = [];

    $xpath = dom_xpath();
    $product_titles = $xpath->query('//div[(contains(@class,"wp-block-group"))]//*[(contains(@class,"product-title"))]');

    foreach ($product_titles as $product_title) {
        $product = (object) array(
            "title" => $product_title->nodeValue,
        );
        $products[] = $product;
    }

    return $products;
}

function get_my_excerpt()
{
    global $post;
    echo empty($post->post_excerpt) ? wp_trim_words($post->post_content, 20, '...') : $post->post_excerpt;
}

function get_the_updated_time($format = '')
{
    $_format = (!empty($format) ? $format : get_option('date_format'));
    $latest_date = get_post_meta_default(get_the_ID(), "_latest_date");
    $latest_date = $latest_date === "default" ? (get_theme_mod("setting_latest_date", "off") ? "on" : "off") : $latest_date;
    return (($latest_date != "on") ?  get_the_modified_date($_format) : date($_format, strtotime("-1 days")));
}

function hasToc($tiers, $content)
{

    $pattern = '/<h[2-' . $tiers . ']*([^>]*)>(.*?)<\/h([2-' . $tiers . '])>/';
    $return = array();
    if (empty($content)) return null;

    if (!preg_match_all($pattern, $content, $return)) {
        return false;
    }

    return $return;
}

function auto_id_headings($content)
{
    if (is_single()) {
        $content = preg_replace_callback('/(\<h[2-3](.*?))\>(.*)(<\/h[2-3]>)/i', function ($matches) {
            if (!stripos($matches[0], 'id=')) :
                $matches[0] = $matches[1] . $matches[2] . ' id="' . sanitize_title($matches[3]) . '">' . $matches[3] . $matches[4];
            endif;
            return $matches[0];
        }, $content);
    }

    $content = str_replace("[related_box_img]", get_theme_mod("setting_related_box", ""), $content);

    return $content;
}

function the_svg($name)
{
    echo get_the_svg($name);
}

function get_the_svg($name)
{
    switch ($name):
        case "chevron_right":
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>';
            break;
        case 'twitter':
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>';
            break;
        case "facebook":
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z">
            </svg>';
            break;
        case "youtube":
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>';
            break;
        case 'pinterest':
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144">
                <path fill="currentColor" d="M71.9,5.4C35.1,5.4,5.3,35.2,5.3,72c0,28.2,17.5,52.3,42.3,62c-0.6-5.3-1.1-13.3,0.2-19.1    c1.2-5.2,7.8-33.1,7.8-33.1s-2-4-2-9.9c0-9.3,5.4-16.2,12-16.2c5.7,0,8.4,4.3,8.4,9.4c0,5.7-3.6,14.3-5.5,22.2    c-1.6,6.6,3.3,12,9.9,12c11.8,0,20.9-12.5,20.9-30.5c0-15.9-11.5-27.1-27.8-27.1c-18.9,0-30.1,14.2-30.1,28.9    c0,5.7,2.2,11.9,5,15.2c0.5,0.7,0.6,1.2,0.5,1.9c-0.5,2.1-1.6,6.6-1.8,7.5c-0.3,1.2-1,1.5-2.2,0.9c-8.3-3.9-13.5-16-13.5-25.8    c0-21,15.3-40.3,44-40.3c23.1,0,41,16.5,41,38.4c0,22.9-14.5,41.4-34.5,41.4c-6.7,0-13.1-3.5-15.3-7.6c0,0-3.3,12.7-4.1,15.8    c-1.5,5.8-5.6,13-8.3,17.5c6.2,1.9,12.8,3,19.7,3c36.8,0,66.6-29.8,66.6-66.6C138.5,35.2,108.7,5.4,71.9,5.4z"></path>
            </svg>';
            break;
        case 'download':
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 19">
                <g xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                    <g fill="currentColor" id="Core" transform="translate(-383.000000, -213.000000)">
                        <g id="file-download" transform="translate(383.000000, 213.500000)">
                            <path d="M14,6 L10,6 L10,0 L4,0 L4,6 L0,6 L7,13 L14,6 L14,6 Z M0,15 L0,17 L14,17 L14,15 L0,15 L0,15 Z" id="Shape" />
                        </g>
                    </g>
                </g>
            </svg>';
            break;
        case 'calender':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
            </svg>';
            break;
        case 'comments':
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/>
            </svg>';
            break;
        case 'expand_more':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
            </svg>';
            break;
        case 'more_horiz':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>';
            break;
        case 'cancel':
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" fill="currentColor">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
            </svg>';
            break;
        case 'tick':
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" fill="currentColor">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>';
            break;
        case 'recommendation':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1024 1024" version="1.1">
                <path d="M170.666667 85.333333h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v822.442667a21.333333 21.333333 0 0 1-30.037333 19.498666L512 811.946667l-353.962667 157.952A21.333333 21.333333 0 0 1 128 950.442667V128a42.666667 42.666667 0 0 1 42.666667-42.666667z m640 766.506667V170.666667H213.333333v681.173333l298.666667-133.290667 298.666667 133.290667zM512 576l-125.397333 65.92 23.936-139.605333-101.418667-98.901334 140.202667-20.394666L512 256l62.72 127.018667 140.16 20.394666-101.418667 98.901334 23.893334 139.605333L512 576z"></path>
            </svg>';
            break;
        case 'product':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z" />
                <circle cx="6.5" cy="6.5" r="1.5" />
            </svg>';
            break;
        case 'faqs':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
            </svg>';
            break;
        case 'conclusion':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" version="1.1" viewBox="0 0 229.018 229.018" fill="currentColor">
                <g>
                    <path d="M114.512,51.743c-32.669,0-59.248,26.579-59.248,59.248c0,13.37,4.384,26.003,12.672,36.527   c1.636,2.083,3.355,4.077,5.175,6.188l0.1,0.116c5.568,6.46,11.325,13.142,13.475,21.01c0.486,1.803,0.555,5.26,0.527,7.923v4.526   c0,4.142,3.358,7.5,7.5,7.5h39.272c4.142,0,7.5-3.358,7.5-7.5v-4.579c-0.025-3.478,0.155-6.016,0.518-7.333   c2.162-7.816,8.542-15.321,14.222-22.001l0.245-0.288c1.639-1.926,3.188-3.745,4.598-5.538c8.3-10.53,12.687-23.169,12.687-36.551   C173.754,78.322,147.178,51.743,114.512,51.743z M149.281,138.264c-1.235,1.571-2.691,3.282-4.233,5.093l-0.302,0.355   c-6.635,7.804-14.155,16.649-17.203,27.667c-0.431,1.564-0.91,3.904-1.032,8.402h-24.312c-0.104-4.777-0.591-7.227-1.036-8.877   c-3.05-11.164-10.557-19.875-16.59-26.876l-0.101-0.118c-1.705-1.977-3.315-3.845-4.746-5.665   c-6.19-7.86-9.462-17.285-9.462-27.254c0-24.398,19.85-44.248,44.248-44.248c24.395,0,44.242,19.85,44.242,44.248   C158.754,120.971,155.48,130.399,149.281,138.264z" />
                    <path d="M133.984,196.91H94.713c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h39.272c4.142,0,7.5-3.358,7.5-7.5   S138.126,196.91,133.984,196.91z" />
                    <path d="M124.166,214.018h-19.635c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h19.635c4.142,0,7.5-3.358,7.5-7.5   C131.666,217.376,128.308,214.018,124.166,214.018z" />
                    <path d="M218,103.491h-25.873c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5H218c4.142,0,7.5-3.358,7.5-7.5   C225.5,106.849,222.142,103.491,218,103.491z" />
                    <path d="M44.394,110.991c0-4.142-3.358-7.5-7.5-7.5H11.018c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h25.876   C41.036,118.491,44.394,115.133,44.394,110.991z" />
                    <path d="M114.51,40.881c4.142,0,7.5-3.358,7.5-7.5V7.5c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v25.881   C107.01,37.523,110.368,40.881,114.51,40.881z" />
                    <path d="M174.693,160.569c-2.929-2.929-7.677-2.93-10.607-0.001c-2.929,2.929-2.93,7.677-0.001,10.607l18.296,18.301   c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.838-0.732,5.303-2.196c2.929-2.929,2.93-7.677,0.001-10.607L174.693,160.569z" />
                    <path d="M54.317,61.408c1.465,1.465,3.384,2.198,5.304,2.198c1.919,0,3.838-0.732,5.302-2.196c2.93-2.929,2.93-7.677,0.002-10.606   L46.636,32.508c-2.929-2.93-7.677-2.93-10.606-0.002c-2.93,2.929-2.93,7.677-0.002,10.606L54.317,61.408z" />
                    <path d="M54.325,160.569L36.028,178.87c-2.929,2.929-2.928,7.678,0.001,10.606c1.464,1.464,3.384,2.196,5.303,2.196   c1.919,0,3.839-0.732,5.304-2.197l18.297-18.301c2.929-2.929,2.928-7.678-0.001-10.606C62.003,157.64,57.254,157.64,54.325,160.569   z" />
                    <path d="M169.393,63.605c1.919,0,3.839-0.732,5.304-2.197l18.292-18.295c2.929-2.929,2.928-7.678-0.001-10.606   c-2.929-2.929-7.678-2.929-10.606,0.001l-18.292,18.295c-2.929,2.929-2.928,7.678,0.001,10.606   C165.554,62.874,167.473,63.605,169.393,63.605z" />
                </g>
            </svg>';
            break;
        case 'summary':
            return '<svg class="icon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path fill="currentColor" d="M47.4,899.3c-20.3,0-37.4-17.1-37.4-38c0-20.6,17.1-38,37.4-38h39.8c20.3,0,37.7,17.4,37.7,38c0,20.9-17.4,38-37.7,38H47.4L47.4,899.3z M318.6,175.6L318.6,175.6c-20.3,0-37.4-16.9-37.4-37.4c0-20.9,17.1-37.4,37.4-37.4H952c20.9,0,38,16.6,38,37.4c0,20.6-17.1,37.4-38,37.4H318.6L318.6,175.6z M47.4,175.6L47.4,175.6c-20.3,0-37.4-16.9-37.4-37.4c0-20.9,17.1-37.4,37.4-37.4h39.8c20.3,0,37.7,16.6,37.7,37.4c0,20.6-17.4,37.4-37.7,37.4H47.4L47.4,175.6z M318.6,416.8L318.6,416.8c-20.3,0-37.4-17.1-37.4-37.7c0-20.8,17.1-37.7,37.4-37.7H952c20.9,0,38,16.8,38,37.7c0,20.6-17.1,37.7-38,37.7H318.6L318.6,416.8z M47.4,416.8L47.4,416.8c-20.3,0-37.4-17.1-37.4-37.7c0-20.8,17.1-37.7,37.4-37.7h39.8c20.3,0,37.7,16.8,37.7,37.7c0,20.6-17.4,37.7-37.7,37.7H47.4L47.4,416.8z M318.6,658.1L318.6,658.1c-20.3,0-37.4-16.8-37.4-37.4c0-20.9,17.1-38,37.4-38H952c20.9,0,38,17.1,38,38c0,20.6-17.1,37.4-38,37.4H318.6L318.6,658.1z M47.4,658.1L47.4,658.1c-20.3,0-37.4-16.8-37.4-37.4c0-20.9,17.1-38,37.4-38h39.8c20.3,0,37.7,17.1,37.7,38c0,20.6-17.4,37.4-37.7,37.4H47.4L47.4,658.1z M318.6,899.3L318.6,899.3c-20.3,0-37.4-17.1-37.4-38c0-20.6,17.1-38,37.4-38H952c20.9,0,38,17.4,38,38c0,20.9-17.1,38-38,38H318.6L318.6,899.3z"></path>
            </svg>';
            break;
        case "tumblr":
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="currentColor" d="M8.998 6.995v3.664c0 .924-.01 1.464.086 1.728.096.259.338.531.613.691a2.3 2.3 0 0 0 1.204.314c.811 0 1.296-.104 2.1-.629v2.405a8.956 8.956 0 0 1-1.838.636A7.542 7.542 0 0 1 9.369 16c-.733 0-1.169-.09-1.723-.273a4.131 4.131 0 0 1-1.443-.794c-.405-.34-.67-.703-.825-1.089-.158-.383-.232-.944-.232-1.679V6.558H2.999V4.291c.632-.207 1.332-.498 1.784-.879a4.43 4.43 0 0 0 1.07-1.378c.275-.528.462-1.211.566-2.034h2.579v4.001h4.003v2.994H8.998z"/>
            </svg>';
            break;
        case "linkedin":
            return '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1036 990">
                    <path fill="currentColor" d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
                </svg>';
            break;
        case 'arrow_right':
            return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"/>
                    </svg>';
            break;
    endswitch;
}

function wpb_set_post_views($postID)
{
    $count_key = 'wpb_post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if ($count == '') {
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    } else {
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}

function wps_deregister_styles()
{
    wp_dequeue_style('wp-block-library');
}

function add_menu_atts($atts, $item, $args)
{
    $atts['property'] = 'url';
    return $atts;
}

function itemlist_schema()
{
    $seo_title = html_entity_decode(get_seo_title());
    $post_link = get_the_permalink();
    $item_list = "";
    $index = 1;
    $products = get_all_products();
    foreach ($products as $product) {
        $product_title = $product->title;
        $product_slug = sanitize_title($product->title);

        $item_list .= '{ "@id": "#' . $product_slug . '", "@type": "ListItem", "name": "' . $product_title . '", "position": ' . $index . ', "url": "' . $post_link . '#' . $product_slug  . '" }' . ($index != count($products) ? "," : "");
        $index++;
    }

    $schema = ',{
        "@context": "http://schema.org",
        "@type": "ItemList",
        "itemListElement": [' . $item_list . '],
        "name": "' . $seo_title . '",
        "url": "' . $post_link . '"
    }';

    if (!empty($products)) {
        return $schema;
    } else {
        return "";
    }
}

function faq_schema()
{
    $index = 1;
    $faqs_schema = "";

    $xpath = dom_xpath();

    $faqs = [];

    $elem_faqs = $xpath->query('//div[contains(@class,"faqs")]//div[contains(@class,"faq")]');
    foreach ($elem_faqs as $elem_faq) {
        $question = get_elem_value($xpath, './/p[contains(@class,"faq__question")]', $elem_faq);
        $answer = get_elem_value($xpath, './/p[contains(@class,"faq__answer")]', $elem_faq);
        $faq = (object) array(
            "index" => $index,
            "question" => $question,
            "answer" => $answer
        );
        $faqs[] = $faq;
        $index++;
    }

    foreach ($faqs as $faq) {
        $faqs_schema .= '{
            "@type": "Question",
            "name": "' . $faq->question . '",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "' . $faq->answer . '" 
            }
          }' . ($faq->index != count($faqs) ? "," : "");
    }

    if (!empty($faqs)) {
        return ',{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            ' . $faqs_schema . '
        ]
    }';
    } else {
        return "";
    }
}

function add_schema()
{
    $site_name = get_bloginfo("name");
    $site_description = get_bloginfo("description");
    $site_url = home_url("/");
    $custom_logo_id = get_theme_mod('custom_logo');
    $image = wp_get_attachment_image_src($custom_logo_id, 'full');
    if (is_home()) { ?>
        <script type="application/ld+json">
            [{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "#Organization",
                    "name": "<?= $site_name ?>",
                    "url": "<?= $site_url ?>"
                    <?php if ($image) ',"logo": { "@type": "ImageObject", "url": "' . $image[0] . '", "width": "' . $image[1] . '", "height": "' . $image[2] . '" }' ?>
                },
                {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "@id": "#Website",
                    "headline": "<?= $site_name ?>",
                    "name": "<?= $site_name ?>",
                    "description": "<?= $site_description ?>",
                    "url": "<?= $site_url ?>"
                }
            ]
        </script>
    <?php
    }
    if (is_single()) {
        $seo_title = html_entity_decode(get_seo_title());
        $seo_description = get_seo_description();
        $auhtor_id = get_post_field('post_author', get_queried_object_id());
        $post_link = get_the_permalink();
        $featured_image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
        $attimages = get_attached_media('image');
        $content_onlytext = trim(preg_replace('/\s+/', ' ', str_replace('"', "'", wp_strip_all_tags(get_the_content())))); ?>

        <script type="application/ld+json">
            [{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "@id": "#Article",
                    "url": "<?= $post_link ?>",
                    "inLanguage": "en-US",
                    "mainEntityOfPage": "<?= $post_link ?>",
                    "headline": "<?= $seo_title ?>",
                    "description": "<?= $seo_description ?>",
                    "articleBody": "<?= $content_onlytext ?>",
                    "keywords": "<?= get_the_category()[0]->name; ?>",
                    "datePublished": "<?= get_the_date('c') ?>",
                    "dateModified": "<?= get_the_updated_time('c') ?>",
                    "author": {
                        "@type": "Person",
                        "name": "<?= get_the_author_meta('display_name', $auhtor_id); ?>",
                        "description": "<?= get_the_author_meta('description', $auhtor_id) ?>",
                        "url": "<?= get_author_posts_url($auhtor_id) ?>",
                        "sameAs": [],
                        "image": {
                            "@type": "ImageObject",
                            "url": "<?= get_avatar_url($auhtor_id) ?>",
                            "height": 96,
                            "width": 96
                        }
                    },
                    "editor": {
                        "@type": "Person",
                        "name": "<?= get_the_author_meta('display_name', $auhtor_id); ?>",
                        "description": "<?= get_the_author_meta('description', $auhtor_id) ?>",
                        "url": "<?= get_author_posts_url($auhtor_id) ?>",
                        "sameAs": [],
                        "image": {
                            "@type": "ImageObject",
                            "url": "<?= get_avatar_url($auhtor_id) ?>",
                            "height": 96,
                            "width": 96
                        }
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "<?= $site_name ?>",
                        "url": "<?= $site_url ?>",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "<?= $image[0] ?>",
                            "width": "<?= $image[1] ?>",
                            "height": "<?= $image[2] ?>"
                        }
                    },
                    "image": [{
                            "@type": "ImageObject",
                            "@id": "<?= $featured_image[0] ?>#primaryimage",
                            "url": "<?= $featured_image[0] ?>",
                            "width": "<?= $featured_image[1] ?>",
                            "height": "<?= $featured_image[2] ?>"
                        }
                        <?php foreach ($attimages as $attimage) {
                            $img = wp_get_attachment_image_src($attimage->ID, 'full');
                            echo ',{
                            "@type": "ImageObject",
                            "url": "' . $img[0] . '",
                            "width": "' . $img[1] . '",
                            "height": "' . $img[2] . '"
                        }';
                        } ?>
                    ]
                }, {
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "<?= $post_link ?>"
                    },
                    "headline": "<?= $seo_title ?>",
                    "image": [
                        "<?= $featured_image[0] ?>"
                    ],
                    "datePublished": "<?= get_the_date('c') ?>",
                    "dateModified": "<?= get_the_updated_time('c') ?>",
                    "author": {
                        "@type": "Person",
                        "name": "<?= get_the_author_meta('display_name', $auhtor_id); ?>"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "<?= $site_name ?>",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "<?= $image[0] ?>"
                        }
                    }
                }, {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "<?= $post_link ?>"
                    },
                    "headline": "<?= $seo_title ?>",
                    "image": [
                        "<?= $featured_image[0] ?>"
                    ],
                    "datePublished": "<?= get_the_date('c') ?>",
                    "dateModified": "<?= get_the_updated_time('c') ?>",
                    "author": {
                        "@type": "Person",
                        "name": "<?= get_the_author_meta('display_name', $auhtor_id); ?>"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "<?= $site_name ?>",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "<?= $image[0] ?>",
                            "caption": "<?= $site_name ?> logo"
                        }
                    }
                }
                <?= itemlist_schema();
                echo faq_schema(); ?>
            ]
        </script>
<?php }
}

function social_meta()
{
    $twitter_handle = get_theme_mod("setting_twitter_handle", "");
    echo '<meta property="og:type" content="' . (is_home() ? "website" : "article") . '">';
    echo '<meta property="og:locale" content="en_US">';
    echo '<meta property="og:title" content="' . get_seo_title() . '">';
    echo '<meta property="og:description" content="' . get_seo_description() . '">';
    echo '<meta property="og:url" content="' . get_permalink() . '">';
    echo '<meta property="canonical" content="' . get_permalink() . '">';
    echo '<meta property="og:site_name" content="' . get_bloginfo("name") . '">';
    echo '<meta name="twitter:card" content="summary_large_image">';
    if (!empty($twitter_handle)) echo '<meta name="twitter:site" content="' . $twitter_handle . '">'; // Fix this add this option to theme settings
    echo '<meta name="twitter:title" content="' . get_seo_title() . '">';
    echo '<meta name="twitter:description" content="' . get_seo_description() . '">';
    if (is_single()) {
        $featured_image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');

        if (has_post_thumbnail()) {
            echo '<meta property="og:image" content="' . $featured_image[0] . '">';
            echo '<meta property="og:image:width" content="' . $featured_image[1] . '">';
            echo '<meta property="og:image:height" content="' . $featured_image[2] . '">';
            echo '<meta name="twitter:image:src" content="' . $featured_image[0] . '">';
        }

        echo '<meta property="article:published_time" content="' . get_the_time("c") . '">';
        echo '<meta property="article:modified_time" content="' . get_the_updated_time("c") . '">';
    } else if (is_author()) {
        echo '<meta property="og:image" content="' . get_avatar_url(get_the_author_meta("ID")) . '">';
        echo '<meta property="og:image:width" content="96">';
        echo '<meta property="og:image:height" content="96">';
        echo '<meta name="twitter:image:src" content="' . get_avatar_url(get_the_author_meta("ID")) . '">';
    } else {
        $custom_logo = get_my_custom_logo();
        if ($custom_logo) {
            echo '<meta property="og:image" content="' . $custom_logo[0] . '">';
            echo '<meta property="og:image:width" content="' . $custom_logo[1] . '">';
            echo '<meta property="og:image:height" content="' . $custom_logo[2] . '">';
            echo '<meta name="twitter:image:src" content="' . $custom_logo[0] . '">';
        }
    }
}

function my_custom_customizer_settings($wp_customize)
{
    $wp_customize->add_panel('panel_post_settings', array(
        'title' => __('Post Settings'),
        'description' => "",
        'priority' => 159,
    ));

    $wp_customize->add_section('section_footer', array(
        'title' => __('Footer'),
        'priority' => 160,
    ));
    $wp_customize->add_section('section_post_default_settings', array(
        'title' => __("Post Defaults"),
        'panel' => 'panel_post_settings',
        'priority' => 1,
    ));
    $wp_customize->add_section('section_post_other_settings', array(
        'title' => __("Other Settings"),
        'panel' => 'panel_post_settings',
        'priority' => 2,
    ));
    $wp_customize->add_section('section_site_settings', array(
        'title' => __('Site Settings'),
        'priority' => 158,
    ));

    $wp_customize->add_setting('setting_footer_logo', array(
        'transport' => 'refresh',
    ));
    $wp_customize->add_setting('setting_company_text', array(
        'default'   => '',
    ));
    $wp_customize->add_setting("setting_copyright_text", array(
        'default' => '%%site_title%% © %%current_year%%. All rights reserved. Designed By <a href="https://www.bigtechies.com/" target="_blank">BigTechies</a>.'
    ));
    $wp_customize->add_setting("setting_disqus_shortname", array(
        'default'   => '#',
    ));
    $wp_customize->add_setting("setting_social_youtube", array(
        'default'   => '#',
    ));
    $wp_customize->add_setting("setting_social_facebook", array(
        'default'   => '#'
    ));
    $wp_customize->add_setting("setting_social_twitter", array(
        'default'   => '#'
    ));
    $wp_customize->add_setting("setting_social_tumblr", array(
        'default'   => '#'
    ));
    $wp_customize->add_setting("setting_social_linkedin", array(
        'default'   => '#'
    ));
    $wp_customize->add_setting('setting_related_box', array(
        'transport' => 'refresh',
        'height' => 40,
    ));
    $wp_customize->add_setting('setting_dmca_link', array(
        'default'   => '#'
    ));
    $wp_customize->add_setting('setting_twitter_handle', array(
        'default'   => ''
    ));
    $wp_customize->add_setting('setting_visibility_comments', array(
        'default'   => true
    ));
    $wp_customize->add_setting('setting_visibility_featured_image', array(
        'default'   => true
    ));
    $wp_customize->add_setting('setting_visibility_title', array(
        'default'   => true
    ));
    $wp_customize->add_setting('setting_latest_date', array(
        'default'   => false
    ));
    $wp_customize->add_setting('setting_visibility_sidebar_toc', array(
        'default'   => true
    ));
    $wp_customize->add_setting('setting_visibility_sidebar_popular_posts', array(
        'default'   => true
    ));
    $wp_customize->add_setting('setting_affiliate_disclosure', array(
        'default'   => true
    ));
    $wp_customize->add_setting('setting_category_section', array(
        'default'   => 'val1'
    ));
    $wp_customize->add_setting('setting_cookie_consent', array(
        'default'   => false
    ));
    $wp_customize->add_setting('setting_cookie_consent_text', array(
        'default'   => "This website uses cookies in order to offer you the most relavant information."
    ));
    $wp_customize->add_setting('setting_page_sidebar', array(
        'default'   => false
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'control_footer_logo', array(
        'label' => __('Footer Logo'),
        'section' => 'section_footer',
        'settings'  => 'setting_footer_logo',
    )));
    $wp_customize->add_control("control_company_text", array(
        'label' => __('Footer Company Text'),
        'type' => 'textarea',
        'section' => 'section_footer',
        'settings' => "setting_company_text"
    ));
    $wp_customize->add_control("control_copyright_text", array(
        'label' => __('Footer Copyright Text'),
        'type' => 'textarea',
        'section' => 'section_footer',
        'settings' => "setting_copyright_text"
    ));
    $wp_customize->add_control("control_social_youtube", array(
        'label' => __('Youtube Social Link'),
        'type' => 'url',
        'section' => 'section_footer',
        'settings' => "setting_social_youtube"
    ));
    $wp_customize->add_control("control_social_facebook", array(
        'label' => __('Facebook Social Link'),
        'type' => 'url',
        'section' => 'section_footer',
        'settings' => "setting_social_facebook"
    ));
    $wp_customize->add_control("control_social_twitter", array(
        'label' => __('Twitter Social Link'),
        'type' => 'url',
        'section' => 'section_footer',
        'settings' => "setting_social_twitter"
    ));
    $wp_customize->add_control("control_social_tumblr", array(
        'label' => __('Tumblr Social Link'),
        'type' => 'url',
        'section' => 'section_footer',
        'settings' => "setting_social_tumblr"
    ));
    $wp_customize->add_control("control_social_linkedin", array(
        'label' => __('LinkedIn Social Link'),
        'type' => 'url',
        'section' => 'section_footer',
        'settings' => "setting_social_linkedin"
    ));
    $wp_customize->add_control("control_dmca_link", array(
        'label' => __('DMCA Link'),
        'type' => 'url',
        'section' => 'section_footer',
        'settings' => "setting_dmca_link"
    ));
    $wp_customize->add_control("control_disqus_shortname", array(
        'label' => __('Disqus Shortname'),
        'type' => 'url',
        'section' => 'section_post_other_settings',
        'settings' => "setting_disqus_shortname"
    ));
    $wp_customize->add_control("control_twitter_handle", array(
        'label' => __('Twitter Handle'),
        'description' => 'Used to add "twitter:site" meta tag in head. e.g. "@abc"',
        'type' => 'text',
        'section' => 'section_post_other_settings',
        'settings' => "setting_twitter_handle"
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'control_related_box', array(
        'label' => __('Related Article Icon'),
        'section' => 'section_post_other_settings',
        'settings'  => 'setting_related_box',
    )));
    $wp_customize->add_control("control_visibility_comments", array(
        'label' => __('Show Comments'),
        'type' => 'checkbox',
        'section' => 'section_post_default_settings',
        'settings' => "setting_visibility_comments"
    ));
    $wp_customize->add_control("control_visibility_featured_image", array(
        'label' => __('Show Featured Image'),
        'type' => 'checkbox',
        'section' => 'section_post_default_settings',
        'settings' => "setting_visibility_featured_image"
    ));
    $wp_customize->add_control("control_visibility_title", array(
        'label' => __('Show Post Title'),
        'type' => 'checkbox',
        'section' => 'section_post_default_settings',
        'settings' => "setting_visibility_title"
    ));
    $wp_customize->add_control("control_latest_date", array(
        'label' => __('Show Latest Date'),
        'type' => 'checkbox',
        'section' => 'section_post_default_settings',
        'settings' => "setting_latest_date"
    ));
    $wp_customize->add_control("control_visibility_sidebar_toc", array(
        'label' => __('Show Sidebar Table of Content'),
        'type' => 'checkbox',
        'section' => 'section_post_default_settings',
        'settings' => "setting_visibility_sidebar_toc"
    ));
    $wp_customize->add_control("control_visibility_sidebar_popular_posts", array(
        'label' => __('Show Sidebar Popular Posts'),
        'type' => 'checkbox',
        'section' => 'section_post_default_settings',
        'settings' => "setting_visibility_sidebar_popular_posts"
    ));
    $wp_customize->add_control("control_affiliate_disclosure", array(
        'label' => __('Show Affiliate Closure'),
        'type' => 'checkbox',
        'section' => 'section_post_other_settings',
        'settings' => "setting_affiliate_disclosure"
    ));
    $wp_customize->add_control('control_category_section', array(
        'type' => 'select',
        'label' => __('Category Section'),
        'choices' => array(
            'val1' => __('Disabled'),
            'val2' => __('Show Categories in Category Section'),
            'val3' => __('Show Category Posts in Category Section'),
        ),
        'section' => 'static_front_page',
        'settings' => "setting_category_section",
    ));
    $wp_customize->add_control("control_cookie_consent", array(
        'label' => __('Show Cookies Consent'),
        'type' => 'checkbox',
        'section' => 'section_site_settings',
        'settings' => "setting_cookie_consent"
    ));
    $wp_customize->add_control("control_cookie_consent_text", array(
        'label' => __('Cookies Consent Text'),
        'type' => 'textarea',
        'section' => 'section_site_settings',
        'settings' => "setting_cookie_consent_text"
    ));
    $wp_customize->add_control("control_page_sidebar", array(
        'label' => __('Show Sidebar on Pages'),
        'type' => 'checkbox',
        'section' => 'section_site_settings',
        'settings' => "setting_page_sidebar"
    ));
}

function wp_head_data()
{
    social_meta();
    add_seo();
    add_schema();
}

function my_register_sidebars()
{
    register_sidebar(array(
        'id'            => 'primary',
        'name'          => __('Post Sidebar'),
        'description'   => __('A short description of the sidebar.'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}

function get_post_meta_default($postID, $key)
{
    return get_post_meta($postID, $key, true) ?: "default";
}

function before_page_layout()
{
    $page_sidebar = get_theme_mod("setting_page_sidebar", false);
    if ($page_sidebar != false && is_page()) {
        echo '<div class="columns">';
        echo '<div class="column is-9 hfeed">';
    }
}

function after_page_layout()
{
    $page_sidebar = get_theme_mod("setting_page_sidebar", false);
    if ($page_sidebar != false && is_page()) {
        echo '</div>';
        get_sidebar();
        echo '</div>';
    }
};

add_action('before_page', 'before_page_layout', 0, 0);

add_action('after_page', 'after_page_layout', 0, 0);

add_action('widgets_init', 'my_register_sidebars');

add_action("wp_head", "wp_head_data");

add_action('customize_register', 'my_custom_customizer_settings');

add_filter('nav_menu_link_attributes', 'add_menu_atts', 10, 3);

add_filter('the_content', 'auto_id_headings');

add_action("wp_enqueue_scripts", "custom_additional_styles");

add_action('after_setup_theme', 'basic_support');

add_action("init", "add_menu_locations");

add_action('wp_footer', 'custom_additional_scripts');

remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

include_once(get_template_directory() . "/assets/options/post-options.php");

include_once(get_template_directory() . "/assets/options/seo.php");

include_once(get_template_directory() . "/gutenberg-blocks/blocks.php");

include_once(get_template_directory() . "/assets/options/category-options.php");
