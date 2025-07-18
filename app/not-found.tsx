// app/not-found.tsx
"use client";

import Link from "next/link";
import { Button, Result } from "antd";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white !w-full">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/user">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}
