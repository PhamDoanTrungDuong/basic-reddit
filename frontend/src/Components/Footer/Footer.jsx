import "./footer.css"
const Footer = ({ isOpenPost, setOpenPost }) => {
     return ( 
          <>
               <footer>
                    <div className="footer-title" onClick={() => setOpenPost(!isOpenPost)}>
                         {isOpenPost ? "x" : "+"}
                    </div>
               </footer>
          </>
      );
}

export default Footer;