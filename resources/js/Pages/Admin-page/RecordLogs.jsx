import Layout from "@/Layouts/AdminNav";

export default function RecordLogs() {
    return (
        <>
        {/* Record Logs Content */}
            <div className="flex flex-col justify-start">
                <div className="px-4">
                    <h1 className="text-black font-bold">RECORDS LOG</h1>
                </div>
            </div>
        </>
    );
}

RecordLogs.layout = page => <Layout>{page}</Layout>

