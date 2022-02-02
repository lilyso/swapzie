import React from "react";
import { Center, Button, Box } from "@chakra-ui/react";

export default function Upload() {
  const wid = React.useRef();
  const cloudName = "dwxel7sok";
  const uploadPreset = "kxwpus9q";
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      cropping: true, //add a cropping step
      multiple: false, //restrict upload to a single file
      folder: "swapzie/", //upload files to the specified folder
      tags: ["users", "post"], //add the given tags to the uploaded files
      context: { alt: "user_uploaded" }, //add the given context data to the uploaded files
      clientAllowedFormats: ["images", "jpg", "png"], //restrict uploading to image files only
      maxImageFileSize: 2000000, //restrict file size to less than 2MB
      maxImageWidth: 1000, //Scales the image down to a width of 2000 pixels before uploading
      styles: {
        palette: {
          window: "#4ecdc4",
          tabIcon: "#f7fff7",
          action: "#FFFFFF",
          menuIcons: "#1a535c",
        },
      },
    },
    (error, result) => {
      console.log("results", result);
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        return;
      }
      completeUpload(result);
    }
  );

  const completeUpload = (result) => {
    console.log("result");
  };

  const showWidget = () => {
    myWidget.open();
  };

  return (
    <Box
      mb={4}
      p={4}
      border="1px"
      borderStyle="dashed"
      borderRadius="10"
      borderColor="gray.300"
    >
      <Center>
        <Button onClick={() => showWidget()}>Upload image</Button>
      </Center>
    </Box>
  );
}
