<?php require_once('partials/head.php'); ?>

<h1>Welcome</h1>
<h2>Get started</h2>
<p>Thank you for your interest in pzplUI! This guide will show you how to get started.</p>
<br>
<hr><br>
<h3>Quick Start</h3>
<p>Want to add pzplUI to your existing project? Copy this following line to your head:</p>
<pre><code class="language-html">&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/programistazpolski/pzplui@master/style.min.css"&gt;</code></pre>
<br>
<hr><br>
<h3>Starter Template</h3>


<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Description of the page"&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/programistazpolski/pzplui@master/style.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="text-center"&gt;
        &lt;h1 class="d1"&gt;HELLO WORLD!&lt;/h1&gt;&lt;br&gt;
        &lt;p&gt;Edit your HTML file to make changes!&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Note: Make sure to change your <code>lang</code> attribute to reflect the language of your website!</p>
<p>Example languages:</p>
<ul>
    <li>English - en</li>
    <li>Polish - pl</li>
    <li>Russian - ru</li>
    <li>Swedish - sv</li>
    <li>Japaneese - jp</li>
    <li>Italian - it</li>
</ul>
<p>You can find more language codes <a href="https://www.w3docs.com/learn-html/html-language-codes.html">here</a></p>

<br>
<hr><br>

<h3>Important Tags</h3>
<p>The DOCTYPE declaration:</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;</code></pre>
<p>The charset declaration:</p>
<pre><code class="language-html">&lt;meta charset="utf-8"&gt;</code></pre>
<p>and the viewport tag:</p>
<pre><code class="language-html">&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>

<br>
<hr><br>

<h3>Templates</h3>
<div class="flexbox">
    <?php foreach ($boilerplate as $key => $value) : ?>
        <div class="card column" style="width: 18rem;">
            <img src="./assets/img/<?= $value->id ?>.webp" class="img-fluid" loading="lazy" decoding="async">

            <div class="card-body">
                <h5><?= $value->name ?></h5>
                <p><?= $value->summary ?></p><br>
                <a href="codeload?name=<?= $value->folder ?>&format=demo" class="btn btn-normal btn-sm">Demo</a>
                <a href="codeload?name=<?= $value->folder ?>&format=zip" class="btn btn-normal btn-sm">Download .zip</a>
                <a href="codeload?name=<?= $value->folder ?>&format=tarxz" class="btn btn-normal btn-sm">Download .tar.xz</a>
                <a href="codeload?name=<?= $value->folder ?>&format=7z" class="btn btn-normal btn-sm">Download .7z</a>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<footer>
    <p>Powered by <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)"><b>LAMP</b></a></p>
</footer>

<?php require_once('partials/footer.php'); ?>
