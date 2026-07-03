export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-background-header text-center mt-auto py-3 flex flex-col justify-center items-center">
            <p className="text-sm text-gray-400 ">Dogs&Sabores {currentYear} - Desenvolvido por <strong>Gabriel Costa</strong> com </p>
            <div>
                <strong>TypeScript</strong>,
                <strong> React</strong> &
                <strong> Tailwind</strong>
            </div>
        </footer>
    )
}
