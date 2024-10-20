---
layout: default
title: App
permalink: /app/
---
<head>
  <link rel="stylesheet" href="{{ '/assets/css/app-page.css' | relative_url }}">
</head>
<div class="app-page">
  <div class="grid-container">
    {% for item in site.software %}
      <div class="grid-item" onclick="toggleDetails(this)">
        <img src="{{ item.logo }}" alt="{{ item.title }} logo" class="project-logo"/>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <!-- Etiketler ve GitHub/Website detayları için gizli bölüm -->
        <div class="details" style="display: none;">
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

<!-- JavaScript kodu burada -->
<script>
  function toggleDetails(element) {
    // Tıklanan öğeyi aktif hale getir (genişlet)
    element.classList.toggle('active');
  }
</script>