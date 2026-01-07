/* Lightweight leaderboard logic: render, sort, filter, realtime updates */

// initial sample data (closer to the provided screenshot)
let leaderboardData = [
  {
    rank: 1,
    name: "Sarah Johnson",
    roll: "CS-2023-001",
    score: 98,
    time: 45,
    accuracy: 99,
    tests: 15,
  },
  {
    rank: 2,
    name: "Michael Chen",
    roll: "CS-2023-045",
    score: 96,
    time: 48,
    accuracy: 97,
    tests: 14,
  },
  {
    rank: 3,
    name: "Emma Davis",
    roll: "CS-2023-089",
    score: 95,
    time: 50,
    accuracy: 96,
    tests: 15,
  },
  {
    rank: 4,
    name: "James Wilson",
    roll: "CS-2023-123",
    score: 94,
    time: 52,
    accuracy: 95,
    tests: 13,
  },
  {
    rank: 5,
    name: "Olivia Martinez",
    roll: "CS-2023-156",
    score: 93,
    time: 55,
    accuracy: 94,
    tests: 14,
  },
  {
    rank: 6,
    name: "Student 6",
    roll: "CS-2023-200",
    score: 92,
    time: 58,
    accuracy: 93,
    tests: 12,
  },
  {
    rank: 7,
    name: "Student 7",
    roll: "CS-2023-201",
    score: 91,
    time: 60,
    accuracy: 92,
    tests: 12,
  },
  {
    rank: 8,
    name: "Student 8",
    roll: "CS-2023-202",
    score: 90,
    time: 62,
    accuracy: 91,
    tests: 12,
  },
  {
    rank: 9,
    name: "Student 9",
    roll: "CS-2023-203",
    score: 89,
    time: 65,
    accuracy: 90,
    tests: 12,
  },
];

let filtered = [...leaderboardData];
let currentSort = "rank";

// DOM refs
const tableBody = document.getElementById("tableBody");
const topCards = document.getElementById("topCards");
const searchInput = document.getElementById("searchInput");
const sortButtons = document.querySelectorAll(".sort-btn");
const tabs = document.querySelectorAll(".tab");

// render top-3 cards
function renderTopCards() {
  // sort by score desc and pick top 3
  const top3 = [...filtered].sort((a, b) => b.score - a.score).slice(0, 3);
  topCards.innerHTML = "";

  // SVG icons (inline) for trophy / medals (clean, small)
  const trophySVG = `
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3h8v4a3 3 0 01-3 3H11A3 3 0 018 7V3z" fill="#C68600"/>
      <path d="M7 8a5 5 0 01-4-4v-1" stroke="#C68600" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.12"/>
      <path d="M9 17h6" stroke="#C68600" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M12 7v3" stroke="#8a5600" stroke-width="1.6" stroke-linecap="round"/>
    </svg>
  `;
  const silverMedalSVG = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="5" fill="#D9DCE1"/>
      <path d="M7 3l5 6 5-6" stroke="#9aa0a8" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  const bronzeMedalSVG = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="5" fill="#F0B27A"/>
      <path d="M7 3l5 6 5-6" stroke="#b36a2a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  // Place order: left = 2nd, center = 1st, right = 3rd (matches screenshot)
  const left = top3[1] || { name: "—", roll: "—", score: "—", accuracy: 0 };
  const center = top3[0] || { name: "—", roll: "—", score: "—", accuracy: 0 };
  const right = top3[2] || { name: "—", roll: "—", score: "—", accuracy: 0 };
  const items = [left, center, right];
  const classes = ["left", "center", "right"];

  items.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = `card ${classes[i]}`;
    // choose correct icon: center => trophy, left => silver, right => bronze
    const iconHTML =
      i === 1 ? trophySVG : i === 0 ? silverMedalSVG : bronzeMedalSVG;
    card.innerHTML = `
      <div class="medal">${iconHTML}</div>
      <div class="avatar-circle">${
        s.name && s.name !== "—" ? s.name.charAt(0) : "-"
      }</div>
      <div class="name">${s.name}</div>
      <div class="meta">${s.roll}</div>
      <div class="score">${
        typeof s.score === "number" ? s.score + "%" : s.score
      }</div>
      <div class="meta" style="margin-top:8px;color:#6b6f80">Accuracy ${
        s.accuracy
      }%</div>
    `;
    topCards.appendChild(card);
  });
}

