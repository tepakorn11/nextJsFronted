import { IShowCase } from "@/interface/showcase";
import { Icon } from '@iconify/react'

const mockShowCase: IShowCase[] = [
    {
        year: '2022',
        title: 'สร้างระบบจัดการสินค้า',
        description: 'พัฒนา backend ด้วย NestJS และฐานข้อมูล PostgreSQL สำหรับระบบ POS',
        icon: 'mdi:database',
    },
    {
        year: '2023',
        title: 'Fullstack Web Resume',
        description: 'ออกแบบและเขียน Resume Web ด้วย Next.js + Tailwind + Zustand',
        icon: 'mdi:web',
    },
    {
        year: '2024',
        title: 'Mobile App for Task Tracker',
        description: 'ใช้ React Native + Expo สร้างแอปเช็คงานในแต่ละวัน',
        icon: 'mdi:cellphone',
    },
    {
        year: '2025',
        title: 'AI Chatbot System',
        description: 'ผสาน OpenAI API เข้ากับแชทบอทเพื่อตอบคำถาม HR ในองค์กร',
        icon: 'mdi:robot',
    },



]

export default mockShowCase;