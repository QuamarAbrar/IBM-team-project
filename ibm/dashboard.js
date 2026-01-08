document.addEventListener('DOMContentLoaded', () => {
    
    // Data Simulation
    const recentResults = [
        { subject: 'Mathematics Mid-Term', date: '2026-01-01', score: '92%', status: 'green' },
        { subject: 'Physics Quiz 3', date: '2025-12-28', score: '88%', status: 'green' },
        { subject: 'Chemistry Assignment', date: '2025-12-25', score: '76%', status: 'orange' }
    ];

    const upcomingTests = [
        { subject: 'Biology Final Exam', time: '120 mins', date: '2026-01-08', tag: 'Biology', tagClass: 'tag-bio' },
        { subject: 'English Literature Test', time: '90 mins', date: '2026-01-10', tag: 'English', tagClass: 'tag-eng' },
        { subject: 'Computer Science Lab', time: '60 mins', date: '2026-01-12', tag: 'CS', tagClass: 'tag-cs' }
    ];

    // Render Recent Results
    const resultsContainer = document.getElementById('recentResultsList');
    recentResults.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <div class="result-info">
                <h4>${item.subject}</h4>
                <p>${item.date}</p>
            </div>
            <div class="score-badge score-${item.status}">
                ${item.score}
            </div>
        `;
        resultsContainer.appendChild(div);
    });

    // Render Upcoming Tests
    const upcomingContainer = document.getElementById('upcomingTestsList');
    upcomingTests.forEach(item => {
        const div = document.createElement('div');
        div.className = 'upcoming-card';
        div.innerHTML = `
            <div class="test-meta">
                <h4>${item.subject}</h4>
                <div class="test-time">
                    <span><i class="ri-time-line"></i> ${item.time}</span>
                    <span>${item.date}</span>
                </div>
            </div>
            <div class="subject-tag ${item.tagClass}">
                ${item.tag}
            </div>
        `;
        upcomingContainer.appendChild(div);
    });
});