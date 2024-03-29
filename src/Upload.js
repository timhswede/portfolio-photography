import { useState } from 'react'
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';

const AWS = require('aws-sdk');

function Home() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }
  
  const [file,setFile] = useState();
  function fileChange(e){
    var file = e.target.files[0];

  const target = { Bucket:"web-photography-s3", Key:file.name, Body:file};
  const creds = {accessKeyId: "",secretAccessKey:""};
  try {
    const parallelUploads3 = new Upload({
      client: new S3Client({region:"us-west-1",credentials:creds}),
      leavePartsOnError: false, // optional manually handle dropped parts
      params: target,
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    parallelUploads3.done();
  } catch (e) {
    console.log(e);
  }

}

return (
  <div className="Home">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle} />
    <div className="title">
      <br/>
      <h1>Upload Photos</h1>
      <p>Click the button to upload a photo online to the AWS S3 bucket.</p>
    </div>
    <form>
      <label>
        <input type="file" id="file" onChange={fileChange}/>  
        <span>+ </span>
      </label>
    </form><br/>
  </div>
);
}

export default Home