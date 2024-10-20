---
layout: default
title: App
permalink: /app/
---
<head>
  <link rel="stylesheet" href="{{ '/assets/css/app-page.css' | relative_url }}">
</head>

<div class="grid-container">
  {% for item in site.software %}
    <div class="grid-item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <p>Etiketler: {% for tag in item.tags %} <span>{{ tag }}</span> {% endfor %}</p>
    </div>
  {% endfor %}
</div>