// render table
function renderTable() {
  tableBody.innerHTML = "";
  filtered.forEach((s, idx) => {
    const tr = document.createElement("tr");
    const badgeClass =
      s.rank === 1
        ? "gold"
        : s.rank === 2
        ? "silver"
        : s.rank === 3
        ? "bronze"
        : "other";
    tr.innerHTML = `
      <td><span class="rank-badge ${badgeClass}">${s.rank}</span></td>
      <td>${s.name}</td>
      <td>${s.roll}</td>
      <td><strong>${s.score}%</strong></td>
      <td>
        <div class="acc-wrap">
          <div class="acc-bar"><div class="acc-fill" style="width:${s.accuracy}%"></div></div>
          <div style="min-width:36px">${s.accuracy}%</div>
        </div>
      </td>
      <td>${s.tests}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// apply sorting
function sortData(by) {
  currentSort = by;
  if (by === "rank") filtered.sort((a, b) => a.rank - b.rank);
  if (by === "score") filtered.sort((a, b) => b.score - a.score);
  if (by === "time") filtered.sort((a, b) => a.time - b.time);
  // reassign rank after score sort so badges and rank column match
  if (by === "score") {
    filtered.forEach((r, i) => (r.rank = i + 1));
  }
  renderTopCards();
  renderTable();
}

// filter by name
function filterByName(q) {
  const term = q.trim().toLowerCase();
  filtered = leaderboardData.filter((s) => s.name.toLowerCase().includes(term));
  sortData(currentSort);
}

// update or add new result (used for realtime)
function updateResult(newObj) {
  const i = leaderboardData.findIndex(
    (s) => s.name === newObj.name || s.roll === newObj.roll
  );
  if (i >= 0) {
    leaderboardData[i] = { ...leaderboardData[i], ...newObj };
  } else {
    leaderboardData.push({ ...newObj });
  }
  // ensure correct ranking by score
  leaderboardData.sort((a, b) => b.score - a.score);
  leaderboardData.forEach((s, idx) => (s.rank = idx + 1));
  // reapply filters/sort
  filterByName(searchInput.value || "");
}

// Setup events
searchInput.addEventListener("input", (e) => filterByName(e.target.value));
sortButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortButtons.forEach((b) => b.classList.remove("active"));
    e.currentTarget.classList.add("active");
    sortData(e.currentTarget.dataset.sort);
  });
});
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((t) => t.classList.remove("active"));
    e.currentTarget.classList.add("active");
    // placeholder: tab filtering logic can be added here; for now treat as visual
  });
});

// initial render
sortData("rank");
filterByName("");

// simulate real-time incoming updates (replace with WebSocket/API in production)
setInterval(() => {
  // small random update to simulate new score/results
  const rnd = Math.floor(Math.random() * leaderboardData.length);
  const candidate = { ...leaderboardData[rnd] };
  // random small change
  candidate.score = Math.min(
    100,
    candidate.score + Math.floor(Math.random() * 3)
  );
  candidate.accuracy = Math.min(
    100,
    candidate.accuracy + Math.floor(Math.random() * 2)
  );
  candidate.time = Math.max(30, candidate.time - Math.floor(Math.random() * 3));
  updateResult(candidate);
}, 7000);

/* --- New: cursor-based motion for top-cards (parallax + tilt) --- */
/* Apply on desktop only (pointer: fine) for usability on touch devices */
function enableTopCardsMotion() {
  const container = document.getElementById("topCards");
  if (!container) return;

  // avoid adding motion on small screens / touch devices
  if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches)
    return;

  // helper to reset transforms to base state
  function resetCardTransform(card) {
    if (card.classList.contains("center")) {
      card.style.transform = "translateY(-10px) scale(1.06)";
    } else {
      card.style.transform = "translateY(0px) scale(1)";
    }
    card.style.boxShadow = "";
  }

  let raf = null;
  container.addEventListener("mousemove", (e) => {
    // throttle with requestAnimationFrame
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const cards = Array.from(container.querySelectorAll(".card"));
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // normalized mouse position relative to card center (-1 .. 1)
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const nx = (e.clientX - cx) / rect.width; // horizontal offset
        const ny = (e.clientY - cy) / rect.height; // vertical offset

        // rotate and translate factors (subtle)
        const rotateY = nx * 8; // deg
        const rotateX = -ny * 6; // deg
        const translateX = nx * 8; // px
        const translateY = ny * 6; // px

        const isCenter = card.classList.contains("center");
        const baseScale = isCenter ? 1.06 : 1;
        // center card gets slightly larger scale on hover relative to mouse
        const scale = baseScale + Math.abs(nx) * 0.02 + Math.abs(ny) * 0.01;

        // Compose final transform (preserve base translateY for center)
        const baseTranslateY = isCenter ? -10 : 0;
        card.style.transform = `translate3d(${translateX}px, ${
          baseTranslateY + translateY
        }px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

        // dynamic shadow to enhance depth
        const shadowX = -rotateY * 1.6;
        const shadowY = Math.abs(rotateX) * 2 + (isCenter ? 12 : 6);
        card.style.boxShadow = `${shadowX}px ${shadowY}px ${Math.max(
          18,
          shadowY * 2
        )}px rgba(23,21,33,0.12)`;
      });
    });
  });

  container.addEventListener("mouseleave", () => {
    // When leaving, reset transformations smoothly
    const cards = Array.from(container.querySelectorAll(".card"));
    cards.forEach((card) => {
      card.style.transition =
        "transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s cubic-bezier(.2,.8,.2,1)";
      resetCardTransform(card);
      // remove inline transition after it finishes to allow mousemove transitions to be shorter next time
      setTimeout(() => {
        card.style.transition = "";
      }, 500);
    });
  });
}

/* ensure motion is enabled after initial rendering of top cards */
function safeInit() {
  // initial rendering already performed earlier in script
  // attach motion handlers (guard for repeated calls)
  enableTopCardsMotion();
}

/* call safeInit after DOM and first render */
document.addEventListener("DOMContentLoaded", () => {
  // existing initializations may already render — ensure we attach motion after a short delay
  setTimeout(safeInit, 80);
});
