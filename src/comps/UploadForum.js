import React, { useState } from 'react';
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

const UploadForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState();

  const target = { Bucket:"web-photography-s3", Key:file.name, Body:file};
  const creds = {accessKeyId: "AKIA5I7IZWJMU5BDYMKE	",secretAccessKey:""};
  const types = ['image/png', 'image/jpeg'];

  const fileChange = (e) => {
    var selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
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
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <div>
      <form>
      <label class="label-upload">
        <input type="file" id="file" class="label-upload-input" onChange={fileChange}/>
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="label-upload error">{ error }</div>}
        { file && <div>{ file.name }</div> }
      </div>
    </form>
    </div>
    
  );
}

export default UploadForm;