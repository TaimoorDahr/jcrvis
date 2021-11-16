<?php get_header(); ?>
<h1 class="entry-title"><?php _e("Page Not Found"); ?></h1>
<p class="not-found">You just hit a route that doesn't exist... the sadness.</p>
<div class="widget widget_block widget_search">
    <form role="search" method="get" action="<?= get_bloginfo("url") ?>" class="wp-block-search__button-outside wp-block-search__icon-button wp-block-search">
        <div class="wp-block-search__inside-wrapper"><input type="search" id="wp-block-search__input-1" class="wp-block-search__input" name="s" value="" placeholder="" required="">
            <button type="submit" class="wp-block-search__button has-icon">
                <svg id="search-icon" class="search-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                </svg>
            </button>
        </div>
    </form>
</div>
<div class="latest-section">
    <h2>Latest Posts</h2>
    <div class="latest-posts">
        <?php $args = array('posts_per_page' => 8, 'post_type' => 'post');
        $latest_posts = new WP_Query($args);
        if ($latest_posts->have_posts()) : while ($latest_posts->have_posts()) : $latest_posts->the_post() ?>
                <article class="latest-post hentry">
                    <a class="latest-post__link" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute() ?>"></a>
                    <img class="latest-post__img" alt="<?php the_title() ?>" src="<?php the_post_thumbnail_url() ?>" />
                    <div class="latest-post__info">
                        <a class="latest-post__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
                        <h2 class="latest-post__tile entry-title"><?php the_title() ?></h2>
                        <p class="latest-post__excerpt entry-summary"><?php get_my_excerpt() ?></p>
                        <div class="latest-post__data">
                            <span>Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</span>
                            <span class="latest-post__divider"> • </span>
                            <span>By <a class="latest-post__author" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"><?php the_author() ?></a></span>
                        </div>
                    </div>
                </article>
        <?php endwhile;
        endif; ?>
    </div>
</div>
<?php
get_footer(); ?>