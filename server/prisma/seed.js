import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting NotifyHub PostgreSQL Database Seeding...');

  const adminPasswordHash = await bcrypt.hash('Admin@123', 10);
  const studentPasswordHash = await bcrypt.hash('Student@123', 10);

  // 1. Create Administrator
  const admin = await prisma.user.upsert({
    where: { email: 'admin@notifyhub.edu' },
    update: {},
    create: {
      name: 'Dr. Evelyn Vance',
      email: 'admin@notifyhub.edu',
      passwordHash: adminPasswordHash,
      role: 'ADMIN',
      department: 'Dean of Student Affairs',
    },
  });

  // 2. Create Sample Students
  const student1 = await prisma.user.upsert({
    where: { email: 'aarav.sharma@student.edu' },
    update: {},
    create: {
      name: 'Aarav Sharma',
      email: 'aarav.sharma@student.edu',
      passwordHash: studentPasswordHash,
      role: 'STUDENT',
      rollNumber: 'CS2023042',
      department: 'Computer Science & Engineering',
      year: '3rd Year',
    },
  });

  const student2 = await prisma.user.upsert({
    where: { email: 'priya.patel@student.edu' },
    update: {},
    create: {
      name: 'Priya Patel',
      email: 'priya.patel@student.edu',
      passwordHash: studentPasswordHash,
      role: 'STUDENT',
      rollNumber: 'EC2023089',
      department: 'Electronics & Communication',
      year: '3rd Year',
    },
  });

  const student3 = await prisma.user.upsert({
    where: { email: 'rohan.verma@student.edu' },
    update: {},
    create: {
      name: 'Rohan Verma',
      email: 'rohan.verma@student.edu',
      passwordHash: studentPasswordHash,
      role: 'STUDENT',
      rollNumber: 'ME2024015',
      department: 'Mechanical Engineering',
      year: '2nd Year',
    },
  });

  console.log('✅ Seeded Admin & Students');

  // 3. Seed Announcements
  const announcementsData = [
    {
      title: '🚨 URGENT: Campus Network Maintenance & Server Migration Tonight',
      description: 'The central campus IT infrastructure and Wi-Fi services will undergo critical security patching and bandwidth expansion tonight between 11:00 PM and 04:00 AM. Student portal access and campus Wi-Fi might experience intermittent connectivity.',
      category: 'General',
      priority: 'URGENT',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 24 * 60 * 60 * 1000),
      createdBy: admin.id,
    },
    {
      title: 'Mid-Term Examination Schedule - Autumn Semester 2026',
      description: 'The finalized timetable for the Autumn Semester Mid-Term Examinations has been published. Examinations commence on the 1st of next month. Students are requested to check their room allocations and adhere to examination hall guidelines.',
      category: 'Examination',
      priority: 'IMPORTANT',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      attachmentName: 'MidTerm_Schedule_Autumn2026.pdf',
      attachmentSize: 1048576,
      createdBy: admin.id,
    },
    {
      title: 'Microsoft & Google Campus Recruitment Drive 2026-27',
      description: 'Registration is now open for Final & Pre-Final Year B.Tech and M.Tech students for the upcoming technical software engineering recruitment drive. Eligible students must upload their updated resumes before the registration deadline.',
      category: 'Placement',
      priority: 'IMPORTANT',
      status: 'PUBLISHED',
      department: 'Computer Science & Engineering',
      year: '3rd Year',
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      attachmentName: 'Placement_Eligibility_Criteria.pdf',
      attachmentSize: 524288,
      createdBy: admin.id,
    },
    {
      title: 'Hands-on Workshop: AI Agents and Generative Systems in Industry',
      description: 'Department of CSE in association with IEEE Student Branch is hosting a 2-day intensive weekend workshop on building autonomous AI agents and deploying scalable machine learning microservices. Certificates will be provided to all attendees.',
      category: 'Workshop',
      priority: 'NORMAL',
      status: 'PUBLISHED',
      department: 'Computer Science & Engineering',
      year: 'All',
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      attachmentName: 'AI_Workshop_Brochure.pdf',
      attachmentSize: 786432,
      createdBy: admin.id,
    },
    {
      title: 'Annual Inter-College Cultural & Tech Symposium "INVENTO 2026"',
      description: 'Call for student committee members and event registrations! Invento 2026 brings over 40+ technical hackathons, robotics challenges, coding relays, gaming tournaments, and cultural nights. Register your teams today!',
      category: 'Event',
      priority: 'NORMAL',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      attachmentName: 'Invento_2026_Rulebook.pdf',
      attachmentSize: 2097152,
      createdBy: admin.id,
    },
  ];

  for (const ann of announcementsData) {
    await prisma.announcement.create({ data: ann });
  }

  // 4. Seed Events
  const eventsData = [
    {
      title: 'National Level 36-Hour Hackathon "HackVortex 2026"',
      description: 'A national 36-hour hackathon bringing together the brightest student developers, designers, and innovators to solve real-world problems in AI, Web3, HealthTech, and Smart Cities.',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      startTime: '09:00 AM',
      endTime: '09:00 PM',
      venue: 'Main Auditorium & Innovation Labs',
      organizer: 'NotifyHub Tech Society & ACM Chapter',
      registrationEnabled: true,
      registrationDeadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      createdBy: admin.id,
    },
    {
      title: 'Distinguished Guest Lecture on Quantum Computing',
      description: 'Keynote lecture by Dr. S. Ramanujan from Center for Advanced Computing on recent breakthroughs in topological quantum computing and quantum algorithms.',
      date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
      startTime: '02:00 PM',
      endTime: '04:30 PM',
      venue: 'Seminar Hall 3, Science Complex',
      organizer: 'Department of Physics & CSE',
      registrationEnabled: true,
      registrationDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      createdBy: admin.id,
    },
  ];

  for (const evt of eventsData) {
    await prisma.event.create({ data: evt });
  }

  // 5. Seed Queries
  await prisma.query.create({
    data: {
      subject: 'Correction in Elective Course Registration Portal',
      message: 'Hello Admin, I am trying to enroll in "Advanced Deep Learning" under CSE Elective IV, but the portal throws a prerequisite error for CS302 which I have already completed in semester 4. Could you please review and unlock the slot?',
      status: 'RESOLVED',
      response: 'Dear Aarav, We have verified your academic transcript and updated your prerequisites in the portal database. You can now successfully enroll in Advanced Deep Learning. Let us know if you encounter any other issues.',
      studentId: student1.id,
      respondedBy: admin.id,
      respondedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
  });

  // 6. Seed Notifications
  await prisma.notification.create({
    data: {
      title: '🚨 Urgent Notice Published',
      message: 'Campus Network Maintenance & Server Migration Tonight.',
      type: 'URGENT_ALERT',
      read: false,
      link: '/student/urgent-alerts',
      userId: student1.id,
    },
  });

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
