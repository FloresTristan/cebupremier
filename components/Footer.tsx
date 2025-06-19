export default function Footer(){
    return (
        <footer className="text-sm text-white bg-gray-800 flex flex-col items-center text-center gap-2 p-4">
            <span>
                &copy; {new Date().getFullYear()} Cebu Premiere Real Estate. All rights reserved.
            </span>
            <span>
                Made by Michael Flores
            </span>
        </footer>
    );
}