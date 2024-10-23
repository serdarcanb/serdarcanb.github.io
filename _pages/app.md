---
layout: default
title: App
permalink: /app/
---

<head>
  <link rel="stylesheet" href="{{ '/assets/css/app-page.css' | relative_url }}">
  <script src="https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<!-- Dark/Light Mode Toggle -->
<button id="modeToggle" class="btn btn-outline-secondary mt-3">Toggle Dark/Light Mode</button>

<div class="container mt-4">
  <input type="text" class="form-control mb-4" id="searchInput" placeholder="Uygulamaları ara..." onkeyup="searchApps()">
  
  <!-- Listbox for Filtering -->
  <div class="mb-4">
    <select class="form-select" aria-label="Filter by Category">
      <option selected>Filter by Category</option>
      <option value="1">OpenSource</option>
      <option value="2">Free</option>
      <option value="3">Pricing</option>
    </select>

    <select class="form-select mt-2" aria-label="Filter by Tags">
      <option selected>Filter by Tags</option>
      <option value="1">Tag1</option>
      <option value="2">Tag2</option>
    </select>
  </div>

  <div class="row app-page">
    {% for item in site.software %}
      <div class="col-md-4 col-sm-6 grid-item" data-title="{{ item.title | escape }}" data-tags="{{ item.tags | join: ', ' | escape }}">
        <div class="card h-100 shadow-sm">
          <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo card-img-top mx-auto mt-3">
          <div class="card-body text-center">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.description }}</p>

            <div class="tags">
              {% for tag in item.tags %}
                <span class="badge bg-secondary">{{ tag }}</span>
              {% endfor %}
            </div>

            <div class="github-info mt-2">
              {% if item.github_url %}
                <a href="{{ item.github_url }}" target="_blank">
                  GitHub <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo"/>
                </a>
              {% endif %}
              {% if item.website_url %}
                <a href="{{ item.website_url }}" target="_blank" class="text-muted small">Website</a>
              {% endif %}
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script>
  // Dark/Light Mode Toggle
  const modeToggle = document.getElementById('modeToggle');
  modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });
</script>