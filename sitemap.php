<?php
/*
Template Name: Sitemap
*/
get_header();
?>
<h1>Sitemap</h1>
<h2 class="all-categories-heading">All Categories</h2>
<div class="boxes all-categories">
    <?php
    // Add categories you'd like to exclude in the exclude here
    $cats = get_categories(array('hide_empty' => false));
    foreach ($cats as $cat) {
        $posts_by_slug = array(
            'category_name'    => $cat->slug,
            'exclude'          => '', // enter the ID or comma-separated list of page IDs to exclude
            'numberposts'      => '-1' // number of posts to show, default value is 5
        );
        $posts_array = get_posts($posts_by_slug); ?>

        <div class="box">
            <h3 class="box__heading">
                <a href='/<?= $cat->slug ?>/'><?= $cat->cat_name ?></a>
            </h3>
            <ul class="box__items">
                <?php foreach ($posts_array as $post) { ?>
                    <li class="box__item">
                        <a href="<?= get_permalink($post) ?>"><?= get_the_title($post) ?></a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    <?php }
    ?>
</div>
<hr />

<div class="boxes other-types">
    <div class="box">
        <h2 class="box__heading">
            All Authors
        </h2>
        <ul class="box__items">
            <?php
            $authors = get_users();
            foreach ($authors as $author) { ?>
                <li class="box__item">
                    <a href="<?= get_author_posts_url($author->id) ?>"><?= $author->display_name ?></a>
                </li>
            <?php } ?>
        </ul>
    </div>
    <div class="box">
        <h2 class="box__heading">
            All Pages
        </h2>
        <ul class="box__items">
            <?php
            $pages = get_pages();
            foreach ($pages as $page) { ?>
                <li class="box__item">
                    <a href="<?= get_page_link($page->ID) ?>"><?= $page->post_title ?></a>
                </li>
            <?php } ?>
        </ul>
    </div>
</div>
<?php get_footer() ?>