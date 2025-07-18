// app/not-found.tsx
"use client";

import { useRouter } from 'next/navigation';
import { Button, Result } from "antd";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center min-h-screen bg-white !w-full">
            <Result
                status="warning"
                title="There are some problems with your operation."
                extra={
                    <Button type="primary" key="console" onClick={() => router.back()}>
                        Go Back
                    </Button>
                }
            />
        </div>
    );
}
