function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>DESIGNED AND DEVELOPED BY: <br></br>
            Rita Aponte<br></br>
            Nina DeLucia<br></br>
            Matt Morgan<br></br>
            Adonis Zepeda</p>
            <p>Copyright {date.getFullYear()}.<br></br><br></br><br></br><br></br>
            FlavorWave Project Repository: <a href="https://github.com/delucianina/FlavorWave" target="_blank" rel="noreferrer noopener">here.</a></p>
        </footer>
    )
}

export default Footer;