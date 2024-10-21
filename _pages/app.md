---
layout: default
title: App
permalink: /app/
---
<head>
  <link rel="stylesheet" href="{{ '/assets/css/app-page.css' | relative_url }}">
  <script src="https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js"></script>
</head>

<input type="text" id="searchInput" placeholder="Uygulamaları ara..." onkeyup="searchApps()">

<div class="app-page">
  <div class="grid-container" id="gridContainer">
    <!-- JavaScript ile doldurulacak -->
  </div>
</div>

<script>
  var appData = [
    {% for item in site.software %}
      {
        "title": "{{ item.title | escape }}",
        "tags": [{% for tag in item.tags %}"{{ tag }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
        "description": "{{ item.description | escape }}",
        "logo": "{{ item.logo }}",
        "github_url": "{{ item.github_url }}",
        "website_url": "{{ item.website_url }}",
        "stars": "{{ item.stars }}",
        "html": `{% raw %}{{% endraw %}<div class="grid-item" onclick="toggleDetails(this)">
          <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo"/>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
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
        </div>}`
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  document.addEventListener("DOMContentLoaded", function() {
    renderApps(appData);
  });

  function renderApps(data) {
    var container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Önce temizle
    if (data.length > 0) {
      data.forEach(function(app) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = app.html.trim();
        var appElement = tempDiv.firstChild;
        container.appendChild(appElement);
      });
    } else {
      container.innerHTML = '<p>Aradığınız kriterlere uygun uygulama bulunamadı.</p>';
    }
  }

  var fuseOptions = {
    keys: ['title', 'tags', 'description'],
    threshold: 0.4, // Arama hassasiyeti
  };

  var fuse = new Fuse(appData, fuseOptions);

  function searchApps() {
    var input = document.getElementById('searchInput').value;
    if (input) {
      var results = fuse.search(input);
      var resultData = results.map(function(result) {
        return result.item;
      });
      renderApps(resultData);
    } else {
      renderApps(appData);
    }
  }

  function toggleDetails(element) {
    element.classList.toggle('active');
  }
</script>