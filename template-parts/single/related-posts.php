<h2 class="related-title">Related Posts</h2>
<div class="post-boxes">
    <?php
    $category = get_the_category()[0]->term_id;
    $related_posts = new WP_Query("cat=$category&posts_per_page=6");
    if ($related_posts->have_posts()) : while ($related_posts->have_posts()) : $related_posts->the_post() ?>
            <article class="post-box">
                <a class="post-box__link" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute() ?>"></a>
                <img class="post-box__img" alt="<?php the_title() ?>" src="<?php the_post_thumbnail_url() ?>" loading="lazy" />
                <a class="post-box__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
                <h2 class="post-box__tile"><?php the_title() ?></h2>
                <p class="post-box__excerpt"><?php get_my_excerpt() ?></p>
                <div class="post-box__info">
                    <div class="post-box__info__half">By
                        <a class="url fn" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"><?php the_author() ?></a>
                    </div>
                    <span class="post-box_info__divider"> • </span>
                    <div class="post-box__info__half">
                        <time class="updated">Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</time>
                        <time class="published"><?= get_the_date() ?></time>
                    </div>
                </div>
            </article>
    <?php endwhile;
    endif;
    wp_reset_postdata() ?>
</div>