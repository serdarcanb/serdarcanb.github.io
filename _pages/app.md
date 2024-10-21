---
layout: default
title: App
permalink: /app/
---

<head>
  <!-- Stil ve script dosyaları -->
  <link rel="stylesheet" href="{{ '/assets/css/app-page.css' | relative_url }}">
  <script src="https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>

<input type="text" id="searchInput" placeholder="Uygulamaları ara..." onkeyup="searchApps()">

<div class="app-page">
  <div class="grid-container">
    {% for item in site.software %}
      <div class="grid-item" onclick="toggleDetails(this)" data-title="{{ item.title | escape }}" data-tags="{{ item.tags | join: ', ' | escape }}" data-description="{{ item.description | escape }}">
        <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo"/>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <!-- Etiketler ve GitHub/Website detayları için gizli bölüm -->
        <div class="details">
          <p class="tags">Etiketler:
            {% for tag in item.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </p>
          <p class="github-info">
            {% if item.github_url %}
              <a href="{{ item.github_url }}" target="_blank">GitHub</a>
              <img src="https://img.shields.io/github/stars/{{ item.github_url | remove: 'https://github.com/' }}?style=social" alt="GitHub stars"/>
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
    var allItems = document.querySelectorAll('.grid-item');
    allItems.forEach(function(item) {
      if (item !== element) {
        item.classList.remove('active');
      }
    });
    element.classList.toggle('active');
  }

  document.addEventListener("DOMContentLoaded", function() {
    var appElements = document.querySelectorAll('.grid-item');
    var appData = [];
    appElements.forEach(function(element) {
      appData.push({
        title: element.getAttribute('data-title'),
        tags: element.getAttribute('data-tags').split(', '),
        description: element.getAttribute('data-description'),
        element: element
      });
    });

    var fuseOptions = {
      keys: ['title', 'tags', 'description'],
      threshold: 0.3,
    };
    var fuse = new Fuse(appData, fuseOptions);

    // Fix search functionality
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
      var input = this.value;
      var results = fuse.search(input);
      appElements.forEach(function(el) {
        el.style.display = 'none';
      });
      if (results.length > 0) {
        results.forEach(function(result) {
          result.item.element.style.display = 'block';
        });
      } else if (input === '') {
        appElements.forEach(function(el) {
          el.style.display = 'block';
        });
      }
    });
  });
</script>