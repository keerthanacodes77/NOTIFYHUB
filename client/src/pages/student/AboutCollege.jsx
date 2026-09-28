import React from 'react';
import {
  Building2,
  GraduationCap,
  Target,
  Compass,
  MapPin,
  Phone,
  Mail,
  Award,
  BookOpen,
  Wifi,
  Coffee,
  Library,
  Cpu,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export const AboutCollege = () => {
  const departments = [
    {
      name: 'Department of Computer Science & Engineering',
      hod: 'Dr. rajavikram',
      email: 'cse.dept@notifyhub.edu',
      programs: 'B.Tech, M.Tech, Ph.D in computer science',
      labs: 'Cloud & Distributed Computing Lab, AI Innovation Center',
    },
    {
      name: 'Department of Electronics & Communication',
      hod: 'Dr. Rajesh Nair',
      email: 'ece.dept@notifyhub.edu',
      programs: 'B.Tech, M.Tech in VLSI & Embedded Systems',
      labs: 'Advanced Signal Processing Lab, IoT & Robotics Wing',
    },
    {
      name: 'Department of Mechanical Engineering',
      hod: 'Dr. Ananya Sen',
      email: 'mech.dept@notifyhub.edu',
      programs: 'B.Tech, M.Tech in Robotics & Automation',
      labs: 'Additive Manufacturing & CAD/CAM Simulation Lab',
    },
    {
      name: 'Department of Electrical & Electronics',
      hod: 'Dr. ramanujan',
      email: 'eee.dept@notifyhub.edu',
      programs: 'B.Tech in Power Systems & Renewable Energy',
      labs: 'Smart Grid Simulation Lab, Power Electronics Suite',
    },
  ];

  const facilities = [
    { icon: Library, title: 'Central Digital Library', desc: 'Over 120,000 volumes, IEEE Xplore, ACM Digital Library & 24/7 quiet study zones.' },
    { icon: Cpu, title: 'High-Performance Supercomputing Lab', desc: 'NVIDIA GPU clusters for generative AI modeling, autonomous systems & quantum simulation.' },
    { icon: Wifi, title: 'Gigabit Campus Mesh', desc: '10 Gbps fiber backbone across academic blocks, innovation centers and hostel residences.' },
    { icon: Coffee, title: 'Student Innovation Hub & Cafeteria', desc: 'Collaborative maker spaces, student society offices, amphitheater, and dining halls.' },
  ];

  const resources = [
    { title: 'Academic Regulations & Curriculum', url: '#', desc: 'Credit structure, grading policy, and elective catalogues' },
    { title: 'Anti-Ragging & Student Welfare Cell', url: '#', desc: 'Helpline: +1 (800) 555-HELP (24/7 toll-free)' },
    { title: 'Placement & Career Development Cell', url: '#', desc: 'Internship guidelines, resume templates & recruiter list' },
    { title: 'Hostel Administration & Transport', url: '#', desc: 'Hostel gate rules, mess menu and daily bus routes' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* College Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.16) 0%, rgba(6, 182, 212, 0.12) 100%)',
          border: '1px solid var(--border-highlight)',
          padding: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-gradient)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px var(--accent-primary-glow)',
            }}
          >
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
              Vignan Institute of Technology and Science
            </h1>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Autonomous Institution | NAAC 'A++' Accredited | Established 1998
            </span>
          </div>
        </div>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '920px', margin: 0 }}>
          Vignan Institute of Technology and Science is a premier institution of higher learning committed to excellence in education and research. With a vibrant community of around 2,500 students, the institution offers B.Tech programs in Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering(EEE), Electronics and Communication Engineering (ECE), Computer Science and Engineering(CSE), CSE (AI&ML), CSE(Data Science), Information Technology(IT), AI&DS, AI&ML and Electronics and Instrumentation Engineering (EIE) and M.Tech programs in CSE, AI&DS, ES, PEED        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid-2" style={{ gap: '20px' }}>
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(99, 102, 241, 0.15)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Target size={20} />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Our Vision
            </h2>
          </div>
          <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
            To be recognized globally as an institution of academic brilliance, pioneering research, and transformative engineering solutions that foster societal progress, sustainability, and technological leadership.
          </p>
        </div>

        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(6, 182, 212, 0.15)',
                color: 'var(--accent-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={20} />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Our Mission
            </h2>
          </div>
          <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
            Empower students through rigorous interdisciplinary curricula, experiential hands-on laboratory learning, ethical leadership training, and seamless digital campus services that maximize academic success.
          </p>
        </div>
      </div>

      {/* Academic Departments */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '18px', color: 'var(--text-primary)' }}>
          Academic Departments & Leadership
        </h2>
        <div className="grid-2" style={{ gap: '20px' }}>
          {departments.map((dept, i) => (
            <div key={i} className="card" style={{ background: 'var(--bg-card)', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <Building2 size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {dept.name}
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
                    HOD: <strong>{dept.hod}</strong> ({dept.email})
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <div><strong>Programs Offered:</strong> {dept.programs}</div>
                <div><strong>Specialized Labs:</strong> {dept.labs}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Facilities */}
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '18px', color: 'var(--text-primary)' }}>
          Campus Infrastructure & Facilities
        </h2>
        <div className="grid-4">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <div key={i} className="card" style={{ background: 'var(--bg-secondary)', padding: '22px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-primary-glow)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--text-primary)' }}>
                  {fac.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Resources & Contact */}
      <div className="grid-2" style={{ gap: '24px' }}>
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '26px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Student Guidelines & Resources
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {resources.map((res, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{res.title}</strong>
                  <ExternalLink size={14} color="var(--accent-primary)" />
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>{res.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '26px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Campus Contact Directory
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <MapPin size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '3px' }}>
                  VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE
                </strong>
                <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6, display: 'block' }}>
                  Deshmukhi(V), Pochampally(M),<br />
                  Yadadri-Bhuvanagiri District,<br />
                  Telangana - 508284
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Phone size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '3px' }}>
                  Campus Telephones & Helpline
                </strong>
                <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Landline: <a href="tel:08685226128" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>08685-226128</a>
                  <br />
                  Helplines: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>9866399776 / 861</span>
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Mail size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Principal & Official Administrative Emails
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <a href="mailto:principal.vgnt89@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                    principal.vgnt89@gmail.com
                  </a>
                  <a href="mailto:principal.vits@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                    principal.vits@gmail.com
                  </a>
                  <a href="mailto:principal.vgnt@vignanits.ac.in" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                    principal.vgnt@vignanits.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCollege;
