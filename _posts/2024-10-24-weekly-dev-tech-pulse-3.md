---
layout: splash
classes: wide
modified: 2024-10-24
excerpt: "<br>"
author: Serdarcan Buyukdereli
title: Weekly Dev Tech Pulse#3
author_profile: false
comments: true
categories:
- Weekly
header:
   overlay_color: "#5e616c"
   overlay_image: https://serdarcanb.github.io/assets/images/weekly-dev-tech-pulse.png
   overlay_filter: .8
   teaser: https://serdarcanb.github.io/assets/images/weekly-dev-tech-pulse.png
tags:
- Weekly
- DevOps
- Tech

excerpt: As a developer, stay hungry for learning and aim to solve big problems with simple solutions. Level up with new tech, but never forget the basics; a strong foundation will always keep you at the top.

pinned: false
toc: false
toc_label: Weekly Dev Tech Pulse
toc_icon: "cog"
image: https://serdarcanb.github.io/assets/images/weekly-dev-tech-pulse.png
seo_title: Weekly Dev Tech Pulse
seo_description: Stay updated with Weekly Dev Tech Pulse, your go-to source for the latest developer tools, tech articles, and open-source repos. Discover fresh insights and stay ahead in the world of software development.

---

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
  /* Genel tasarım iyileştirmeleri */
  body {
    background-color: #f5f5f5;
    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
  }

  .newsletter-header {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .section-title {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: bold;
    color: #333;
  }

  .card {
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: #fff;
    margin-bottom: 30px;
  }

  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .card-title {
    font-size: 22px;
    font-weight: bold;
    color: #0056b3;
  }

  .card-text {
    font-size: 16px;
    color: #666;
  }

  .tags a {
    margin-right: 10px;
    font-size: 14px;
  }

  .btn-outline-light:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    color: white;
  }

  .small-image {
    max-width: 70px; /* Resim genişliği küçültüldü */
    height: auto; /* Oranlarını koruyarak yüksekliği otomatik ayarla */
  }
  /* Responsive ayarlar */
  @media (max-width: 576px) {
    .card-title {
      font-size: 18px;
    }

    .card-text {
      font-size: 14px;
    }

    .section-title {
      font-size: 24px;
    }

    .tags a {
      font-size: 12px;
    }

    .card img {
      max-width: 80px; /* Küçük ekranlarda resim küçültüldü */
    }
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 26px;
    }

    .card-title {
      font-size: 20px;
    }

    .card-text {
      font-size: 15px;
    }

    .tags a {
      font-size: 13px;
    }
  }

</style>

