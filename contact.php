<?php
/*
Template Name: Contact
*/
?>

<?php
$nameError = "";
$emailError = "";
$commentError = "";

if (isset($_POST['submitted'])) {
    if (trim($_POST['contactName']) === '') {
        $nameError = 'Please enter your name.';
        $hasError = true;
    } else {
        $name = trim($_POST['contactName']);
    }

    if (trim($_POST['email']) === '') {
        $emailError = 'Please enter your email address.';
        $hasError = true;
    } else if (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($_POST['email']))) {
        $emailError = 'You entered an invalid email address.';
        $hasError = true;
    } else {
        $email = trim($_POST['email']);
    }

    if (!empty(trim($_POST['subject']))) $subject = trim($_POST['subject']);

    if (trim($_POST['comments']) === '') {
        $commentError = 'Please enter a message.';
        $hasError = true;
    } else {
        if (function_exists('stripslashes')) {
            $comments = stripslashes(trim($_POST['comments']));
        } else {
            $comments = trim($_POST['comments']);
        }
    }

    if (!isset($hasError)) {
        $emailTo = get_option('admin_email');
        $body = "Name: $name \n\nEmail: $email \n\nComments: $comments";
        $headers = 'From: ' . $name . ' <' . $emailTo . '>' . "\r\n" . 'Reply-To: ' . $email;

        wp_mail($emailTo, $subject, $body, $headers);
        $emailSent = true;
    }
} ?>
<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div <?php post_class() ?> id="post-<?php the_ID(); ?>">
            <h1 class="entry-title"><?php the_title(); ?></h1>
            <div class="entry-content">
                <?php if (isset($emailSent) && $emailSent == true) { ?>
                    <div class="thanks">
                        <p>Thanks, your email was sent successfully.</p>
                    </div>
                    <?php } else {
                    the_content();
                    if (isset($hasError) || isset($captchaError)) { ?>
                        <p class="error">Sorry, an error occured.</p>
                    <?php } ?>
                    <form action="<?php the_permalink(); ?>" id="contactForm" method="post" class="contactform">
                        <div class="field">
                            <label for="contactName">Your Name (required)</label>
                            <input type="text" name="contactName" id="contactName" value="<?php if (isset($_POST['contactName'])) echo $_POST['contactName']; ?>" class="required requiredField form-control" />
                            <?php if (!empty($nameError)) { ?>
                                <p class="error"><?= $nameError; ?></p>
                            <?php } ?>
                        </div>
                        <div class="field">
                            <label for="email">Your Email (required)</label>
                            <input type="text" name="email" id="email" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>" class="required requiredField email form-control" />
                            <?php if (!empty($emailError)) { ?>
                                <p class="error"><?= $emailError; ?></p>
                            <?php } ?>
                        </div>
                        <div class="field">
                            <label for="subject">Subject</label>
                            <input type="text" name="subject" id="subject" value="<?php if (isset($_POST['subject'])) echo $_POST['subject']; ?>" class="required requiredField subject form-control" />
                        </div>
                        <div class="field"><label for="commentsText">Your Message (required)</label>
                            <textarea name="comments" id="commentsText" rows="20" cols="30" class="required requiredField form-control"><?php if (isset($_POST['comments'])) {
                                                                                                                                            if (function_exists('stripslashes')) {
                                                                                                                                                echo stripslashes($_POST['comments']);
                                                                                                                                            } else {
                                                                                                                                                echo $_POST['comments'];
                                                                                                                                            }
                                                                                                                                        } ?></textarea>
                            <?php if (!empty($commentError)) { ?>
                                <p class="error"><?= $commentError; ?></p>
                            <?php } ?>
                        </div>
                        <div class="field">
                            <button class="button is-link" type="submit">Submit</button>
                        </div>
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                    </form>
                <?php } ?>
            </div>
        </div>

<?php endwhile;
endif; ?>
<?php get_footer(); ?>