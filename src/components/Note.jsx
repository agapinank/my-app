//to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";

const Note =()=>{
    return(
        <div className="note">
        <h1> Title</h1>
            <p>
                This is the note content.
            </p>
        </div>
    )
}

export default Note;