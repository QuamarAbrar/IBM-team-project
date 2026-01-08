document.addEventListener('DOMContentLoaded', () => {

    // Data from Screenshot
    const testsData = [
        {
            title: "Biology Final Exam",
            tag: "Biology",
            date: "2026-01-08",
            time: "10:00 AM (120 mins)",
            marks: "100 marks",
            enrolled: "245 enrolled",
            alert: "Ensure stable internet connection",
            alertIcon: "ri-error-warning-line"
        },
        {
            title: "English Literature Test",
            tag: "English",
            date: "2026-01-10",
            time: "02:00 PM (90 mins)",
            marks: "75 marks",
            enrolled: "198 enrolled",
            alert: "Subjective questions included",
            alertIcon: "ri-information-line"
        },
        {
            title: "Computer Science Lab Assessment",
            tag: "Computer Science",
            date: "2026-01-12",
            time: "11:00 AM (60 mins)",
            marks: "50 marks",
            enrolled: "156 enrolled",
            alert: "Practical coding assessment",
            alertIcon: "ri-code-line"
        },
        {
            title: "Mathematics Advanced Calculus",
            tag: "Mathematics",
            date: "2026-01-15",
            time: "09:00 AM (150 mins)",
            marks: "100 marks",
            enrolled: "312 enrolled",
            alert: "Calculator not allowed",
            alertIcon: "ri-forbid-2-line"
        },
        {
            title: "Physics Mechanics Quiz",
            tag: "Physics",
            date: "2026-01-18",
            time: "03:00 PM (45 mins)",
            marks: "40 marks",
            enrolled: "267 enrolled",
            alert: "Formula sheet provided",
            alertIcon: "ri-file-list-line"
        }
    ];

    const container = document.getElementById('testsList');

    testsData.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';

        card.innerHTML = `
            <div class="card-top">
                <div class="title-group">
                    <h3 class="test-title">${test.title}</h3>
                    <span class="tag">${test.tag}</span>
                </div>
                <button class="view-btn">View Details</button>
            </div>
            
            <div class="meta-grid">
                <div class="meta-item">
                    <i class="ri-calendar-line"></i>
                    <span>${test.date}</span>
                </div>
                <div class="meta-item">
                    <i class="ri-time-line"></i>
                    <span>${test.time}</span>
                </div>
                <div class="meta-item">
                    <i class="ri-file-text-line"></i>
                    <span>${test.marks}</span>
                </div>
                <div class="meta-item">
                    <i class="ri-group-line"></i>
                    <span>${test.enrolled}</span>
                </div>
            </div>

            <div class="test-alert">
                <i class="${test.alertIcon}"></i>
                <span>${test.alert}</span>
            </div>
        `;

        container.appendChild(card);
    });
});