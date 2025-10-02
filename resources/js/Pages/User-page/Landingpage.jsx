
import Layout from '@/Layouts/Loginnav';

export default function Landingpage({ auth }) {
    return (
       <>
            <div>
                <h1>Welcome to UMerch!</h1>
            </div>
       </>
    );
}

Landingpage.layout = (page) => <Layout children={page} user={page.props.auth?.user} />
