import Layout from '@/Layouts/navbar';

export default function About() {

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='mt-10'>
                    <table className="table-auto bg-white border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                        <thead className='bg-[#9C0306] text-white'>
                            <tr>
                                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Song</th>
                                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Artist</th>
                                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="border border-gray-300 px-6 py-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="border border-gray-300 px-6 py-4">Malcolm Lockyer</td>
                                <td className="border border-gray-300 px-6 py-4">1961</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="border border-gray-300 px-6 py-4">Witchy Woman</td>
                                <td className="border border-gray-300 px-6 py-4">The Eagles</td>
                                <td className="border border-gray-300 px-6 py-4">1972</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="border border-gray-300 px-6 py-4">Shining Star</td>
                                <td className="border border-gray-300 px-6 py-4">Earth, Wind, and Fire</td>
                                <td className="border border-gray-300 px-6 py-4">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

About.layout = page => <Layout children={page} />
