<?php get_header();

$first_post = new WP_Query("posts_per_page=1");
$other_posts = new WP_Query("posts_per_page=2&offset=1");
?>
<div class="front-section">
    <div class="first-section">
        <?php $first_post->the_post() ?>
        <div class="first-post">
            <a class="first-post__link" href="<?php the_permalink() ?>"></a>
            <?php the_post_thumbnail("", ['class' => "first-post__thumbnail"]) ?>
            <div class="first-post__data">
                <a class="first-post__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
                <h2 class="first-post__title">
                    <span><?php the_title() ?></span>
                </h2>
                <div class="first-post__excerpt"><?php get_my_excerpt() ?></div>
                <div class="first-post__info">
                    <span>Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</span>
                    <span class="first-post__divider"> • </span>
                    <span>
                        By <a class="first-post__author" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"><?php the_author() ?></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <?php wp_reset_postdata() ?>
    <div class="other-section">
        <?php while ($other_posts->have_posts()) : $other_posts->the_post() ?>
            <div class="other-post">
                <a class="other-post__link" href="<?php the_permalink() ?>"></a>
                <?php the_post_thumbnail("", ['class' => "other-post__thumbnail"]) ?>
                <div class="other-post__data">
                    <a class="other-post__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
                    <h3 class="other-post__title"><span itemprop="name"><?php the_title() ?></span></h3>
                    <div class="other-post__info">
                        <span>Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</span>
                        <span class="other-post__divider"> • </span>
                        By <a class="other-post__author" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"><?php the_author() ?></a>
                    </div>
                </div>
            </div>
        <?php endwhile ?>
    </div>
</div>
<?php wp_reset_postdata();
$category_section = get_theme_mod("setting_category_section", "val1");
if ($category_section === "val2" || $category_section === "val3") { ?>
    <hr class="category-separator" />
    <div class="categories-section">
        <h2>Categories</h2>
        <div class="categories-section__container">
            <?php
            $categories = get_categories(array("hide_empty" => false));
            foreach ($categories as $category) {
                if (!(get_term_meta($category->term_id, "_home_featured", true) === "on")) continue;
                $category_name = esc_html($category->name);
                $category_link = esc_url(get_category_link($category->term_id));
                if ($category_section === "val2") {
                    $category_img = esc_url(get_term_meta($category->term_id, "_featured_image", true)); ?>
                    <a class="categories-section__category" href="<?= $category_link ?>">
                        <img alt="<?= $category_name ?>" src="<?= $category_img ?>" loading="lazy" />
                        <p><?= $category_name ?></p>
                    </a>
                <?php } elseif ($category_section === "val3") { ?>
                    <div class="categories-section__category-box">
                        <a class="categories-section__category-title" href="<?= $category_link ?>"><?= $category_name ?></a>
                        <div class="categories-section__category-posts">
                            <?php $category_posts = get_posts(array("category" => $category->term_id));
                            foreach ($category_posts as $category_post) { ?>
                                <a class="categories-section__category-post" href="<?php echo get_permalink($category_post->ID)  ?>"><?php the_svg("arrow_right") ?><?= get_the_title($category_post->ID) ?></a>
                            <?php
                            } ?>
                        </div>
                    </div>
            <?php }
            } ?>
        </div>
    </div>
<?php }
?>
<hr class="popular-separator" />
<div class="popular-section">
    <h2>Popular Posts</h2>
    <div class="popular-posts">
        <?php $args = array(
            'post_type' => 'post',
            'meta_key' => 'wpb_post_views_count',
            'orderby'   => 'meta_value_num',
            'order' => 'DESC',
            'posts_per_page' => 4,
            'paged' => 1,
        );
        $popular_posts = new WP_Query($args);
        if ($popular_posts->have_posts()) : while ($popular_posts->have_posts()) : $popular_posts->the_post(); ?>
                <div class="popular-post">
                    <a class="popular-post__link" href="<?php the_permalink() ?>"></a>
                    <?php the_post_thumbnail("", ['class' => "popular-post__thumbnail"]); ?>
                    <div class="popular-post__info">
                        <a class="popular-post__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
                        <h3 class="popular-post__title">
                            <?php the_title(); ?>
                        </h3>
                    </div>
                </div>
        <?php endwhile;
        endif; ?>
    </div>
</div>
<?php wp_reset_postdata() ?>
<hr class="latest-separator" />
<div class="latest-section">
    <h2>Latest Posts</h2>
    <div class="latest-posts">
        <?php $args = array('posts_per_page' => 8, 'post_type' => 'post');
        $latest_posts = new WP_Query($args);
        if ($latest_posts->have_posts()) : while ($latest_posts->have_posts()) : $latest_posts->the_post() ?>
                <article class="latest-post hentry">
                    <a class="latest-post__link" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute() ?>"></a>
                    <img class="latest-post__img" alt="<?php the_title() ?>" src="<?php the_post_thumbnail_url() ?>" loading="lazy" />
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
<?php wp_reset_postdata() ?>

<?php get_footer() ?>