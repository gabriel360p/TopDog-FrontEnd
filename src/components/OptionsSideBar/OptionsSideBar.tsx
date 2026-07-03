import { Link } from 'react-router-dom'

interface LiProps {
    name: string;
    pathName: string;
}

export const OptionsSideBar = ({ name, pathName }: LiProps) => {
    return (
        <li className="mb-3">
            <Link
                to={pathName}
                className="
                    block cursor-pointer rounded-lg border-none p-3
                    transition-all hover:translate-x-2
                    hover:bg-primary/10 hover:text-secundary
                "
            >
                {name}
            </Link>
        </li>
    )
}
