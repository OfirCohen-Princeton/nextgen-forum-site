const SHEET_ID = '1JNuoZrdlq2XY7dkQDZ_1yXvAbWurl6p85Z5gjJWDRNE';
const SHEET_GID = '700344847';
const COLORS = ['#1A3A6B', '#2D6A4F', '#7B2D8B', '#B03A2E', '#D35400', '#1A5276', '#196F3D', '#6E2FBF', '#0E6655', '#7D6608', '#1A6B4A', '#6B1A3A'];

let allMembers = [];
let filteredMembers = [];

async function loadMembers() {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_GID}`;
    const response = await fetch(url);
    const text = await response.text();

    // Parse Google Visualization API response
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);

    allMembers = data.table.rows.map(row => ({
      firstName: row.c[1]?.v || '',
      lastName: row.c[2]?.v || '',
      linkedin: row.c[3]?.v || '',
      photo: row.c[4]?.v || '',
      role: row.c[5]?.v || '',
      location: row.c[6]?.v || '',
      headline: row.c[8]?.v || '',
      email: row.c[12]?.v || ''
    })).filter(m => m.firstName || m.lastName);

    filteredMembers = allMembers;
    renderMembers();
    document.getElementById('loadingNote').style.display = 'none';
  } catch (error) {
    console.error('Error loading members:', error);
    document.getElementById('loadingNote').textContent = 'שגיאה בטעינת הנתונים';
  }
}

function getInitials(firstName, lastName) {
  return ((firstName ? firstName[0] : '') + (lastName ? lastName[0] : '')).toUpperCase();
}

function getColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

function normalizeSearch(text) {
  return text.toLowerCase().trim();
}

function filterMembers() {
  const query = normalizeSearch(document.getElementById('searchInput').value);

  if (!query) {
    filteredMembers = allMembers;
  } else {
    filteredMembers = allMembers.filter(member => {
      const fullName = normalizeSearch(`${member.firstName} ${member.lastName}`);
      const normalizedRole = normalizeSearch(member.role);
      const normalizedLocation = normalizeSearch(member.location);
      const normalizedFocus = normalizeSearch(member.focus);

      return fullName.includes(query) ||
             normalizedRole.includes(query) ||
             normalizedLocation.includes(query) ||
             normalizedFocus.includes(query);
    });
  }

  renderMembers();
}

function renderMembers() {
  const grid = document.getElementById('membersGrid');

  if (filteredMembers.length === 0) {
    grid.innerHTML = '<div class="no-res">לא נמצאו תוצאות</div>';
    return;
  }

  grid.innerHTML = filteredMembers.map(member => {
    const initials = getInitials(member.firstName, member.lastName);
    const color = getColor(`${member.firstName} ${member.lastName}`);
    const linkedinUrl = member.linkedin ?
      (member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`) : '';
    const avatarContent = member.photo && member.photo.trim()
      ? `<img src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.firstName)} ${escapeHtml(member.lastName)}" onerror="this.parentElement.innerHTML='${initials}'">`
      : initials;

    return `
      <div class="card">
        <div class="card-top">
          <div class="avatar" style="background: ${color}">
            ${avatarContent}
          </div>
          <div class="card-identity">
            <div class="card-name">${escapeHtml(member.firstName)} ${escapeHtml(member.lastName)}</div>
            <div class="card-role">${escapeHtml(member.role)}</div>
            ${member.location ? `<div class="card-loc">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${escapeHtml(member.location)}</span>
            </div>` : ''}
          </div>
        </div>
        <div class="card-bio">
          <div class="bio-short">${escapeHtml(member.headline || member.role)}</div>
        </div>
        <div class="card-footer">
          ${linkedinUrl ? `<a href="${linkedinUrl}" target="_blank" class="btn-li" title="LinkedIn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>` : ''}
          ${member.email ? `<button class="btn-em" onclick="copyEmail('${escapeHtml(member.email)}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            אימייל
          </button>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text || '').replace(/[&<>"']/g, m => map[m]);
}

function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    alert('אימייל הועתק: ' + email);
  });
}

// Load members on page load
document.addEventListener('DOMContentLoaded', loadMembers);
