import React from "react";

function Contact() {



    return (
        <>
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col text-center text-white">
                        <hr />
                        <div><a href="mailto:zaida9000@gmail.com" className="btn-floating btn-lg btn-email text-black"
                            role="button" target="_blank" rel="noreferrer"><i className="mail"></i> zaida9000@gmail.com</a>
                        </div>
                        <hr />

                        <div><a href="https://github.com/saida179" className="btn-floating btn-lg btn-git text-black"
                            role="button" target="_blank" rel="noreferrer"><i className="github"></i> GitHub</a>
                        </div>
                        <hr />


                        <div><a href="https://www.linkedin.com/in/zaida-arevalo-123a071b3"className="btn-floating btn-lg btn-li text-black" 
                        role="button" target="_blank" rel="noreferrer"><i className="link"></i> linkedin</a>
                        </div>
                        <hr />

                    </div>
                </div>
            </div>

            <br />
            <hr />
            <br />
        </>
    )
}

export default Contact;
