

export default function Hamburger({opened, setOpened}){

    return(
        <button className="button-one" 
                aria-controls="primary-navigation"
                aria-expanded={opened ? 'true' : 'false'}
                onClick={() => setOpened(!opened)}>
            <svg className="hamburger" viewBox="0 0 100 100" width="60">
                <rect className="line line-top" width="80" height="10" x="10" y="25" rx="5"></rect>
                <rect className="line line-middle" width="80" height="10" x="10" y="45" rx="5"></rect>
                <rect className="line line-bottom" width="80" height="10" x="10" y="65" rx="5"></rect>
            </svg>
        </button>
    )
}