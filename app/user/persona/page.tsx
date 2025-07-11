'use client';

import React, {useEffect, useState} from 'react';
import PageTitle from '@/components/ui/PageTitle';
import {
    EyeOutlined,
    EditOutlined,
    SortAscendingOutlined,
    PlusCircleFilled
} from '@ant-design/icons';
import type { Persona } from '@/types/persona';
import { getPersona } from '@/app/api/user/personaService';
import { useQuery } from '@tanstack/react-query';

interface PersonaListProps {
  personaData: Persona[] | undefined;
}

const PersonaPage: React.FC = () => {
    

    let {data:personas, error, isLoading} = useQuery<Persona[]>({
        queryKey:["getPersona"],
        queryFn: () => getPersona()
    })

    if(isLoading) {
        return <p>Loading...</p>
    }
    
    if(!personas) {
        return <p></p>
    }

    return (
        <main className="flex flex-col bg-white h-full">
            <PageTitle title="PERSONA" />
            {(personas.length > 0) ? <PersonaList personaData={personas} /> : <PersonaIntro />}
        </main>
    );
};

const PersonaIntro: React.FC = () => {
    return (
        <div className="flex flex-col px-6 flex-1 justify-center items-center">
            <div
                className="w-full max-w-md text-center border-2 border-cyan-500 rounded-lg px-6 py-10 shadow-lg"
                style={{ boxShadow: '0 10px 100px 30px rgba(59, 130, 246, 0.3)' }} // red-500 with opacity
            >
                <p className="text-lg font-semibold mb-2 text-gray-800">NO PERSONA CREATED YET</p>
                <p className="text-sm text-gray-600 mb-4">Get started by creating your first AI Persona</p>

                <img
                    src="/ruccan_logo.png"
                    alt="Ruccan Logo"
                    className="mx-auto mb-6"
                    width={150}
                    height={150}
                />

                <button className="w-fit rounded text-xs px-4 py-2 bg-[#369cc1] hover:bg-[#82c7d7] cursor-pointer text-white font-bold shadow transition-all duration-200">
                    CREATE YOUR FIRST PERSONA
                </button>
            </div>
        </div>
    )
}

const PersonaList: React.FC<PersonaListProps> = ({personaData}) => {
    return (
        <div className="overflow-x-auto">
            <div className='flex px-2 py-4'>
                <button className="w-fit rounded text-xs px-4 py-2 bg-[#369cc1] hover:bg-[#82c7d7] cursor-pointer text-white font-bold shadow transition-all duration-200 ms-auto">
                <PlusCircleFilled /> Create New Persona
            </button>
            </div>
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="px-4 py-3 font-medium">
                            <div className="flex items-center gap-1">
                                Name <SortAscendingOutlined className="text-xs text-gray-400" />
                            </div>
                        </th>
                        <th className="px-4 py-3 font-medium">
                            <div className="flex items-center gap-1">
                                Role <SortAscendingOutlined className="text-xs text-gray-400" />
                            </div>
                        </th>
                        <th className="px-4 py-3 font-medium">
                            <div className="flex items-center gap-1">
                                Status <SortAscendingOutlined className="text-xs text-gray-400" />
                            </div>
                        </th>
                        <th className="px-4 py-3 font-medium text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {personaData?.map((persona) => (
                        <tr key={persona.id} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">{persona.name}</td>
                            <td className="px-4 py-3">{persona.role}</td>
                            <td className="px-4 py-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${persona.active
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-amber-600 text-white'
                                        }`}
                                >
                                    {persona.active ? 'Active' : 'Inactive'}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-center">
                                <div className="flex justify-center items-center gap-3 text-gray-600">
                                    <button
                                        className="hover:text-blue-500"
                                        aria-label="Edit"
                                        title="Edit"
                                    >
                                        <EditOutlined />
                                    </button>
                                    <button
                                        className="hover:text-green-600"
                                        aria-label="View"
                                        title="View"
                                    >
                                        <EyeOutlined />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonaPage;
