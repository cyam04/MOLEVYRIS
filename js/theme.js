/**
 * MOLEVYRIS — Theme Management Engine
 * Handles Day (Light) / Night (Dark) mode switching, persistence via localStorage,
 * system color scheme preference detection, and dynamic SVG icon switching.
 */
(function () {
  'use strict';

  var themeToggle = document.getElementById('themeToggle');
  var sunIcon = themeToggle ? themeToggle.querySelector('.sun-icon') : null;
  var moonIcon = themeToggle ? themeToggle.querySelector('.moon-icon') : null;
  var metaThemeColor = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0b1411' : '#f8f8f3');
    }
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
    try {
      localStorage.setItem('molevyris_theme', theme);
    } catch (e) { }
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem('molevyris_theme');
  } catch (e) { }

  if (!savedTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      savedTheme = 'dark';
    } else {
      savedTheme = 'light';
    }
  }
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();

