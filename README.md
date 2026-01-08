🚀 Application Flow
Login Page (index.html)
User enters username, email, and roll number
OTP-based email verification
Successful verification enables access
Dashboard (dashboard.html)
Overview of test statistics
Quick actions
Navigation hub for all features
Feature Pages
Upcoming tests
Past records & analytics
Practice tests (with full test engine UI)
Leaderboard
Profile & settings
Help & feedback

ibm/
├── index.html          # Login & OTP verification
├── dashboard.html      # Main dashboard
├── upcoming.html       # Scheduled upcoming tests
├── past-records.html   # Past test performance & analytics
├── leaderboard.html    # Rankings & leaderboard
├── practice.html       # Practice tests + test engine
├── profile.html        # Profile & account settings
├── help.html           # Help, FAQ & feedback
│
├── login.css           # Stylesheet for index.html
├── dashboard.css       # Stylesheet for dashboard.html
├── upcoming.css        # Stylesheet for upcoming.html
├── past-records.css    # Stylesheet for past-records.html
├── leaderboard.css     # Stylesheet for leaderboard.html
├── profile.css         # Stylesheet for profile.html
├── help.css            # Stylesheet for help.html
│
├── login.js            # JavaScript logic for index.html
├── dashboard.js        # JavaScript logic for dashboard.html
├── upcoming.js         # JavaScript logic for upcoming.html
├── past-records.js     # JavaScript logic for past-records.html
├── leaderboard.js      # JavaScript logic for leaderboard.html
├── profile.js          # JavaScript logic for profile.html
└── help.js             # JavaScript logic for help.html

🧩 Page Overview

🔐 Login (index.html)
OTP-based email verification
Input validation
Secure entry point to the platform

📊 Dashboard (dashboard.html)
Welcome banner
Test statistics (completed, upcoming, scores)
Quick actions (practice, performance, live test)

📅 Upcoming Tests (upcoming.html)
List of scheduled tests
Guidelines and instructions before joining

📂 Past Records (past-records.html)
Test history
Performance summaries
Completion and scoring analytics

🏆 Leaderboard (leaderboard.html)
Podium-style top rankings
Tabular leaderboard view
Filtering by test categories

📝 Practice Tests (practice.html)
Practice test catalog
System verification (camera, mic, screen)
Full test engine:
Timer
Question palette
Navigation
Submission & result view

👤 Profile Settings (profile.html)
Personal information
Notification preferences
Security settings
Password & session management

❓ Help & Feedback (help.html)
FAQs
Support contact options
Feedback submission form
Additional learning resources

🛠️ Tech Stack
Technology	Usage
HTML5	Page structure
CSS3	Layout, responsiveness, theming
JavaScript (ES6)	UI logic, navigation, test engine
Remix Icons	Icons
Google Fonts (Inter)	Typography

▶️ How to Run Locally
Clone the repository:
git clone https://github.com/QuamarAbrar/IBM-team-project.git
Navigate to the folder:
cd IBM-team-project/ibm
Open the app:
Open index.html in any modern browser

✅ No backend or server required — this is a pure frontend application.

🎯 Learning Outcomes
This project demonstrates:
Multi-page frontend architecture
Dashboard-based UI design
Client-side authentication flow
Test engine logic with timers & navigation
Real-world academic platform UI patterns
Team collaboration using Git & GitHub

🤝 Team Project (IBM)
This project was developed as part of an IBM academic / training team project, focusing on building a realistic, production-style frontend system.

📜 License
Open-source and intended for educational and learning purposes.
