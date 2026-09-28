import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_STORE_PATH = path.join(__dirname, '../../data-store.json');

let realPrisma = null;
let useFallbackStore = false;
let fallbackAdapterInstance = null;

// Fallback in-memory/file-backed persistent store for seamless local execution
let memoryStore = {
  users: [],
  announcements: [],
  events: [],
  queries: [],
  notifications: [],
  activityLogs: [],
};

const loadStoreFromFile = () => {
  try {
    if (fs.existsSync(DB_STORE_PATH)) {
      const raw = fs.readFileSync(DB_STORE_PATH, 'utf-8');
      const parsed = JSON.parse(raw);
      memoryStore = {
        users: parsed.users || [],
        announcements: parsed.announcements || [],
        events: parsed.events || [],
        queries: parsed.queries || [],
        notifications: parsed.notifications || [],
        activityLogs: parsed.activityLogs || [],
      };
    }
  } catch (err) {
    console.error('Error loading fallback store:', err);
  }
};

const saveStoreToFile = () => {
  if (process.env.NODE_ENV === 'production') return;
  try {
    const dir = path.dirname(DB_STORE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_STORE_PATH, JSON.stringify(memoryStore, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving fallback store:', err);
  }
};

// Realistic initial seed data for immediate testing
const initializeDefaultData = async () => {
  if (memoryStore.users && memoryStore.users.length > 0) return;

  const adminPasswordHash = await bcrypt.hash('Admin@123', 10);
  const studentPasswordHash = await bcrypt.hash('Student@123', 10);

  const adminId = 'admin-user-001';
  const student1Id = 'student-user-001';
  const student2Id = 'student-user-002';
  const student3Id = 'student-user-003';

  memoryStore.users = [
    {
      id: adminId,
      name: 'Dr. Evelyn Vance',
      email: 'admin@notifyhub.edu',
      passwordHash: adminPasswordHash,
      role: 'ADMIN',
      rollNumber: null,
      department: 'Dean of Student Affairs',
      year: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: student1Id,
      name: 'Aarav Sharma',
      email: 'aarav.sharma@student.edu',
      passwordHash: studentPasswordHash,
      role: 'STUDENT',
      rollNumber: 'CS2023042',
      department: 'Computer Science & Engineering',
      year: '3rd Year',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: student2Id,
      name: 'Priya Patel',
      email: 'priya.patel@student.edu',
      passwordHash: studentPasswordHash,
      role: 'STUDENT',
      rollNumber: 'EC2023089',
      department: 'Electronics & Communication',
      year: '3rd Year',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: student3Id,
      name: 'Rohan Verma',
      email: 'rohan.verma@student.edu',
      passwordHash: studentPasswordHash,
      role: 'STUDENT',
      rollNumber: 'ME2024015',
      department: 'Mechanical Engineering',
      year: '2nd Year',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  memoryStore.announcements = [
    {
      id: 'ann-001',
      title: '🚨 URGENT: Campus Network Maintenance & Server Migration Tonight',
      description: 'The central campus IT infrastructure and Wi-Fi services will undergo critical security patching and bandwidth expansion tonight between 11:00 PM and 04:00 AM. Student portal access and campus Wi-Fi might experience intermittent connectivity.',
      category: 'General',
      priority: 'URGENT',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: null,
      attachmentSize: null,
      createdBy: adminId,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'ann-002',
      title: 'Mid-Term Examination Schedule - Autumn Semester 2026',
      description: 'The finalized timetable for the Autumn Semester Mid-Term Examinations has been published. Examinations commence on the 1st of next month. Students are requested to check their room allocations and adhere to examination hall guidelines.',
      category: 'Examination',
      priority: 'IMPORTANT',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: 'MidTerm_Schedule_Autumn2026.pdf',
      attachmentSize: 1048576,
      createdBy: adminId,
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'ann-003',
      title: 'Microsoft & Google Campus Recruitment Drive 2026-27',
      description: 'Registration is now open for Final & Pre-Final Year B.Tech and M.Tech students for the upcoming technical software engineering recruitment drive. Eligible students must upload their updated resumes before the registration deadline.',
      category: 'Placement',
      priority: 'IMPORTANT',
      status: 'PUBLISHED',
      department: 'Computer Science & Engineering',
      year: '3rd Year',
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: 'Placement_Eligibility_Criteria.pdf',
      attachmentSize: 524288,
      createdBy: adminId,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'ann-004',
      title: 'Hands-on Workshop: AI Agents and Generative Systems in Industry',
      description: 'Department of CSE in association with IEEE Student Branch is hosting a 2-day intensive weekend workshop on building autonomous AI agents and deploying scalable machine learning microservices. Certificates will be provided to all attendees.',
      category: 'Workshop',
      priority: 'NORMAL',
      status: 'PUBLISHED',
      department: 'Computer Science & Engineering',
      year: 'All',
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: 'AI_Workshop_Brochure.pdf',
      attachmentSize: 786432,
      createdBy: adminId,
      createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'ann-005',
      title: 'Annual Inter-College Cultural & Tech Symposium "INVENTO 2026"',
      description: 'Call for student committee members and event registrations! Invento 2026 brings over 40+ technical hackathons, robotics challenges, coding relays, gaming tournaments, and cultural nights. Register your teams today!',
      category: 'Event',
      priority: 'NORMAL',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: 'Invento_2026_Rulebook.pdf',
      attachmentSize: 2097152,
      createdBy: adminId,
      createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'ann-006',
      title: 'Academic Fee Payment & Scholarship Re-Verification Notice',
      description: 'Students applying for state and merit-based national scholarships are requested to verify their bank account IFSC and upload the latest fee receipt on the national portal before Friday.',
      category: 'Academic',
      priority: 'IMPORTANT',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: null,
      attachmentSize: null,
      createdBy: adminId,
      createdAt: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  memoryStore.events = [
    {
      id: 'evt-001',
      title: 'National Level 36-Hour Hackathon "HackVortex 2026"',
      description: 'A national 36-hour hackathon bringing together the brightest student developers, designers, and innovators to solve real-world problems in AI, Web3, HealthTech, and Smart Cities.',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      startTime: '09:00 AM',
      endTime: '09:00 PM',
      venue: 'Main Auditorium & Innovation Labs',
      organizer: 'NotifyHub Tech Society & ACM Chapter',
      registrationEnabled: true,
      registrationDeadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: 'HackVortex_Guidelines.pdf',
      attachmentSize: 1048576,
      createdBy: adminId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'evt-002',
      title: 'Distinguished Guest Lecture on Quantum Computing',
      description: 'Keynote lecture by Dr. S. Ramanujan from Center for Advanced Computing on recent breakthroughs in topological quantum computing and quantum algorithms.',
      date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
      startTime: '02:00 PM',
      endTime: '04:30 PM',
      venue: 'Seminar Hall 3, Science Complex',
      organizer: 'Department of Physics & CSE',
      registrationEnabled: true,
      registrationDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      attachment: null,
      attachmentName: null,
      attachmentSize: null,
      createdBy: adminId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'evt-003',
      title: 'Annual Sports League & Track Finals',
      description: 'Inter-department athletics, football, basketball, and cricket tournament finals with trophy presentation by college alumni.',
      date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
      startTime: '08:00 AM',
      endTime: '06:00 PM',
      venue: 'Central Sports Arena & University Grounds',
      organizer: 'Department of Physical Education',
      registrationEnabled: false,
      registrationDeadline: null,
      attachment: null,
      attachmentName: null,
      attachmentSize: null,
      createdBy: adminId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  memoryStore.queries = [
    {
      id: 'qry-001',
      subject: 'Correction in Elective Course Registration Portal',
      message: 'Hello Admin, I am trying to enroll in "Advanced Deep Learning" under CSE Elective IV, but the portal throws a prerequisite error for CS302 which I have already completed in semester 4. Could you please review and unlock the slot?',
      status: 'RESOLVED',
      response: 'Dear Aarav, We have verified your academic transcript and updated your prerequisites in the portal database. You can now successfully enroll in Advanced Deep Learning. Let us know if you encounter any other issues.',
      studentId: student1Id,
      respondedBy: adminId,
      createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      respondedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'qry-002',
      subject: 'Hostel Wi-Fi Connectivity and Bandwidth in Block C',
      message: 'The Wi-Fi access points on the 3rd floor of Hostel Block C are experiencing frequent disconnects during evening study hours (7 PM to 10 PM). Requesting IT department to check the router.',
      status: 'IN_PROGRESS',
      response: 'Hi Priya, The network team has scheduled an on-site inspection today at 4 PM to replace the secondary repeater in Block C.',
      studentId: student2Id,
      respondedBy: adminId,
      createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      respondedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'qry-003',
      subject: 'Query Regarding Internship No-Objection Certificate (NOC)',
      message: 'I have received a summer research internship offer from an industrial R&D lab. What is the procedure and timeline to get the Dean approval and official college NOC issued?',
      status: 'OPEN',
      response: null,
      studentId: student3Id,
      respondedBy: null,
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      respondedAt: null,
    },
  ];

  memoryStore.notifications = [
    {
      id: 'notif-001',
      title: '🚨 Urgent Notice Published',
      message: 'Campus Network Maintenance & Server Migration Tonight.',
      type: 'URGENT_ALERT',
      read: false,
      link: '/student/urgent-alerts',
      userId: student1Id,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'notif-002',
      title: 'Query Resolved',
      message: 'Administrator Evelyn Vance responded to your query: "Correction in Elective Course Registration Portal".',
      type: 'QUERY_REPLY',
      read: false,
      link: '/student/qa',
      userId: student1Id,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'notif-003',
      title: 'New Placement Drive Announced',
      message: 'Microsoft & Google Campus Recruitment Drive 2026-27 is now open for applications.',
      type: 'ANNOUNCEMENT',
      read: true,
      link: '/student/announcements',
      userId: student1Id,
      createdAt: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'notif-004',
      title: 'New Event Scheduled',
      message: 'National Level 36-Hour Hackathon "HackVortex 2026" registration is now open.',
      type: 'EVENT',
      read: false,
      link: '/student/calendar',
      userId: student1Id,
      createdAt: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    },
  ];

  memoryStore.activityLogs = [
    {
      id: 'act-001',
      action: 'ADMIN_LOGIN',
      entityType: 'Auth',
      entityId: adminId,
      details: 'Administrator Evelyn Vance logged in successfully from campus network.',
      adminId: adminId,
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'act-002',
      action: 'ANNOUNCEMENT_CREATED',
      entityType: 'Announcement',
      entityId: 'ann-001',
      details: 'Created and broadcast urgent alert: Campus Network Maintenance & Server Migration Tonight.',
      adminId: adminId,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'act-003',
      action: 'QUERY_RESPONDED',
      entityType: 'Query',
      entityId: 'qry-001',
      details: 'Responded and resolved elective registration query for student Aarav Sharma.',
      adminId: adminId,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  saveStoreToFile();
};

loadStoreFromFile();
initializeDefaultData();

// Robust Prisma query wrapper that routes to PostgreSQL or fallback seamlessly
class FallbackAdapter {
  constructor() {
    this.user = {
      findUnique: async ({ where }) => {
        loadStoreFromFile();
        if (where.email) {
          return memoryStore.users.find(u => u.email.toLowerCase() === where.email.toLowerCase()) || null;
        }
        if (where.id) {
          return memoryStore.users.find(u => u.id === where.id) || null;
        }
        if (where.rollNumber) {
          return memoryStore.users.find(u => u.rollNumber && u.rollNumber.toLowerCase() === where.rollNumber.toLowerCase()) || null;
        }
        return null;
      },
      findFirst: async ({ where = {} }) => {
        loadStoreFromFile();
        return memoryStore.users.find(u => {
          if (where.email && u.email.toLowerCase() !== where.email.toLowerCase()) return false;
          if (where.id && u.id !== where.id) return false;
          if (where.rollNumber && (!u.rollNumber || u.rollNumber.toLowerCase() !== where.rollNumber.toLowerCase())) return false;
          if (where.role && u.role !== where.role) return false;
          return true;
        }) || null;
      },
      findMany: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.users];
        if (args.where?.role) {
          list = list.filter(u => u.role === args.where.role);
        }
        return list;
      },
      count: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.users];
        if (args.where?.role) {
          list = list.filter(u => u.role === args.where.role);
        }
        return list.length;
      },
      create: async ({ data }) => {
        loadStoreFromFile();
        const newUser = {
          id: data.id || `usr-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          name: data.name,
          email: data.email,
          passwordHash: data.passwordHash,
          role: data.role || 'STUDENT',
          rollNumber: data.rollNumber || null,
          department: data.department || null,
          year: data.year || null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        memoryStore.users.push(newUser);
        saveStoreToFile();
        return newUser;
      },
      update: async ({ where, data }) => {
        loadStoreFromFile();
        const index = memoryStore.users.findIndex(u => (where.id && u.id === where.id) || (where.email && u.email.toLowerCase() === where.email.toLowerCase()));
        if (index === -1) throw new Error('User not found');
        memoryStore.users[index] = {
          ...memoryStore.users[index],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        saveStoreToFile();
        return memoryStore.users[index];
      },
    };

    this.announcement = {
      findMany: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.announcements];
        const where = args.where || {};
        if (where.status) list = list.filter(a => a.status === where.status);
        if (where.category && where.category !== 'All') list = list.filter(a => a.category.toLowerCase() === where.category.toLowerCase());
        if (where.priority && where.priority !== 'All') list = list.filter(a => a.priority === where.priority);
        if (where.department && where.department !== 'All') {
          list = list.filter(a => a.department === 'All' || a.department === where.department);
        }
        if (where.year && where.year !== 'All') {
          list = list.filter(a => a.year === 'All' || a.year === where.year);
        }
        if (args.orderBy?.createdAt === 'asc') {
          list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else {
          list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (args.take) {
          list = list.slice(0, args.take);
        }
        return list.map(a => ({
          ...a,
          author: memoryStore.users.find(u => u.id === a.createdBy) || { name: 'College Admin', email: 'admin@notifyhub.edu' },
        }));
      },
      findUnique: async ({ where }) => {
        loadStoreFromFile();
        const item = memoryStore.announcements.find(a => a.id === where.id);
        if (!item) return null;
        return {
          ...item,
          author: memoryStore.users.find(u => u.id === item.createdBy) || { name: 'College Admin', email: 'admin@notifyhub.edu' },
        };
      },
      count: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.announcements];
        const where = args.where || {};
        if (where.status) list = list.filter(a => a.status === where.status);
        if (where.priority) list = list.filter(a => a.priority === where.priority);
        return list.length;
      },
      create: async ({ data }) => {
        loadStoreFromFile();
        const newAnn = {
          id: data.id || `ann-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          title: data.title,
          description: data.description,
          category: data.category || 'General',
          priority: data.priority || 'NORMAL',
          status: data.status || 'PUBLISHED',
          department: data.department || 'All',
          year: data.year || 'All',
          deadline: data.deadline ? new Date(data.deadline).toISOString() : null,
          attachment: data.attachment || null,
          attachmentName: data.attachmentName || null,
          attachmentSize: data.attachmentSize || null,
          createdBy: data.createdBy,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        memoryStore.announcements.unshift(newAnn);
        saveStoreToFile();
        return {
          ...newAnn,
          author: memoryStore.users.find(u => u.id === newAnn.createdBy) || { name: 'College Admin', email: 'admin@notifyhub.edu' },
        };
      },
      update: async ({ where, data }) => {
        loadStoreFromFile();
        const index = memoryStore.announcements.findIndex(a => a.id === where.id);
        if (index === -1) throw new Error('Announcement not found');
        memoryStore.announcements[index] = {
          ...memoryStore.announcements[index],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        saveStoreToFile();
        return {
          ...memoryStore.announcements[index],
          author: memoryStore.users.find(u => u.id === memoryStore.announcements[index].createdBy) || { name: 'College Admin', email: 'admin@notifyhub.edu' },
        };
      },
      delete: async ({ where }) => {
        loadStoreFromFile();
        const index = memoryStore.announcements.findIndex(a => a.id === where.id);
        if (index === -1) throw new Error('Announcement not found');
        const deleted = memoryStore.announcements.splice(index, 1)[0];
        saveStoreToFile();
        return deleted;
      },
    };

    this.event = {
      findMany: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.events];
        if (args.orderBy?.date === 'asc') {
          list.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else {
          list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (args.take) {
          list = list.slice(0, args.take);
        }
        return list.map(e => ({
          ...e,
          author: memoryStore.users.find(u => u.id === e.createdBy) || { name: 'Event Coordinator' },
        }));
      },
      findUnique: async ({ where }) => {
        loadStoreFromFile();
        const item = memoryStore.events.find(e => e.id === where.id);
        if (!item) return null;
        return {
          ...item,
          author: memoryStore.users.find(u => u.id === item.createdBy) || { name: 'Event Coordinator' },
        };
      },
      count: async () => {
        loadStoreFromFile();
        return memoryStore.events.length;
      },
      create: async ({ data }) => {
        loadStoreFromFile();
        const newEvent = {
          id: data.id || `evt-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          title: data.title,
          description: data.description,
          date: new Date(data.date).toISOString(),
          startTime: data.startTime,
          endTime: data.endTime,
          venue: data.venue,
          organizer: data.organizer,
          registrationEnabled: Boolean(data.registrationEnabled),
          registrationDeadline: data.registrationDeadline ? new Date(data.registrationDeadline).toISOString() : null,
          attachment: data.attachment || null,
          attachmentName: data.attachmentName || null,
          attachmentSize: data.attachmentSize || null,
          createdBy: data.createdBy,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        memoryStore.events.unshift(newEvent);
        saveStoreToFile();
        return {
          ...newEvent,
          author: memoryStore.users.find(u => u.id === newEvent.createdBy) || { name: 'Event Coordinator' },
        };
      },
      update: async ({ where, data }) => {
        loadStoreFromFile();
        const index = memoryStore.events.findIndex(e => e.id === where.id);
        if (index === -1) throw new Error('Event not found');
        memoryStore.events[index] = {
          ...memoryStore.events[index],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        saveStoreToFile();
        return {
          ...memoryStore.events[index],
          author: memoryStore.users.find(u => u.id === memoryStore.events[index].createdBy) || { name: 'Event Coordinator' },
        };
      },
      delete: async ({ where }) => {
        loadStoreFromFile();
        const index = memoryStore.events.findIndex(e => e.id === where.id);
        if (index === -1) throw new Error('Event not found');
        const deleted = memoryStore.events.splice(index, 1)[0];
        saveStoreToFile();
        return deleted;
      },
    };

    this.query = {
      findMany: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.queries];
        const where = args.where || {};
        if (where.studentId) list = list.filter(q => q.studentId === where.studentId);
        if (where.status) list = list.filter(q => q.status === where.status);
        list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return list.map(q => ({
          ...q,
          student: memoryStore.users.find(u => u.id === q.studentId) || null,
          admin: memoryStore.users.find(u => u.id === q.respondedBy) || null,
        }));
      },
      findUnique: async ({ where }) => {
        loadStoreFromFile();
        const item = memoryStore.queries.find(q => q.id === where.id);
        if (!item) return null;
        return {
          ...item,
          student: memoryStore.users.find(u => u.id === item.studentId) || null,
          admin: memoryStore.users.find(u => u.id === item.respondedBy) || null,
        };
      },
      count: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.queries];
        const where = args.where || {};
        if (where.status) list = list.filter(q => q.status === where.status);
        if (where.studentId) list = list.filter(q => q.studentId === where.studentId);
        return list.length;
      },
      create: async ({ data }) => {
        loadStoreFromFile();
        const newQuery = {
          id: data.id || `qry-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          subject: data.subject,
          message: data.message,
          status: 'OPEN',
          response: null,
          studentId: data.studentId,
          respondedBy: null,
          respondedAt: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        memoryStore.queries.unshift(newQuery);
        saveStoreToFile();
        return {
          ...newQuery,
          student: memoryStore.users.find(u => u.id === newQuery.studentId) || null,
          admin: null,
        };
      },
      update: async ({ where, data }) => {
        loadStoreFromFile();
        const index = memoryStore.queries.findIndex(q => q.id === where.id);
        if (index === -1) throw new Error('Query not found');
        memoryStore.queries[index] = {
          ...memoryStore.queries[index],
          ...data,
          updatedAt: new Date().toISOString(),
        };
        saveStoreToFile();
        return {
          ...memoryStore.queries[index],
          student: memoryStore.users.find(u => u.id === memoryStore.queries[index].studentId) || null,
          admin: memoryStore.users.find(u => u.id === memoryStore.queries[index].respondedBy) || null,
        };
      },
      delete: async ({ where }) => {
        loadStoreFromFile();
        const index = memoryStore.queries.findIndex(q => q.id === where.id);
        if (index === -1) throw new Error('Query not found');
        const deleted = memoryStore.queries.splice(index, 1)[0];
        saveStoreToFile();
        return deleted;
      },
    };

    this.notification = {
      findMany: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.notifications];
        const where = args.where || {};
        if (where.userId) list = list.filter(n => n.userId === where.userId);
        if (where.read !== undefined) list = list.filter(n => n.read === where.read);
        list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (args.take) list = list.slice(0, args.take);
        return list;
      },
      findUnique: async ({ where }) => {
        loadStoreFromFile();
        return memoryStore.notifications.find(n => n.id === where.id) || null;
      },
      count: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.notifications];
        const where = args.where || {};
        if (where.userId) list = list.filter(n => n.userId === where.userId);
        if (where.read !== undefined) list = list.filter(n => n.read === where.read);
        return list.length;
      },
      create: async ({ data }) => {
        loadStoreFromFile();
        const newNotif = {
          id: data.id || `notif-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          title: data.title,
          message: data.message,
          type: data.type || 'ANNOUNCEMENT',
          read: data.read || false,
          link: data.link || null,
          userId: data.userId,
          createdAt: new Date().toISOString(),
        };
        memoryStore.notifications.unshift(newNotif);
        saveStoreToFile();
        return newNotif;
      },
      update: async ({ where, data }) => {
        loadStoreFromFile();
        const index = memoryStore.notifications.findIndex(n => n.id === where.id);
        if (index === -1) throw new Error('Notification not found');
        memoryStore.notifications[index] = {
          ...memoryStore.notifications[index],
          ...data,
        };
        saveStoreToFile();
        return memoryStore.notifications[index];
      },
      updateMany: async ({ where, data }) => {
        loadStoreFromFile();
        let count = 0;
        memoryStore.notifications = memoryStore.notifications.map(n => {
          if (where.userId && n.userId !== where.userId) return n;
          if (where.read !== undefined && n.read !== where.read) return n;
          count++;
          return { ...n, ...data };
        });
        saveStoreToFile();
        return { count };
      },
    };

    this.activityLog = {
      findMany: async (args = {}) => {
        loadStoreFromFile();
        let list = [...memoryStore.activityLogs];
        const where = args.where || {};
        if (where.action) list = list.filter(l => l.action.includes(where.action));
        if (where.entityType) list = list.filter(l => l.entityType === where.entityType);
        list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (args.take) list = list.slice(0, args.take);
        return list.map(l => ({
          ...l,
          admin: memoryStore.users.find(u => u.id === l.adminId) || { name: 'Administrator' },
        }));
      },
      create: async ({ data }) => {
        loadStoreFromFile();
        const newLog = {
          id: data.id || `act-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          action: data.action,
          entityType: data.entityType,
          entityId: data.entityId || null,
          details: data.details || null,
          adminId: data.adminId,
          createdAt: new Date().toISOString(),
        };
        memoryStore.activityLogs.unshift(newLog);
        saveStoreToFile();
        return newLog;
      },
      count: async () => {
        loadStoreFromFile();
        return memoryStore.activityLogs.length;
      },
    };
  }

  async $connect() {
    return true;
  }

  async $disconnect() {
    return true;
  }

  async $transaction(input) {
    if (typeof input === 'function') {
      return await input(this);
    }
    if (Array.isArray(input)) {
      return await Promise.all(input);
    }
    return input;
  }
}

fallbackAdapterInstance = new FallbackAdapter();

// Serverless-safe Prisma client instantiation with connection pooling cache
const globalForPrisma = globalThis;

try {
  realPrisma = globalForPrisma.__notifyhub_prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.__notifyhub_prisma = realPrisma;
  }
} catch (err) {
  if (process.env.NODE_ENV !== 'production') {
    useFallbackStore = true;
  } else {
    console.error('Failed to initialize PrismaClient in production:', err);
  }
}

// Background check to probe PostgreSQL in local development without blocking initial server boot
const probePostgreSql = async () => {
  if (process.env.NODE_ENV === 'production') {
    // In production, always use real Prisma connected to cloud PostgreSQL
    useFallbackStore = false;
    return;
  }

  if (!realPrisma) {
    useFallbackStore = true;
    return;
  }

  try {
    const probePromise = realPrisma.$queryRaw`SELECT 1`;
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('PostgreSQL connection timeout')), 1000)
    );
    await Promise.race([probePromise, timeoutPromise]);
    useFallbackStore = false;
    console.log('✅ PostgreSQL database connected successfully.');
  } catch (err) {
    useFallbackStore = true;
    console.log('📦 PostgreSQL server not reachable. Seamlessly activated NotifyHub JSON Storage Engine (data-store.json).');
  }
};

probePostgreSql();

// Helper to determine if an error is a database connection failure
const isConnectionError = (err) => {
  if (!err) return false;
  const msg = (err.message || '').toLowerCase();
  const code = err.code || '';
  return (
    code === 'P1001' ||
    code === 'P1002' ||
    code === 'P1003' ||
    msg.includes("can't reach database server") ||
    msg.includes('connection refused') ||
    msg.includes('econnrefused') ||
    msg.includes('prismaclientinitializationerror') ||
    msg.includes('timed out') ||
    msg.includes('timeout') ||
    msg.includes('failed to connect') ||
    msg.includes('database server is running')
  );
};

// Create a universal model proxy that delegates to real Prisma in production or FallbackAdapter in local dev
const createModelProxy = (modelName) => {
  return new Proxy({}, {
    get(target, methodName) {
      return async (...args) => {
        // In production, always use real Prisma client connected to PostgreSQL
        if (process.env.NODE_ENV === 'production') {
          if (!realPrisma) {
            throw new Error('PrismaClient is not initialized. Please ensure DATABASE_URL is set in Vercel Environment Variables.');
          }
          const realModel = realPrisma[modelName];
          if (realModel && typeof realModel[methodName] === 'function') {
            return await realModel[methodName](...args);
          }
          throw new Error(`Method ${modelName}.${methodName} does not exist on PrismaClient.`);
        }

        // Local development mode fallback logic:
        if (useFallbackStore || !realPrisma) {
          const fallbackModel = fallbackAdapterInstance[modelName];
          if (fallbackModel && typeof fallbackModel[methodName] === 'function') {
            return await fallbackModel[methodName](...args);
          }
          throw new Error(`Method ${modelName}.${methodName} not implemented in fallback store.`);
        }

        try {
          const realModel = realPrisma[modelName];
          if (realModel && typeof realModel[methodName] === 'function') {
            return await realModel[methodName](...args);
          }
        } catch (err) {
          if (isConnectionError(err)) {
            useFallbackStore = true;
            console.warn(`⚠️ PostgreSQL connection error on ${modelName}.${methodName}: ${err.message}. Switched to fallback store.`);
            const fallbackModel = fallbackAdapterInstance[modelName];
            if (fallbackModel && typeof fallbackModel[methodName] === 'function') {
              return await fallbackModel[methodName](...args);
            }
          }
          throw err;
        }
      };
    },
  });
};

// Global Prisma Proxy
const prisma = new Proxy({}, {
  get(target, prop) {
    if (prop === '$connect') {
      return async () => {
        if (process.env.NODE_ENV === 'production') {
          return realPrisma ? await realPrisma.$connect() : true;
        }
        if (useFallbackStore) return true;
        try {
          if (realPrisma) await realPrisma.$connect();
          return true;
        } catch (err) {
          useFallbackStore = true;
          return true;
        }
      };
    }
    if (prop === '$disconnect') {
      return async () => {
        if (realPrisma && (!useFallbackStore || process.env.NODE_ENV === 'production')) {
          try {
            await realPrisma.$disconnect();
          } catch (e) {}
        }
        return true;
      };
    }
    if (prop === '$transaction') {
      return async (input) => {
        if (process.env.NODE_ENV === 'production') {
          if (!realPrisma) {
            throw new Error('PrismaClient is not initialized. Please ensure DATABASE_URL is set in Vercel Environment Variables.');
          }
          return await realPrisma.$transaction(input);
        }
        if (useFallbackStore || !realPrisma) {
          return await fallbackAdapterInstance.$transaction(input);
        }
        try {
          return await realPrisma.$transaction(input);
        } catch (err) {
          if (isConnectionError(err)) {
            useFallbackStore = true;
            return await fallbackAdapterInstance.$transaction(input);
          }
          throw err;
        }
      };
    }

    // Return model proxy for known entities
    return createModelProxy(prop);
  },
});

export const getDbStatus = async () => {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    status: 'ONLINE',
    provider: isProd || !useFallbackStore ? 'PostgreSQL / Prisma Database Engine' : 'NotifyHub Persistent Storage Engine (JSON File DB)',
    connected: true,
    engine: isProd || !useFallbackStore ? 'POSTGRESQL' : 'LOCAL_DATA_STORE',
    totalUsers: await prisma.user.count(),
    totalAnnouncements: await prisma.announcement.count(),
    totalEvents: await prisma.event.count(),
    totalQueries: await prisma.query.count(),
  };
};

export { prisma, memoryStore };

