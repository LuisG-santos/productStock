import { ThemeToggle } from "./theme-toogle";

const Header = () => {
    return (
        <header className="flex min-h-[4.5rem] p-4 border-b justify-end dark:border-zinc-800 bg-white dark:bg-black">
            <ThemeToggle />
        </header>
    );
}
 
export default Header;