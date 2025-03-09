import Navigation from "../Navigation";

export default function ProtectedLayout({children}) {
    return (
        <div>
            <Navigation/>
            {children}
        </div>
    )
}