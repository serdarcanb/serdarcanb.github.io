---
layout: default
title: App
permalink: /app/
---
<div class="app-page">
  <div class="grid-container">
    {% for item in site.software %}
      <div class="grid-item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <p>Etiketler: {% for tag in item.tags %} <span>{{ tag }}</span> {% endfor %}</p>
      </div>
    {% endfor %}
  </div>
</div>