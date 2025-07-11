'use client';

import React from 'react';
import PageTitle from '@/components/ui/PageTitle';
import {
    EyeOutlined,
    EditOutlined,
    SortAscendingOutlined,
    PlusCircleFilled
} from '@ant-design/icons';

type SourcePersonaItem = {
    id: number;
    persona_name: string;
    knowledge_source: string[];
}

const sourcePersonas: SourcePersonaItem[] = [
    {
        id: 1,
        persona_name: "Bella",
        knowledge_source: ["Refund Policy", "Pricing SOP"],
    },
    {
        id: 2,
        persona_name: "Rafiq",
        knowledge_source: ["Refund Policy", "Pricing SOP"],
    },
    {
        id: 3,
        persona_name: "Lina",
        knowledge_source: ["Response Templates", "Customer FAQ"],
    }
];

const Knowledge: React.FC = () => {
    return (
        <main className="flex flex-col bg-white h-full">
            <PageTitle title="KNOWLEDGE SOURCES" />
            {sourcePersonas.length > 0 ? <KnowledgeList /> : <EmptyKnowledgeIntro />}
        </main>
    );
};

const EmptyKnowledgeIntro: React.FC = () => {
    return (
        <div className="flex flex-col px-6 flex-1 justify-center items-center">
            <div
                className="w-full max-w-md text-center border-2 border-cyan-500 rounded-lg px-6 py-10 shadow-lg"
                style={{ boxShadow: '0 10px 100px 30px rgba(59, 130, 246, 0.3)' }}
            >
                <p className="text-lg font-semibold mb-2 text-gray-800">NO SOURCE ADDED YET</p>
                <p className="text-sm text-gray-600 mb-4">Get started by adding your first knowledge source</p>

                <img
                    src="/ruccan_logo.png"
                    alt="Ruccan Logo"
                    className="mx-auto mb-6"
                    width={150}
                    height={150}
                />

                <button className="w-fit rounded text-xs px-4 py-2 bg-[#369cc1] hover:bg-[#82c7d7] cursor-pointer text-white font-bold shadow transition-all duration-200">
                    ADD FIRST SOURCE
                </button>
            </div>
        </div>
    );
};

const KnowledgeList: React.FC = () => {
    return (
        <div className="overflow-x-auto">
            <div className="flex px-2 py-4">
                <button className="w-fit rounded text-xs px-4 py-2 bg-[#369cc1] hover:bg-[#82c7d7] cursor-pointer text-white font-bold shadow transition-all duration-200 ms-auto">
                    <PlusCircleFilled /> Add Source
                </button>
            </div>
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
                <thead>
                    <tr className="text-black">
                        <th className="px-4 py-3 font-medium border border-gray-200">
                            <div className="flex items-center gap-1 text-xs min-w-[80px]">
                                AI persona <SortAscendingOutlined className="text-xs text-gray-400" />
                            </div>
                        </th>
                        <th className="px-4 py-3 font-medium border border-gray-200">
                            <div className="flex items-center gap-1 text-xs">
                                Knowledge Sources <SortAscendingOutlined className="text-xs text-gray-400" />
                            </div>
                        </th>
                        <th className="px-4 py-3 font-medium text-center border border-gray-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sourcePersonas.map((item) => (
                        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">{item.persona_name}</td>
                            <td className="px-4 py-3">
                                {item.knowledge_source.join(', ')}
                            </td>
                            <td className="px-4 py-3 text-center">
                                <div className="flex justify-center items-center gap-3 text-gray-600">
                                    <button className="hover:text-blue-500" aria-label="Edit" title="Edit">
                                        <EditOutlined />
                                    </button>
                                    <button className="hover:text-green-600" aria-label="View" title="View">
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

export default Knowledge;
