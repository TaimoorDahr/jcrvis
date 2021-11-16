<div class="popular-posts">
    <h2 class="widget-title">Popular Posts</h2>
    <ol class="popular-posts">
        <?php
        $args = array(
            'post_type' => 'post',
            'meta_key' => 'wpb_post_views_count',
            'orderby'   => 'meta_value_num',
            'order' => 'DESC',
            'posts_per_page' => 5,
            'paged' => 1,
        );
        $popular_posts = new WP_Query($args);
        $first_post = $popular_posts->posts[0];
        if ($popular_posts->have_posts()) : while ($popular_posts->have_posts()) : $popular_posts->the_post(); ?>
                <li class="popular-posts__item">
                    <?php if ($first_post->ID === get_the_ID()) { ?>
                        <a class="popular-posts__img-link" href="<?= get_the_permalink() ?>">
                            <img class="popular-posts__img" alt="<?php the_title() ?>" src="<?php the_post_thumbnail_url("full") ?>" loading="lazy" />
                        </a>
                    <?php } ?>
                    <div class="popular-posts__data">
                        <a class="popular-posts__link" href="<?= get_the_permalink() ?>"><?php the_title() ?></a>
                    </div>
                </li>
        <?php endwhile;
        endif;
        wp_reset_postdata(); ?>
    </ol>
</div>