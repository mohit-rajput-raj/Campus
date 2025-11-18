'use client'
import { Button } from "@/components/ui/components";
import api from "@/lib/axios";
import React from "react";

const Files = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const onUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const form = new FormData();
    form.append("file", file);

    const res = await api.post("/process-csv-json", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    

    
  };
  const hello = async() => {
    const res =await api.get("/");
    if(res){
      console.log(res.data)
    }
  };

  return (
    <div>
      <h1>CSV Upload</h1>

      <input type="file" onChange={onFileChange} />
      <Button onClick={hello}>hello</Button>
      <button onClick={onUpload}>Upload</button>
    </div>
  );
};

export default Files;
