<?php get_header();

while (have_posts()) : the_post(); ?>
    <h1 class="entry-title"><?php the_title(); ?></h1>
    <div class="content entry-content"><?php the_content(); ?></div>
<?php endwhile;

get_footer(); ?>