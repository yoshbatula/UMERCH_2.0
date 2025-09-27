import {Link} from '@inertiajs/react'
export default function Layout({children}) {
    return (
        <>
            <header>
                <nav>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/about'}>About</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}