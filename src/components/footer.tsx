
function Footer() {


  return (

    <>
      <footer className="text-center bg-success" style={{marginTop: "50px", width: "100%"}}>
      <div className="container pt-4">
          {/*Social Media*/}
        <section className="mb-4">
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          {/*LinkedIn*/}
          <a
            data-mdb-ripple-init
            className="btn mt-1 mx-3"
            style={{backgroundColor: "#0082ca", borderRadius: "50%", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center"}}
            href="https://www.linkedin.com/in/gustavo-pasquini-6596082a9/"
            role="button"
            target="_blank"
            ><img src="/assets/linkedin.svg"></img>
          </a>
          {/*GitHub*/}
          <a
            data-mdb-ripple-init
            className="btn mt-1 mx-3"
            style={{backgroundColor: "#333333", borderRadius: "50%", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center"}}
            href="https://github.com/Gustavo-Pasquini"
            role="button"
            target="_blank"
            ><img src="/assets/github.svg"></img>
            </a>
          </div>
        </section>
      </div>

    <div className="text-center p-3 bg-success" style={{color: "#fff"}}>
      © 2025 Copyright:
      <a style={{marginLeft: "5px", color: "#fff"}} target="_blank" href="https://www.linkedin.com/in/gustavo-pasquini-6596082a9/">Gustavo Pasquini</a>
    </div>
  </footer>
    </>

  )


}

export default Footer;