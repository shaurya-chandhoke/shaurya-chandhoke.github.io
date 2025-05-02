import {TextEffect} from "./text-effect.tsx";

const Header = () => {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="font-medium">Shaurya Chandhoke</h1>
                <TextEffect
                    per='char'
                    preset='fade'
                    speedReveal={1.1}
                    speedSegment={0.3}
                    className='text-zinc-600 dark:text-zinc-500'
                >
                    Software Engineer
                </TextEffect>
            </div>
        </header>
    )
};

export default Header;