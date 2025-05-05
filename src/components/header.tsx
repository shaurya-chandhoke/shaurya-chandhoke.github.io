import {TextEffect} from "./text-effect.tsx";
import {TextScrambleEffect} from "./text-scramble-effect.tsx";

const Header = () => {
    return (
        <header className="mb-8">
            <div className="flex items-center justify-between w-full">
                <h1 className="font-medium">Shaurya Chandhoke</h1>
                <div>
                    <a
                        href="/docs/ShauryaChandhoke_OfficialResume.pdf"
                        download
                    >
                        <TextScrambleEffect
                            className='text-zinc-600 dark:text-zinc-400 text-sm font-mono uppercase'
                            duration={2}
                        >
                            Download Resume
                        </TextScrambleEffect>
                    </a>
                </div>
            </div>
            <TextEffect
                per="char"
                preset="fade"
                speedReveal={1.1}
                speedSegment={0.3}
                className="text-zinc-600 dark:text-zinc-500"
            >
                Software Engineer
            </TextEffect>
        </header>
    );
};

export default Header;