import Layout from '@/Layouts/navbar';

export default function Landingpage() {
    const name = "charisse"
    return (
        <div>
            <h1 className="text-5xl">
                {name}
            </h1>
        </div>
    );
}

Landingpage.layout = page => <Layout children={page} />