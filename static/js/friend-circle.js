document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("[data-fc-list]");
  if (!list) return;

  const items = Array.from(list.querySelectorAll("[data-fc-item]"));
  const searchInput = document.querySelector("[data-fc-search]");
  const friendSelect = document.querySelector("[data-fc-friend]");
  const loadMoreBtn = document.querySelector("[data-fc-more]");
  const emptyMessage = document.querySelector("[data-fc-empty]");

  const pageSize = 8;
  let visibleCount = pageSize;

  function applyFilter() {
    const keyword = (searchInput?.value || "").trim().toLowerCase();
    const friend = (friendSelect?.value || "").trim();

    let filtered = items.filter(item => {
      const text = (item.dataset.text || "").toLowerCase();
      const matchKeyword = !keyword || text.includes(keyword);
      const matchFriend = !friend || (item.dataset.friend || "") === friend;
      return matchKeyword && matchFriend;
    });

    list.innerHTML = "";
    filtered.slice(0, visibleCount).forEach(item => list.appendChild(item));

    if (filtered.length === 0) {
      emptyMessage?.classList.remove("is-hidden");
      loadMoreBtn?.parentElement?.classList.add("is-hidden");
    } else {
      emptyMessage?.classList.add("is-hidden");
      const hasMore = visibleCount < filtered.length;
      if (loadMoreBtn) {
        loadMoreBtn.parentElement.classList.toggle("is-hidden", !hasMore);
      }
    }

    if (visibleCount > filtered.length) visibleCount = filtered.length;
  }

  searchInput?.addEventListener("input", () => {
    visibleCount = pageSize;
    applyFilter();
  });

  friendSelect?.addEventListener("change", () => {
    visibleCount = pageSize;
    applyFilter();
  });

  loadMoreBtn?.addEventListener("click", () => {
    visibleCount += pageSize;
    applyFilter();
  });

  applyFilter();
});
