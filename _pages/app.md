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
  <!-- New Filters and Search Row -->
  <div class="row mb-4">
    <div class="col-12 text-center">
      <h1>Self-Hosted Software and Apps</h1>
    </div>
    <div class="col-md-12">
      <div class="d-flex justify-content-between align-items-center">
        <!-- Tabs -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-secondary active" id="softwareTab" onclick="filterCategory('software')">SOFTWARE</button>
          <button type="button" class="btn btn-outline-secondary" id="companionsTab" onclick="filterCategory('companions')">COMPANIONS</button>
          <button type="button" class="btn btn-outline-secondary" id="activitypubTab" onclick="filterCategory('activitypub')">ACTIVITYPUB</button>
        </div>
        <!-- Toggles -->
        <div class="d-flex align-items-center">
          <label class="form-check-label mr-2">
            <input type="checkbox" id="detailsToggle" class="form-check-input">
            Details
          </label>
          <label class="form-check-label">
            <input type="checkbox" id="closedSourceToggle" class="form-check-input">
            Closed Source
          </label>
        </div>
      </div>
      <!-- Tags, Platform, Sort, and Search -->
      <div class="d-flex justify-content-between mt-4">
        <select id="tagsSelect" class="form-control">
          <option value="all">All Tags</option>
          {% for tag in site.tags %}
          <option value="{{ tag }}">{{ tag }}</option>
          {% endfor %}
        </select>
        <select id="platformSelect" class="form-control">
          <option value="all">All Platforms</option>
          <option value="desktop">Desktop</option>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
        </select>
        <select id="sortSelect" class="form-control">
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
        <input type="text" class="form-control" id="searchInput" placeholder="Enter keyword..." onkeyup="searchApps()">
      </div>
    </div>
  </div>

  <!-- Dynamic Content -->
  <div class="row app-page">
    {% for item in site.software %}
    <div class="col-md-3 col-sm-6 grid-item" data-category="{{ item.category }}" data-title="{{ item.title }}" data-tags="{{ item.tags | join: ', ' }}" data-platform="{{ item.platform }}" data-closed-source="{{ item.closed_source }}" data-description="{{ item.description }}">
      <div class="card h-100 shadow-sm">
        <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo card-img-top mx-auto mt-3" style="width: 100px;">
        <div class="card-body text-center">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-text">{{ item.description }}</p>
          <div class="details">
            <p class="tags">Tags: 
              {% for tag in item.tags %}
              <span class="badge blue-400">{{ tag }}</span>
              {% endfor %}
            </p>
            {% if item.github_url %}
            <a href="{{ item.github_url }}" target="_blank">GitHub</a>
            {% elsif item.website_url %}
            <a href="{{ item.website_url }}" target="_blank">Website</a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<script>
  // Toggle Details (Expand/Collapse functionality)
  function toggleDetails(element) {
    var allItems = document.querySelectorAll('.grid-item');
    allItems.forEach(function(item) {
      if (item !== element) {
        item.classList.remove('active');
      }
    });
    element.classList.toggle('active');
  }

  // Document ready for filtering, search, and expand functionality
  document.addEventListener("DOMContentLoaded", function() {
    var appElements = document.querySelectorAll('.grid-item');
    var appData = [];
    appElements.forEach(function(element) {
      appData.push({
        title: element.getAttribute('data-title'),
        tags: element.getAttribute('data-tags').split(', '),
        category: element.getAttribute('data-category'),
        description: element.getAttribute('data-description'),
        element: element
      });
    });

    // Fuse.js options for searching
    var fuseOptions = {
      keys: ['title', 'tags', 'description'],
      threshold: 0.3,
    };
    var fuse = new Fuse(appData, fuseOptions);

    // Search functionality
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

    // Filtering by Tags
    document.getElementById('tagsSelect').addEventListener('change', function() {
      filterByTags(this.value);
    });

    function filterByTags(tag) {
      appElements.forEach(function(element) {
        var tags = element.getAttribute('data-tags').split(', ');
        if (tag === 'all' || tags.includes(tag)) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }

    // Filtering by Platform
    document.getElementById('platformSelect').addEventListener('change', function() {
      filterByPlatform(this.value);
    });

    function filterByPlatform(platform) {
      appElements.forEach(function(element) {
        if (platform === 'all' || element.getAttribute('data-platform') === platform) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }

    // Filtering by Category (Software, Companions, ActivityPub)
    function filterCategory(category) {
      appElements.forEach(function(element) {
        var elementCategory = element.getAttribute('data-category');
        if (category === 'all' || elementCategory === category) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }

    // Closed Source Toggle
    document.getElementById('closedSourceToggle').addEventListener('change', function() {
      var showClosedSource = this.checked;
      appElements.forEach(function(element) {
        if (showClosedSource || element.getAttribute('data-closed-source') === 'false') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    });
  });
</script>