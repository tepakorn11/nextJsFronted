import type { IProfile, IRoadMap } from '@/interface/profile'
import { Icon } from '@iconify/react';

const mockProfile: IProfile = {
  id: 'user_001',
  name: 'Tepakorn Kumpraphat',
  username: 'tepakorn.dev',
  email: 'tepakorn@example.com',
  bio: 'Full-stack developer who loves TypeScript, Next.js, and NestJS.',
  avatar: '/images/สุดหล่อที่เธอเสียว.jpg',
  location: 'Bangkok, Thailand',
  socials: {
    github: 'https://github.com/tepakorn',
    twitter: 'https://twitter.com/tepakorn_dev',
    linkedin: 'https://linkedin.com/in/tepakorn'
  },
  joined_at: '2023-05-10T08:30:00Z'
}


const MockRoadMap: IRoadMap[] = [
  {
    year: 2022,
    title: 'เริ่มเรียนรู้สาย Tech',
    description: 'เริ่มศึกษา HTML, CSS และ JavaScript จากคอร์สออนไลน์และ YouTube',
    icon: 'mdi:school-outline',
  },
  {
    year: 2023,
    title: 'เข้าสู่โลก React',
    description: 'พัฒนาโปรเจกต์แรกด้วย React + Tailwind, เข้าใจ Git และพื้นฐาน backend',
    icon: 'mdi:react',
  },
  {
    year: 2024,
    title: 'ทำงานจริงในสาย Dev',
    description: 'เข้าทำงานสาย Web Developer, ใช้ Next.js, Node.js, และเริ่มใช้ Docker',
    icon: 'mdi:briefcase-outline',
  },
  {
    year: 2025,
    title: 'วางแผนเติบโตสาย Full-stack',
    description: 'เริ่มศึกษาเรื่อง DevOps, จัดการ Cloud, วางเป้าหมายเรียน AI และ ML ต่อไป',
    icon: 'mdi:rocket-launch-outline',
  },
];

export default { mockProfile, MockRoadMap }