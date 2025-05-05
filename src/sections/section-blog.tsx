import {motion} from "framer-motion";
import {ProgressiveBlurEffect} from "../components/progressive-blur-effect.tsx";
import {useState} from "react";
import {BLOG_DATA} from "../data.tsx";

const SectionBlog = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <section id="section-blog">
            <h3 className="mb-5 text-lg font-medium">Blog</h3>

            {BLOG_DATA.map((blog, index) => (
                <a href={blog.href} target="_blank" key={index}>
                    <div
                        className='relative my-4 aspect-square h-[300px] overflow-hidden rounded-[4px]'
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <img
                            src={blog.imgSrc}
                            alt={blog.imgAlt}
                            className='absolute inset-0'
                        />
                        <ProgressiveBlurEffect
                            className='pointer-events-none absolute bottom-0 left-0 h-[75%] w-full'
                            blurIntensity={0.5}
                            animate={isHover ? 'visible' : 'hidden'}
                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1},
                            }}
                            transition={{duration: 0.2, ease: 'easeOut'}}
                        />
                        <motion.div
                            className='absolute bottom-0 left-0'
                            animate={isHover ? 'visible' : 'hidden'}
                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1},
                            }}
                            transition={{duration: 0.2, ease: 'easeOut'}}
                        >
                            <div className='flex flex-col items-start gap-0 px-5 py-4'>
                                <p className='text-base font-medium text-white'>{blog.title}</p>
                                <span className='text-base text-zinc-300'>{blog.description}</span>
                            </div>
                        </motion.div>
                    </div>
                </a>
            ))}

        </section>
    )
}

export default SectionBlog;