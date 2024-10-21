---
layout: default
title: App
permalink: /app/
---
<head>
  <link rel="stylesheet" href="{{ '/assets/css/app-page.css' | relative_url }}">
</head>

<input type="text" id="searchInput" placeholder="Uygulamaları ara..." onkeyup="searchApps()">

<div class="app-page">
  <div class="grid-container">
    {% for item in site.software %}
      <div class="grid-item" onclick="toggleDetails(this)" data-title="{{ item.title }}" data-tags="{{ item.tags | join: ', ' }}">
        <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo"/>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <!-- Etiketler ve GitHub/Website detayları için gizli bölüm -->
        <div class="details">
          <p class="tags">Etiketler: {% for tag in item.tags %} <span>{{ tag }}</span> {% endfor %}</p>
          <p class="github-info">
            {% if item.github_url %}
              <a href="{{ item.github_url }}" target="_blank">GitHub</a> | ⭐ {{ item.stars }}
            {% elsif item.website_url %}
              <a href="{{ item.website_url }}" target="_blank">Website</a>
            {% endif %}
          </p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script>
  function toggleDetails(element) {
    element.classList.toggle('active');
  }

  function searchApps() {
    var input, filter, container, items, title, i, txtValue, tags, tagValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName('grid-container')[0];
    items = container.getElementsByClassName('grid-item');

    for (i = 0; i < items.length; i++) {
      title = items[i].getAttribute('data-title');
      tags = items[i].getAttribute('data-tags');

      txtValue = title || '';
      tagValue = tags || '';

      if (txtValue.toUpperCase().indexOf(filter) > -1 || tagValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
</script>