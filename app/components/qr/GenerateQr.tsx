'use client';

import { useState } from 'react';
import QRCode from 'react-qr-code';
import promptpay from 'promptpay-qr';
import { FaQrcode } from 'react-icons/fa';

export default function GenerateQr() {
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [qrValue, setQrValue] = useState('');

    const handleGenerate = () => {
        const amt = parseFloat(amount);
        if (!phone || isNaN(amt) || amt <= 0) {
            alert('กรุณากรอกเบอร์พร้อมเพย์ และจำนวนเงินที่ถูกต้อง');
            return;
        }

        try {
            const qr = promptpay(phone, { amount: amt });
            setQrValue(qr);
        } catch (err) {
            console.error(err);
            alert('ไม่สามารถสร้าง QR ได้');
        }
    };

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 10);
        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 7);
        const part3 = digits.slice(7, 10);

        if (digits.length > 6) return `${part1}-${part2}-${part3}`;
        if (digits.length > 3) return `${part1}-${part2}`;
        return part1;
    };

    const handlePhoneChange = (raw: string) => {
        const digitsOnly = raw.replace(/\D/g, '').slice(0, 10);
        setPhone(digitsOnly);
    };


    return (
        <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-base font-semibold text-gray-800 dark:text-white text-center">
                สร้าง QR พร้อมเพย์
            </h2>

            <input
                type="tel"
                placeholder="เบอร์พร้อมเพย์ (เช่น 089-1234-123)"
                value={formatPhone(phone)}
                onChange={(e) => handlePhoneChange(e.target.value)}
                maxLength={13}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
                type="number"
                placeholder="จำนวนเงิน (บาท)"
                value={amount}
                onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*\.?\d{0,2}$/.test(val)) setAmount(val);
                }}
                maxLength={10}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
                onClick={handleGenerate}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-md transition-all"
            >
                <FaQrcode className="text-base" />
                สร้าง QR
            </button>

            {qrValue && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-2">
                    <QRCode value={qrValue} size={180} />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        สแกนด้วยแอปธนาคารเพื่อชำระเงิน
                    </p>
                </div>

            )}
        </div>
    );
}
