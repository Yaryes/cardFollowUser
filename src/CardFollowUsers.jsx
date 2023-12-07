import { useState } from "react"

export function CardFollowUsers ( { children, userName }){
    const [isfollowing, setIsFollowing] = useState(false)
    const text = isfollowing ? 'Siguiendo'  : 'Seguir'
    const buttonclassName = isfollowing ? 'buttonFollowUser is-following' : 'buttonFollowUser'
    const handleClick = () => {
        setIsFollowing(!isfollowing)
    }
    return(
        <article className='card-tw-list'>
            <header className='header-tw-list'>
                <img 
                    className='avatar-tw-list' 
                    alt="Avatar Carlos" 
                    src={`https://unavatar.io/${userName}`} /> 
                <div className='info-tw-list'>
                    <strong>{children}</strong>
                    <span className='userName-tw-list'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonclassName} onClick={handleClick}> 
                   {text}
                </button>
            </aside>
        </article>
    )
}