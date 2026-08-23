// Comprehensive End-to-End Test Suite for NotifyHub
const BASE_URL = 'http://localhost:5000/api';

async function runTests() {
  console.log('🧪 Starting NotifyHub End-to-End Automated Test Suite...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, name) {
    if (condition) {
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${name}`);
      failed++;
    }
  }

  try {
    // 1. Health check
    console.log('1️⃣ Testing Health & System Telemetry API');
    const healthRes = await fetch(`${BASE_URL}/health`).then(r => r.json());
    assert(healthRes.success === true, 'Health check returns success: true');
    assert(healthRes.services.database.status === 'ONLINE', 'Database service is ONLINE');
    assert(healthRes.services.server.status === 'ONLINE', 'Express server is ONLINE');

    // 2. Student Authentication (Login)
    console.log('\n2️⃣ Testing Student Authentication');
    const studentLoginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'aarav.sharma@student.edu',
        password: 'Student@123',
        requiredRole: 'STUDENT',
      }),
    });
    const studentCookie = studentLoginRes.headers.get('set-cookie');
    const studentData = await studentLoginRes.json();
    assert(studentLoginRes.status === 200, 'Student login returns 200 OK');
    assert(studentData.user.role === 'STUDENT', 'User role is STUDENT');
    assert(studentData.user.email === 'aarav.sharma@student.edu', 'Student email matches');

    // 3. Admin Authentication (Login)
    console.log('\n3️⃣ Testing Administrator Authentication');
    const adminLoginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@notifyhub.edu',
        password: 'Admin@123',
        requiredRole: 'ADMIN',
      }),
    });
    const adminCookie = adminLoginRes.headers.get('set-cookie');
    const adminData = await adminLoginRes.json();
    assert(adminLoginRes.status === 200, 'Admin login returns 200 OK');
    assert(adminData.user.role === 'ADMIN', 'User role is ADMIN');
    assert(adminData.user.name === 'Dr. Evelyn Vance', 'Admin name matches');

    // 4. Announcements Retrieval & Filter
    console.log('\n4️⃣ Testing Announcements API (Public / Student View)');
    const allAnnRes = await fetch(`${BASE_URL}/announcements`, {
      headers: { Cookie: studentCookie },
    }).then(r => r.json());
    assert(allAnnRes.success === true, 'Announcements fetched successfully');
    assert(allAnnRes.announcements.length > 0, `Retrieved ${allAnnRes.announcements.length} announcements`);

    // Priority filter (URGENT)
    const urgentAnnRes = await fetch(`${BASE_URL}/announcements?priority=URGENT`, {
      headers: { Cookie: studentCookie },
    }).then(r => r.json());
    assert(urgentAnnRes.success === true, 'Urgent announcements filter works');
    assert(urgentAnnRes.announcements.every(a => a.priority === 'URGENT'), 'All returned notices have priority URGENT');

    // Category filter (Examination)
    const examAnnRes = await fetch(`${BASE_URL}/announcements?category=Examination`, {
      headers: { Cookie: studentCookie },
    }).then(r => r.json());
    assert(examAnnRes.success === true, 'Category filter works');
    assert(examAnnRes.announcements.every(a => a.category === 'Examination'), 'All returned notices have category Examination');

    // 5. Admin Create Announcement
    console.log('\n5️⃣ Testing Admin Announcement Creation');
    const createAnnRes = await fetch(`${BASE_URL}/announcements`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: adminCookie,
      },
      body: JSON.stringify({
        title: '🧪 Automated Test Announcement: IEEE Symposium 2026',
        description: 'Test circular published to verify admin broadcast channel.',
        category: 'Workshop',
        priority: 'IMPORTANT',
        status: 'PUBLISHED',
        department: 'Computer Science & Engineering',
        year: 'All',
      }),
    }).then(r => r.json());
    assert(createAnnRes.success === true, 'Admin successfully created announcement');
    assert(createAnnRes.announcement.title.includes('Automated Test'), 'Announcement title preserved');

    // 6. Events API
    console.log('\n6️⃣ Testing Events & Calendar API');
    const eventsRes = await fetch(`${BASE_URL}/events`, {
      headers: { Cookie: studentCookie },
    }).then(r => r.json());
    assert(eventsRes.success === true, 'Events fetched successfully');
    assert(eventsRes.events.length > 0, `Found ${eventsRes.events.length} campus events`);

    // Admin create event
    const createEvtRes = await fetch(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: adminCookie,
      },
      body: JSON.stringify({
        title: '🧪 AI Robotics Grand Prix 2026',
        description: 'Autonomous rover challenge and coding hackathon.',
        date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
        startTime: '10:00 AM',
        endTime: '06:00 PM',
        venue: 'Robotics Complex, Block B',
        organizer: 'Robotics Society & IEEE',
        registrationEnabled: true,
      }),
    }).then(r => r.json());
    assert(createEvtRes.success === true, 'Admin successfully scheduled new event');

    // 7. Student Q&A Workflow (Submit -> Admin Reply -> Student Notification)
    console.log('\n7️⃣ Testing Student Q&A & Ticket Workflow');
    const submitQueryRes = await fetch(`${BASE_URL}/queries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: studentCookie,
      },
      body: JSON.stringify({
        subject: 'Cap-stone Project Presentation Schedule',
        message: 'Could our team present during the morning slot on Friday?',
      }),
    }).then(r => r.json());
    assert(submitQueryRes.success === true, 'Student submitted query successfully');
    assert(submitQueryRes.query.status === 'OPEN', 'New query status is OPEN');

    const queryId = submitQueryRes.query.id;

    // Admin replies to query
    const replyQueryRes = await fetch(`${BASE_URL}/queries/${queryId}/reply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: adminCookie,
      },
      body: JSON.stringify({
        response: 'Approved! Your team is scheduled for 10:30 AM in Lab 3.',
        status: 'RESOLVED',
      }),
    }).then(r => r.json());
    assert(replyQueryRes.success === true, 'Admin successfully replied to query');
    assert(replyQueryRes.query.status === 'RESOLVED', 'Query status transitioned to RESOLVED');
    assert(replyQueryRes.query.response.includes('Approved!'), 'Response content saved');

    // 8. Notifications Verification for Student
    console.log('\n8️⃣ Testing Student Notifications Feed');
    const notifsRes = await fetch(`${BASE_URL}/notifications`, {
      headers: { Cookie: studentCookie },
    }).then(r => r.json());
    assert(notifsRes.success === true, 'Notifications retrieved');
    assert(notifsRes.notifications.length > 0, `Student has ${notifsRes.notifications.length} notifications`);

    // Verify query reply notification exists
    const hasQueryNotif = notifsRes.notifications.some(n => n.type === 'QUERY_REPLY');
    assert(hasQueryNotif === true, 'Student received automatic QUERY_REPLY notification');

    // 9. Activity Logs Verification for Admin
    console.log('\n9️⃣ Testing Activity Logs & Audit Trail');
    const logsRes = await fetch(`${BASE_URL}/activity`, {
      headers: { Cookie: adminCookie },
    }).then(r => r.json());
    assert(logsRes.success === true, 'Activity logs retrieved');
    assert(logsRes.logs.length > 0, `Found ${logsRes.logs.length} audit trail log records`);

    // 10. Student Registration
    console.log('\n🔟 Testing New Student Registration');
    const newStudentEmail = `test.student.${Date.now()}@student.edu`;
    const regRes = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Kavya Reddy',
        email: newStudentEmail,
        password: 'Password@123',
        confirmPassword: 'Password@123',
        rollNumber: `CS${Date.now().toString().slice(-6)}`,
        department: 'Computer Science & Engineering',
        year: '2nd Year',
      }),
    }).then(r => r.json());
    assert(regRes.success === true, 'New student registered successfully');
    assert(regRes.user.email === newStudentEmail, 'Registered student email matches');

    console.log(`\n=========================================`);
    console.log(`🎯 Test Summary: ${passed} PASSED, ${failed} FAILED`);
    console.log(`=========================================`);

    if (failed > 0) process.exit(1);
  } catch (error) {
    console.error('Fatal test error:', error);
    process.exit(1);
  }
}

runTests();