<div class="container">

  <!-- Header -->
  <div class="newsletter-header">
    <h1 class="text-uppercase fw-bold">Weekly Dev Tech Pulse</h1>
    <p class="lead">*Weekly DevOps & Developer News and Highlights*</p>
    <p><strong>Date:</strong> Week of October 24th, 2024</p>
  </div>

  <!-- Top GitHub Projects -->
  <h2 class="section-title text-center">🔥 Top GitHub Projects of the Week</h2>

  <!-- Project Card 1 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://serdarcanb.github.io/assets/images/logos/github.svg" class="img-fluid rounded-start" alt="GitHub Logo">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">n8n-io/n8n</h5>
          <p class="card-text">n8n is an open-source automation platform that allows users to create workflows and automate processes between various applications and data sources without the need for coding.</p>
          <p class="card-text tags"><strong>Tags:</strong> 
            <a href="#" class="badge bg-primary text-decoration-none">no-code</a>
            <a href="#" class="badge bg-primary text-decoration-none">open-source</a>
            <a href="#" class="badge bg-primary text-decoration-none">integration</a>
            <a href="#" class="badge bg-primary text-decoration-none">workflow-automation</a>
            <a href="#" class="badge bg-primary text-decoration-none">self-hosted</a>
          </p>
          <a href="https://github.com/n8n-io/n8n" class="btn btn-outline-dark btn-sm">View the Project</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Card 2 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://serdarcanb.github.io/assets/images/logos/github.svg" class="img-fluid rounded-start" alt="GitHub Logo">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">glanceapp/glance</h5>
          <p class="card-text">GlanceApp is an open-source platform that provides real-time analytics and insights through a unified dashboard, helping teams track productivity and collaborate more effectively.</p>
          <p class="card-text tags"><strong>Tags:</strong> 
            <a href="#" class="badge bg-primary text-decoration-none">dashboard</a>
            <a href="#" class="badge bg-primary text-decoration-none">open-source</a>
            <a href="#" class="badge bg-primary text-decoration-none">self-hosted</a>
            <a href="#" class="badge bg-primary text-decoration-none">productivity</a>
          </p>
          <a href="https://github.com/glanceapp/glance" class="btn btn-outline-dark btn-sm">View the Project</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Card 3 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://serdarcanb.github.io/assets/images/logos/github.svg" class="img-fluid rounded-start" alt="GitHub Logo">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">toeverything/AFFiNE</h5>
          <p class="card-text">AFFiNE is an open-source, next-generation knowledge management and collaboration tool that combines note-taking, mind mapping, and task management to boost productivity and streamline workflows.</p>
          <p class="card-text tags"><strong>Tags:</strong> 
            <a href="#" class="badge bg-primary text-decoration-none">open-source</a>
            <a href="#" class="badge bg-primary text-decoration-none">note-taking</a>
            <a href="#" class="badge bg-primary text-decoration-none">knowledge-management</a>
            <a href="#" class="badge bg-primary text-decoration-none">productivity</a>
            <a href="#" class="badge bg-primary text-decoration-none">self-hosted</a>
          </p>
          <a href="https://github.com/toeverything/AFFiNE" class="btn btn-outline-dark btn-sm">View the Project</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Card 4 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://serdarcanb.github.io/assets/images/logos/github.svg" class="img-fluid rounded-start" alt="GitHub Logo">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">CorentinTh/it-tools</h5>
          <p class="card-text">it-tools is an open-source, web-based collection of simple yet powerful utilities designed to assist developers with various tasks, enhancing productivity and efficiency. </p>
          <p class="card-text tags"><strong>Tags:</strong> 
            <a href="#" class="badge bg-primary text-decoration-none">open-source</a>
            <a href="#" class="badge bg-primary text-decoration-none">web-based</a>
            <a href="#" class="badge bg-primary text-decoration-none">developer-tools</a>
            <a href="#" class="badge bg-primary text-decoration-none">productivity</a>
            <a href="#" class="badge bg-primary text-decoration-none">self-hosted</a>
          </p>
          <a href="https://github.com/CorentinTh/it-tools" class="btn btn-outline-dark btn-sm">View the Project</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Card 5 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://serdarcanb.github.io/assets/images/logos/github.svg" class="img-fluid rounded-start" alt="GitHub Logo">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">Cinnamon/kotaemon</h5>
          <p class="card-text">Kotaemon is an open-source, RAG-based tool that allows users to interact with their documents through a chatbot interface, enabling efficient information retrieval and processing directly from document content. </p>
          <p class="card-text tags"><strong>Tags:</strong> 
            <a href="#" class="badge bg-primary text-decoration-none">open-source</a>
            <a href="#" class="badge bg-primary text-decoration-none">document-chatbot</a>
            <a href="#" class="badge bg-primary text-decoration-none">ai</a>
            <a href="#" class="badge bg-primary text-decoration-none">retrieval-augmented-generation</a>
            <a href="#" class="badge bg-primary text-decoration-none">self-hosted</a>
          </p>
          <a href="https://github.com/Cinnamon/kotaemon" class="btn btn-outline-dark btn-sm">View the Project</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Updates & Innovations Section -->
  <h2 class="section-title text-center">📢 Updates & Innovations</h2>

  <!-- Update Card 1 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2512/2512773.png" class="img-fluid rounded-start small-image" alt="Update Icon">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">siyuan-note/siyuan v3.1.10</h5>
          <a href="https://github.com/siyuan-note/siyuan/releases/tag/v3.1.10" class="btn btn-outline-primary btn-sm">Get the Changelogs</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Update Card 2 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2512/2512773.png" class="img-fluid rounded-start small-image" alt="Update Icon">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">formbricks/formbricks v2.5.0</h5>
          <a href="https://github.com/formbricks/formbricks/releases/tag/v2.5.0" class="btn btn-outline-primary btn-sm">Get the Changelogs</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Articles Section -->
  <h2 class="section-title text-center">📝 Featured Articles</h2>

  <!-- Article Card 1 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://static.learnk8s.io/49eee323d8ec36a695e971201822a487.svg" class="img-fluid rounded-start" alt="Article Image">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">Designing and testing a highly available Kafka cluster on Kubernetes</h5>
          <p class="card-text">Learn how to set up and manage a highly available (HA) Kafka cluster on Kubernetes, perfect for addressing Kafka’s challenges in a scalable environment.</p>
          <a href="https://learnk8s.io/kafka-ha-kubernetes" class="btn btn-outline-success btn-sm">Read the full article</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Article Card 2 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1728918386211/cf6fd053-453e-4257-abcd-16942c345845.png" class="img-fluid rounded-start" alt="Article Image">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">How to Self-host a Container Registry</h5>
          <p class="card-text">Discover how to self-host a container registry, enabling you to securely manage and store your Docker images on your own infrastructure. Perfect for developers looking to maintain control over their containerized applications.</p>
          <a href="https://www.freecodecamp.org/news/how-to-self-host-a-container-registry" class="btn btn-outline-success btn-sm">Read the full article</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Article Card 3 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727928217219/f271e314-d80d-4061-8b3a-b99f52fcb03e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" class="img-fluid rounded-start" alt="Article Image">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">First eBPF program</h5>
          <p class="card-text">Learn how to write your first eBPF program, a powerful tool for monitoring and enhancing Linux kernel behavior. Perfect for developers interested in low-level performance tuning and security.</p>
          <a href="https://prateek-singh.hashnode.dev/first-ebpf-program" class="btn btn-outline-success btn-sm">Read the full article</a>
        </div>
      </div>
    </div>
  </div>

  <h2 class="section-title text-center">🎧 Podcasts & Videos</h2>

  <!-- Videos Card 1 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" class="img-fluid rounded-start" alt="Video Image">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">How Uber Handles TRILLIONS of Transactions</h5>
          <p class="card-text">How did Uber’s engineers manage trillions of transactions seamlessly? 🚀 By rebuilding their payment system with microservices, immutable ledgers, and advanced indexing, Uber enhanced reliability and ensured an uninterrupted user experience. Watch the video for all the details! 👇</p>
          <a href="https://www.youtube.com/watch?v=qGAPokt6Buo" class="btn btn-outline-danger btn-sm">Watch / Listen</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Tools & Resources Section -->
  <h2 class="section-title text-center">🚀 Tools & Resources</h2>

  <!-- Tool Card 1 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://private-user-images.githubusercontent.com/5467111/338042397-a5b465b6-065e-43c4-ac66-bf8a502d5bae.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjk3OTYwNzMsIm5iZiI6MTcyOTc5NTc3MywicGF0aCI6Ii81NDY3MTExLzMzODA0MjM5Ny1hNWI0NjViNi0wNjVlLTQzYzQtYWM2Ni1iZjhhNTAyZDViYWUucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MTAyNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDEwMjRUMTg0OTMzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDZkYmE2MjBiNjcyNjI1ZDFjMTM1M2FmNzA0N2UzZmQxNzNmNDg0YzAwZTVhMTIzOTkzNjUxMzZhYTM4ZTE2ZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.e7OmXIMZE8-ee_4YdWiITpS4kJnCQF9BsJEq0O2DV6o" class="img-fluid rounded-start" alt="Tool Image">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">Ophiuchi - Localhost SSL Proxy Server Manager</h5>
          <p class="card-text">A local https proxy server using docker as backend.</p>
          <a href="https://github.com/apilylabs/ophiuchi-desktop" class="btn btn-outline-info btn-sm">Explore the Tool</a>
        </div>
      </div>
    </div>
  </div>


  <!-- Tool Card 2 -->
  <div class="card p-4">
    <div class="row g-0">
      <div class="col-12 col-sm-3 col-md-2 d-flex align-items-center">
        <img src="https://github.com/maoserr/epublifier/raw/develop/docs/nu.gif?raw=true" class="img-fluid rounded-start" alt="Tool Image">
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <div class="card-body">
          <h5 class="card-title">Epublifier</h5>
          <p class="card-text">Epublifier is a tool that extracts a list of HTML pages from websites and compiles them into an ePub book, with customizable parsing options for advanced users who can write JavaScript.</p>
          <a href="https://github.com/maoserr/epublifier" class="btn btn-outline-info btn-sm">Explore the Tool</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Stay Connected Section -->
  <h2 class="section-title text-center">🔗 Stay Connected</h2>

  <div class="text-center mb-5">
    <a href="mailto:serdarcanbuyukdereli@gmail.com" class="btn btn-outline-dark">Contact Me via Email</a>
    <a href="https://serdarcanb.github.io" class="btn btn-outline-dark">Visit My Website</a>
    <a href="https://github.com/serdarcanb" class="btn btn-outline-dark">GitHub Profile</a>
    <a href="https://linkedin.com/in/serdarcanbuyukdereli/" class="btn btn-outline-dark">LinkedIn Profile</a>
    <a href="https://dly.to/pK9N9ZBBwrP" class="btn btn-outline-dark">Daily Dev</a>
  </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>