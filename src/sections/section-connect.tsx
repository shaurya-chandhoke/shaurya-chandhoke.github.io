import {MagneticEffect} from "../components/magnetic-effect.tsx";
import {ArrowUpRight} from "lucide-react";
import {CONTEXT_DATA} from "../data.tsx";

const SectionConnect = () => {
    return (
        <section id='section-connect'>
            <h3 className="mb-5 text-lg font-medium">Connect</h3>
            <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                You can always connect with me at <a
                href="mailto:chandhoke.shaurya@gmail.com"><span className="underline">chandhoke.shaurya@gmail.com</span></a>
            </p>

            <div className="flex items-center justify-start space-x-5">
                <MagneticEffect intensity={0.35} range={50}>
                    <a href={CONTEXT_DATA.github}
                       target="_blank"
                       className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-4 py-2  text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                    >
                        <span>GitHub</span>
                        <span><ArrowUpRight size={15}/></span>
                    </a>
                </MagneticEffect>
                <MagneticEffect intensity={0.35} range={50}>
                    <a href={CONTEXT_DATA.linkedin}
                       target="_blank"
                       className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-4 py-2  text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                    >
                        <span>LinkedIn</span>
                        <span><ArrowUpRight size={15}/></span>
                    </a>
                </MagneticEffect>
                <MagneticEffect intensity={0.35} range={50}>
                    <a href={CONTEXT_DATA.spotify}
                       target="_blank"
                       className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-4 py-2  text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                    >
                        <span>Spotify</span>
                        <span><ArrowUpRight size={15}/></span>
                    </a>
                </MagneticEffect>
            </div>
        </section>
    )
}

export default SectionConnect;