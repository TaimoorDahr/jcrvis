<?php get_header();
wpb_set_post_views(get_the_ID()); ?>

<div class="columns">
    <div class="column is-9 hfeed">
        <?php while (have_posts()) : the_post() ?>
            <article class="hentry">
                <a class="post-cat" href="<?= get_category_link(get_the_category()[0]->term_id) ?>" rel="tag"><?= get_the_category()[0]->name ?></a>
                <?php
                $visibility_title = get_post_meta_default(get_the_ID(), "_visibility_title");
                $visibility_title = $visibility_title === "default" ? (get_theme_mod("setting_visibility_title", true) ? "show" : "hide") : $visibility_title;
                if ($visibility_title != "hide") echo  '<h1 class="entry-title">' . get_the_title() . '</h1>' ?>
                <div class="post-meta">
                    <a class="author" href="<?= get_author_posts_url(get_the_author_meta('ID')); ?>">
                        <img alt="<?php the_author(); ?>" src="<?= get_avatar_url(get_the_author_meta("ID")) ?>" class="post-meta__img" loading="lazy" width="40" height="40" />
                        <span><?php the_author(); ?></span>
                    </a>
                    <span class="separator">|</span>
                    <time class="updated"><?php the_svg('calender') ?>Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</time>
                    <time class="published"><?php the_date() ?></time>
                    <span class="separator">|</span>
                    <span class="comments"><?php the_svg('comments') ?><a class="comments" href="#disqus_thread">Comments</a></span>
                </div>
                <?php
                $visibility_featured_image = get_post_meta_default(get_the_ID(), "_visibility_featured_image");
                $visibility_featured_image = $visibility_featured_image === "default" ? (get_theme_mod("setting_visibility_featured_image", true) ? "show" : "hide") : $visibility_featured_image;
                if ($visibility_featured_image != "hide") the_post_thumbnail("featured");  ?>
                <div class="content entry-content"><?php the_content(); ?></div>
                <hr class="wp-block-separator" />
                <?php
                get_template_part("template-parts/single/share-social");
                get_template_part("template-parts/single/author-bio");
                $visibility_comments = get_post_meta_default(get_the_ID(), "_visibility_comments");
                $visibility_comments = $visibility_comments === "default" ? (get_theme_mod("setting_visibility_comments", true) ? "show" : "hide") : $visibility_comments;
                if ($visibility_comments != "hide") get_template_part("template-parts/single/comments"); ?>
                <hr class="wp-block-separator" />
            </article>
        <?php endwhile ?>
    </div>
    <?php get_sidebar() ?>
</div>
<?php get_template_part("template-parts/single/related-posts"); ?>
<?php get_footer(); ?>