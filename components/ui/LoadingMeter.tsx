import React from 'react';

type LoadingMeterProps = {
    title: string,
    progress: number,
    total: number
}

const LoadingMeter: React.FC<LoadingMeterProps> = ({ title = "Title", progress = 0, total = 0 }) => {


    const barProgress = (progress * 100) / total;

    if(progress > total) return <p className='text-red-500'>Progress is more than total</p>

    return (
        <div className="flex flex-col gap-2 w-full max-w-md mb-2">
            {/* Header Row */}
            <div className="flex flex-row justify-between text-sm font-medium text-gray-700">
                <span>{`${title}: `}</span>
                <span>{`${progress}/${total}`}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full border overflow-hidden">
                <div
                    className="h-full bg-[#b64fb1] rounded-full transition-all duration-500"
                    style={{ width: `${barProgress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingMeter;
