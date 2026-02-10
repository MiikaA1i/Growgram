export default function Layouts(props){

    const {children} = props

    const header = (
        <header>
                <h1 className="text-gradient">The Growgram</h1>
                <p><strong>Tone your body. Grow your strength. Expand your limits.</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built By <a href="https://malaika.netlify.app" target="_blank">Malaika Ali</a><br/>
            Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )

    return(
        <>
            {header}
            {children}
            {footer}
        </>
    )
}