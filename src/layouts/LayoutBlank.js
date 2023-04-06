import { children } from "react";

const LayoutBlank = ({children}) => {
    return (
        <>
        <main className="main">
            {children}
        </main>
        </>
    )
}
export default LayoutBlank;