---
layout: default
---

<h1>{{page.name}} Repository</h1>

{{page.description}}

<h2>Authors</h2>

<ul>
{% for owner in page.owners %}
    <li> <a href="http://github.com/{{owner}}">{{owner}}</a> </li>
{% endfor %}
</ul>

<p>{{ page.date }} - Written by {{ page.author }}</p>

<h2>Content</h2>

{{ content }}

{% include notify-repo-list.html %}
