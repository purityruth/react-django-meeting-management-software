import React from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Minutes() {
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-8">
                <div className="card" style={{paddingBottom: '50px', border: '1px solid white'}}>
                    <h5>Minutes</h5>

                    <CKEditor 

                        editor = { ClassicEditor }
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Minutes

















// import React from 'react'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// <Editor
//   editorState={editorState}
//   toolbarClassName="toolbarClassName"
//   wrapperClassName="wrapperClassName"
//   editorClassName="editorClassName"
//   onEditorStateChange={this.onEditorStateChange}
// />;
// function Minutes() {
//   return (
//     <div>Minutes</div>
//   )
// }

// export default Minutes