document.addEventListener('DOMContentLoaded', () => {
    
    // Mock Data from Screenshots
    const leaderboardData = [
        { rank: 1, name: "Sarah Johnson", roll: "CS-2023-001", score: 98, accuracy: 99, tests: 15, initial: "S", color: "indigo" },
        { rank: 2, name: "Michael Chen", roll: "CS-2023-045", score: 96, accuracy: 97, tests: 14, initial: "M", color: "purple" },
        { rank: 3, name: "Emma Davis", roll: "CS-2023-089", score: 95, accuracy: 96, tests: 15, initial: "E", color: "pink" },
        { rank: 4, name: "James Wilson", roll: "CS-2023-123", score: 94, accuracy: 95, tests: 13, initial: "J", color: "blue" },
        { rank: 5, name: "Olivia Martinez", roll: "CS-2023-156", score: 93, accuracy: 94, tests: 14, initial: "O", color: "indigo" },
        { rank: 6, name: "Student 6", roll: "CS-2023-200", score: 92, accuracy: 93, tests: 12, initial: "S", color: "purple" },
        { rank: 7, name: "Student 7", roll: "CS-2023-201", score: 91, accuracy: 92, tests: 12, initial: "S", color: "purple" },
        { rank: 8, name: "Student 8", roll: "CS-2023-202", score: 90, accuracy: 91, tests: 12, initial: "S", color: "purple" },
        { rank: 9, name: "Student 9", roll: "CS-2023-203", score: 89, accuracy: 90, tests: 12, initial: "S", color: "purple" }
    ];

    const tableBody = document.getElementById('leaderboardBody');

    leaderboardData.forEach(student => {
        const row = document.createElement('tr');
        
        // Determine Rank Icon/Text
        let rankDisplay = '';
        if (student.rank === 1) rankDisplay = `<span class="rank-icon rank-1"><i class="ri-trophy-fill"></i></span>`;
        else if (student.rank === 2) rankDisplay = `<span class="rank-icon rank-2"><i class="ri-medal-fill"></i></span>`;
        else if (student.rank === 3) rankDisplay = `<span class="rank-icon rank-3"><i class="ri-medal-fill"></i></span>`;
        else rankDisplay = `<span class="rank-cell">#${student.rank}</span>`;

        // Render Row
        row.innerHTML = `
            <td>${rankDisplay}</td>
            <td>
                <div class="student-cell">
                    <div class="table-avatar" style="background-color: var(--${student.color}-100); color: var(--${student.color}-700);">
                        ${student.initial}
                    </div>
                    <span>${student.name}</span>
                </div>
            </td>
            <td style="color: #64748b;">${student.roll}</td>
            <td class="score-cell">${student.score}%</td>
            <td>
                <div class="accuracy-wrapper">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${student.accuracy}%"></div>
                    </div>
                    <span class="accuracy-text">${student.accuracy}%</span>
                </div>
            </td>
            <td style="color: #64748b;">${student.tests}</td>
        `;

        tableBody.appendChild(row);
    });
});