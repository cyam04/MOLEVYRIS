/**
 * MOLEVYRIS — Search & Matrix Category Filter Engine (v3.0 Production)
 * 
 * Fixes Issue 1 (Search + Category Filter Conflict):
 * - Unified reactive state for both `activeSearchQuery` and `activeCategory`
 * - Search and category constraints evaluate simultaneously without collisions
 * - Dynamic "No Results Found" empty state with 1-click filter reset
 * - Keyboard navigation (Escape closes drawer, Enter jumps to results)
 * - Restores pure CSS stylesheet layout without hardcoded inline flex overrides
 */

(function () {
  'use strict';

  var searchBtn = document.getElementById('searchBtn');
  var searchDrawer = document.getElementById('searchDrawer');
  var searchInput = document.getElementById('projectSearchInput');
  var searchCloseBtn = document.getElementById('searchCloseBtn');
  var projectCards = document.querySelectorAll('.project');
  var matrixTableBody = document.getElementById('matrixTableBody');
  var matrixRows = document.querySelectorAll('#matrixTableBody tr');
  var filterBtns = document.querySelectorAll('.filter-btn');

  // Shared Filter State
  var activeSearchQuery = '';
  var activeCategory = 'all';

  // Create No Results Row for Matrix Table
  var noResultsRow = document.createElement('tr');
  noResultsRow.id = 'matrixNoResultsRow';
  noResultsRow.style.display = 'none';
  noResultsRow.innerHTML = `
    <td colspan="3" style="text-align: center; padding: 2.2rem 1rem; color: var(--muted); font-size: 0.92rem;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.6rem;">
        <span style="font-size: 1.5rem;">🔍</span>
        <strong style="color: var(--ink);">No matching analytical skills found</strong>
        <span id="noResultsDetail">No techniques match your active search and category filters.</span>
        <button type="button" id="btnResetFilters" style="margin-top: 0.4rem; background: var(--green-tint); color: var(--green); border: 1px solid var(--green-tint-border); padding: 0.35rem 0.85rem; border-radius: 6px; font-size: 0.82rem; font-weight: 600; cursor: pointer;">
          Reset All Filters
        </button>
      </div>
    </td>
  `;
  if (matrixTableBody) {
    matrixTableBody.appendChild(noResultsRow);
    var resetBtn = noResultsRow.querySelector('#btnResetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllFilters);
    }
  }

  /**
   * Evaluates both search query and category constraints simultaneously
   */
  function applyFilters() {
    // 1. Filter Evidence Project Cards
    var visibleProjectsCount = 0;
    if (projectCards && projectCards.length) {
      projectCards.forEach(function (card) {
        var dataText = (card.getAttribute('data-title') || '').toLowerCase();
        var cardText = (card.textContent || card.innerText || '').toLowerCase();
        var match = !activeSearchQuery ||
          dataText.indexOf(activeSearchQuery) !== -1 ||
          cardText.indexOf(activeSearchQuery) !== -1;

        card.style.display = match ? '' : 'none';
        if (match) visibleProjectsCount++;
      });
    }

    // 2. Filter Skills Matrix Rows (by BOTH activeCategory AND activeSearchQuery)
    var visibleRowsCount = 0;
    if (matrixRows && matrixRows.length) {
      matrixRows.forEach(function (row) {
        // Skip the no-results row itself
        if (row.id === 'matrixNoResultsRow') return;

        var rowText = (row.textContent || row.innerText || '').toLowerCase();
        var cat = row.getAttribute('data-cat') || '';

        var matchSearch = !activeSearchQuery || rowText.indexOf(activeSearchQuery) !== -1;
        var matchCategory = (activeCategory === 'all' || cat === activeCategory);

        if (matchSearch && matchCategory) {
          row.style.display = '';
          visibleRowsCount++;
        } else {
          row.style.display = 'none';
        }
      });
    }

    // 3. Handle Empty State
    if (noResultsRow) {
      if (visibleRowsCount === 0) {
        noResultsRow.style.display = '';
        var detailEl = document.getElementById('noResultsDetail');
        if (detailEl) {
          var catLabel = activeCategory === 'all' ? 'all categories' : activeCategory;
          detailEl.textContent = 'No skills match "' + activeSearchQuery + '" in ' + catLabel + '.';
        }
      } else {
        noResultsRow.style.display = 'none';
      }
    }
  }

  function resetAllFilters() {
    activeSearchQuery = '';
    activeCategory = 'all';
    if (searchInput) searchInput.value = '';
    if (filterBtns && filterBtns.length) {
      filterBtns.forEach(function (btn) {
        if (btn.getAttribute('data-filter') === 'all') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
    applyFilters();
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

  // Close Search Drawer
  if (searchCloseBtn && searchDrawer) {
    searchCloseBtn.addEventListener('click', function () {
      searchDrawer.style.display = 'none';
      if (searchInput) searchInput.value = '';
      activeSearchQuery = '';
      applyFilters();
    });
  }

  // Keyboard accessibility
  document.addEventListener('keydown', function (e) {
    // Escape closes search drawer
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

    // Enter key jumps to matrix results
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var matrixSection = document.getElementById('matrix');
        if (matrixSection) {
          matrixSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
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

  // Expose for external control (e.g. from evidence modal)
  window.MolevyrisSearch = {
    setCategory: function (cat) {
      activeCategory = cat || 'all';
      if (filterBtns && filterBtns.length) {
        filterBtns.forEach(function (b) {
          if (b.getAttribute('data-filter') === activeCategory) b.classList.add('active');
          else b.classList.remove('active');
        });
      }
      applyFilters();
    },
    reset: resetAllFilters
  };
})();
