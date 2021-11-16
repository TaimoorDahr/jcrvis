<?php get_header(); ?>
<div class="search-section">
    <h1 class="search-title"><?php printf(__('Search Results for: %s', 'shape'), '<span>' . get_search_query() . '</span>'); ?></h1>
    <div class="search-posts hfeed">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <?php if ($post->post_type == 'page') continue ?>
                <article class="search-post hentry">
                    <a class="search-post__link" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute() ?>"></a>
                    <img class="search-post__img" alt="<?php the_title() ?>" src="<?php the_post_thumbnail_url() ?>" />
                    <div class="search-post__info">
                        <a class="search-post__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
                        <h2 class="search-post__tile entry-title"><?php the_title() ?></h2>
                        <p class="search-post__excerpt entry-summary"><?php get_my_excerpt() ?></p>
                        <div class="search-post__data">
                            <time class="updated">Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</time>
                            <span class="published"><?= get_the_date() ?></span>
                            <span class="search-post__divider"> • </span>
                            <span class="vcard author">By <a class="search-post__author url fn" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"><?php the_author() ?></a></span>
                        </div>
                    </div>
                </article>
        <?php endwhile;
        endif; ?>
    </div>
</div>
<?php wp_reset_postdata() ?>

<?php get_footer() ?>