import React from 'react'
import UploadDocument from './UploadDocument'
import './Uploader.css'

const Input = (props) => (
  <input
    type="file"
    //accept="image/*"
    //accept="text/*"
    name="img-loader-input"
    multiple
    {...props}
  />
)

const Uploader = ({ children }) => {
  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange,
  } = UploadDocument()

  return (
    
    <div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-8">
          <div className="card" style={{padding: '20px'}}>
            <form className="form" onSubmit={onSubmit}>
              <div style={{padding: '50px', paddingBottom: '50px' }}>
                <Input onChange={onChange} />
                <button type="submit">Submit</button>
              </div>
              <div>
                {files.map(({ file, src, id }, index) => (
                  <div key={`file-row${index}`}>
                    <img src={src} alt="" />
                    <div>{file.name}</div>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Uploader