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
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<div class="container mt-4">
  <input type="text" class="form-control mb-4" id="searchInput" placeholder="Search apps..." onkeyup="searchApps()">

  <div class="row app-page">
    {% for item in site.software %}
      <div class="col-md-3 col-sm-6 grid-item" data-title="{{ item.title | escape }}" data-tags="{{ item.tags | join: ', ' | escape }}" data-description="{{ item.description | escape }}">
        <div class="card h-100 shadow-sm">
          <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo card-img-top mx-auto mt-3" style="width: 100px;">
          <div class="card-body text-center">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.description }}</p>
            <!-- Etiketler ve GitHub/Website detayları için gizli bölüm -->
            <div class="details">
              <p class="tags">Tags:
                {% for tag in item.tags %}
                  <span class="badge bg-dark">{{ tag }}</span>
                {% endfor %}
              </p>

              <!-- GitHub ve Website logoları -->
              {% if item.github_url %}
                <a href="{{ item.github_url }}" target="_blank" class="d-inline-flex align-items-center">
                  <img src="https://serdarcanb.github.io/assets/images/logos/github.svg" alt="GitHub" style="width: 16px; height: 16px; margin-right: 8px;">
                  <img src="https://img.shields.io/github/stars/{{ item.github_url | remove: 'https://github.com/' }}?style=social" alt="GitHub stars" style="margin-left: 8px;">
                </a>
              {% endif %}
              
              {% if item.website_url %}
                <a href="{{ item.website_url }}" target="_blank" class="d-inline-flex align-items-center mt-2">
                  <img src="https://serdarcanb.github.io/assets/images/mylogo.svg" alt="Website" style="width: 24px; height: 24px; margin-right: 8px;">
                </a>
              {% endif %}
            </div>
          </div>
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