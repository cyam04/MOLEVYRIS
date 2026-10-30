/**
 * MOLEVYRIS — Search & Matrix Category Filter Engine (v2.0 Unified)
 * 
 * Fixes Issue 01 from Audit:
 * Maintains unified state for both `activeSearchQuery` and `activeCategory`
 * so search querying and category filtering work harmoniously together
 * without overriding each other's constraints.
 */
(function () {
  'use strict';

  var searchBtn = document.getElementById('searchBtn');
  var searchDrawer = document.getElementById('searchDrawer');
  var searchInput = document.getElementById('projectSearchInput');
  var searchCloseBtn = document.getElementById('searchCloseBtn');
  var projectCards = document.querySelectorAll('.project');
  var matrixRows = document.querySelectorAll('#matrixTableBody tr');
  var filterBtns = document.querySelectorAll('.filter-btn');

  // Shared Filter State
  var activeSearchQuery = '';
  var activeCategory = 'all';

  /**
   * Evaluates both search query and category constraints simultaneously
   */
  function applyFilters() {
    // 1. Filter Evidence Projects (by search query)
    if (projectCards && projectCards.length) {
      projectCards.forEach(function (card) {
        var dataText = (card.getAttribute('data-title') || '').toLowerCase();
        var cardText = (card.textContent || card.innerText || '').toLowerCase();
        var match = !activeSearchQuery ||
          dataText.indexOf(activeSearchQuery) !== -1 ||
          cardText.indexOf(activeSearchQuery) !== -1;
        card.style.display = match ? 'flex' : 'none';
      });
    }

    // 2. Filter Skills Matrix Rows (by BOTH search query AND active category)
    if (matrixRows && matrixRows.length) {
      matrixRows.forEach(function (row) {
        var rowText = (row.textContent || row.innerText || '').toLowerCase();
        var cat = row.getAttribute('data-cat') || '';

        var matchSearch = !activeSearchQuery || rowText.indexOf(activeSearchQuery) !== -1;
        var matchCategory = (activeCategory === 'all' || cat === activeCategory);

        if (matchSearch && matchCategory) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  }

  // Search Drawer Toggle
  if (searchBtn && searchDrawer) {
    searchBtn.addEventListener('click', function () {
      var isHidden = searchDrawer.style.display === 'none' || !searchDrawer.style.display;
      searchDrawer.style.display = isHidden ? 'block' : 'none';
      if (isHidden && searchInput) {
        searchInput.focus();
      }
    });
  }

  // Close Search Drawer (Clears query and restores category-only view)
  if (searchCloseBtn && searchDrawer) {
    searchCloseBtn.addEventListener('click', function () {
      searchDrawer.style.display = 'none';
      if (searchInput) searchInput.value = '';
      activeSearchQuery = '';
      applyFilters();
    });
  }

  // Keyboard accessibility: Escape closes search drawer
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchDrawer && searchDrawer.style.display === 'block') {
      searchDrawer.style.display = 'none';
      if (searchInput) searchInput.value = '';
      activeSearchQuery = '';
      applyFilters();
    }
  });

  // Real-time Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      activeSearchQuery = (e.target.value || '').toLowerCase().trim();
      applyFilters();
    });
  }

  // Category Filter Pills Listener
  if (filterBtns && filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter') || 'all';
        applyFilters();
      });
    });
  }

  // Initial apply
  applyFilters();
})();
