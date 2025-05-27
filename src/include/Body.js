const Body = () => {
    return(
        <>
        <div className="row">

            <div className="leftcolumn">
                <div className="card">
                    <h2>title heading</h2>
                    <h5>Title description</h5>
                    <div className="fakeimg1 h200">image</div>
                    <p>Some text...</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div className="card">
                    <h2>title heading</h2>
                    <h5>Title description</h5>
                    <div className="fakeimg2 h200">image</div>
                    <p>Some text...</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

            </div>{/*leftcolum end */}



             <div className="rightcolumn">
                <div className="card">
                    <h2>About me</h2>
                    <div className="fakeimg3 h200">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>

                <div className="card">
                    <h3>Popular Post</h3>
                    <div className="fakeimg4 h100">KMT</div><br/>
                    <div className="fakeimg5 h100">OSA</div><br/>
                    <div className="fakeimg6 h100">OSA</div>
                </div>

                <div className="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>
            </div>{/*rightcolum end */}
        </div>
        </>
    )
}
export default Body;