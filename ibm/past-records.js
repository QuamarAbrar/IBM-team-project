document.addEventListener('DOMContentLoaded', () => {
    
    // Data mimicking the screenshot
    const records = [
        {
            id: 1,
            subject: "Mathematics Mid-Term Examination",
            tag: "Mathematics",
            date: "2026-01-01",
            duration: "120 mins",
            rank: "#12",
            score: 92,
            percent: "92%",
            isExpanded: true 
        },
        {
            id: 2,
            subject: "Physics Mechanics Quiz",
            tag: "Physics",
            date: "2025-12-28",
            duration: "90 mins",
            rank: "#18",
            score: 88,
            percent: "88%",
            isExpanded: false
        },
        {
            id: 3,
            subject: "Chemistry Organic Compounds Test",
            tag: "Chemistry",
            date: "2025-12-25",
            duration: "60 mins",
            rank: "#45",
            score: 76,
            percent: "76%",
            isExpanded: false
        },
        {
            id: 4,
            subject: "Biology Cell Biology Assessment",
            tag: "Biology",
            date: "2025-12-20",
            duration: "45 mins",
            rank: "#05",
            score: 94,
            percent: "94%",
            isExpanded: false
        }
    ];

    const container = document.getElementById('recordsList');

    records.forEach(record => {
        const card = document.createElement('div');
        // Add 'expanded' class if the data says so
        card.className = `record-card ${record.isExpanded ? 'expanded' : ''}`;
        
        // Define the hidden detailed HTML (Only visible if expanded)
        const detailsHTML = `
            <div class="detailed-analysis">
                <p class="section-label">Detailed Analysis</p>
                <div class="analysis-grid">
                    <div class="analysis-box">
                        <h4 class="box-title">Question Statistics</h4>
                        <div class="data-row"><span>Total Questions</span> <span>50</span></div>
                        <div class="data-row"><span>Attempted</span> <span class="text-blue">48</span></div>
                        <div class="data-row"><span>Correct</span> <span class="text-green">46</span></div>
                        <div class="data-row"><span>Incorrect</span> <span class="text-red">2</span></div>
                        <div class="data-row"><span>Unanswered</span> <span>2</span></div>
                    </div>
                    
                    <div class="analysis-box">
                        <h4 class="box-title">Performance Metrics</h4>
                        <div class="data-row"><span>Accuracy</span> <span>94%</span></div>
                        <div class="data-row"><span>Time Taken</span> <span>115 mins</span></div>
                        <div class="data-row"><span>Score</span> <span>${record.score}/100</span></div>
                        <div class="data-row"><span>Percentage</span> <span class="text-green">${record.percent}</span></div>
                        <div class="data-row"><span>Rank</span> <span>${record.rank}</span></div>
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="btn btn-primary"><i class="ri-download-line"></i> Download Report</button>
                    <button class="btn btn-outline">View Solutions</button>
                </div>
            </div>
        `;

        card.innerHTML = `
            <div class="record-header" onclick="toggleCard(this)">
                <div class="header-left">
                    <h3>${record.subject} <span class="subject-badge">${record.tag}</span></h3>
                    <div class="meta-row">
                        <span>Date: ${record.date}</span>
                        <span>Duration: ${record.duration}</span>
                        <span>Rank: ${record.rank}</span>
                    </div>
                </div>
                <div class="header-right">
                    <div class="score-display">
                        ${record.score}<span class="score-total">/100</span>
                    </div>
                    <span class="score-trend"><i class="ri-arrow-up-line"></i> ${record.percent}</span>
                </div>
            </div>
            ${detailsHTML}
        `;

        container.appendChild(card);
    });
});

// Global function to handle Accordion toggle
window.toggleCard = function(headerElement) {
    const card = headerElement.parentElement;
    
    card.classList.toggle('expanded');
};