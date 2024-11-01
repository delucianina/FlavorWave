function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>Copyright {date.getFullYear()}. <br></br>Designed and Developed by ...</p>
            {/* <a href="https://github.com/delucianina/" >GITHUB PROFILE LINK</a> */}
        </footer>
    )
}

export default Footer;