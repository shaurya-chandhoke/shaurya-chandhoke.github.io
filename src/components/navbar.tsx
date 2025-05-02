const NavBar = () => {
    const TABS = ['Home', 'About', 'Experience', 'Education', 'Interests', 'Blog'];

    function createNavButtons() {
        return TABS.map((tab, index) => (
            <button
                key={index}
                data-id={tab}
                type='button'
                onClick={() => {
                    console.log(`Tab ${index}`)
                }}
                className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
            >
                {tab}
            </button>
        ));
    }

    return (
        <div className='flex flex-row'>
            {createNavButtons()}
        </div>
    )
};

export default NavBar;