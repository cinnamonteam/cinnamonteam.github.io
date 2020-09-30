---
title: Home
layout: default
---

{% assign sorted_pages = site.pages | sort:"order" %}
{% for node in sorted_pages %}
  <li style="text-decoration: none; list-style-type: none; padding: 5px;"><a href="{{node.url}}">{{node.title}}</a></li>
{% endfor %}

# Welcome!
This is the LimeyTeam website! This is made with Jekyll on Github!
Lol
