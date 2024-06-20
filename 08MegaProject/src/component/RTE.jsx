import React from "react";
import {Editor} from '@tinymce/tinymce-react';
import  {Controller} from 'react-hook-form'
<Editor />

export default function RTE({name, control, label,defaulValue=""}) {
    return ( 

        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller
            name={name || "content"}
            control={control}
            render={({field : {onChange}}) => (
                <Editor 
                   
                   initialValue={defaulValue}
                   init={{
                    initialValue:defaulValue,
                    height: 500,
                    menubar: false,
                    plugins: [
                       "image",
                       "advlist",
                       "lists",
                       "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "cose",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar: 
                        "undo redo | styleselect | fontselect | fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | link image  | blocks | image| bold italic forecolor ",
                        content_style: "body { font-family: Arial, sans-serif; font-size:14px; }"
                   }}
                   onEditorChange={onChange}
                />
            )} 
            />

        </div>
     );
}
