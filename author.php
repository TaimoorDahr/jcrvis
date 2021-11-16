<?php get_header();
// Set the Current Author Variable $curauth
$curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
?>

<div class="author-card">
    <div class="author-card__img-container">
        <img alt="<?= $curauth->nickname; ?>" src="<?= get_avatar_url($curauth->user_email); ?>" width="96" height="96" />
    </div>
    <h2 class="author-card__name"><?= $curauth->nickname; ?></h2>
    <div class="author-card__description">
        <p><?= $curauth->user_description; ?></p>
    </div>
</div>

<div class="post-boxes hfeed">
    <?php while (have_posts()) : the_post(); ?>
        <article class="post-box hentry">
            <a class="post-box__link" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute() ?>"></a>
            <?php the_post_thumbnail('full', ["alt" => get_the_title(), 'class' => "post-box__img"]) ?>
            <a class="post-box__category" href="<?= get_category_link(get_the_category()[0]->term_id) ?>"><?= get_the_category()[0]->name ?></a>
            <h2 class="post-box__tile entry-title"><?php the_title() ?></h2>
            <p class="post-box__excerpt entry-summary"><?php get_my_excerpt() ?></p>
            <div class="post-box__info">
                <div class="post-box__info__half vcard author">By
                    <a class="url fn" href="<?= get_author_posts_url(get_the_author_meta('ID')) ?>"><?php the_author() ?></a>
                </div>
                <span class="post-box_info__divider"> • </span>
                <div class="post-box__info__half date">
                    <time class="updated">Updated <?= human_time_diff(get_the_updated_time("U")) ?> ago</time>
                    <time class="published"><?= get_the_date() ?></time>
                </div>
            </div>
        </article>
    <?php endwhile ?>
</div>
<div class="post-nav">
    <div class="post-nav__half"><?php previous_posts_link() ?></div>
    <div class="post-nav__half"><?php next_posts_link() ?></div>
</div>

<?php get_footer(); ?>