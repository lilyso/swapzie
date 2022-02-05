import React from "react";
import { Center, Button, Box, Image } from "@chakra-ui/react";

export default function Upload({ onChange, defaultImage = null }) {
  const cloudName = "dwxel7sok";
  const uploadPreset = "kxwpus9q";

  const showWidget = () => {
    const myWidget =
      window.cloudinary &&
      window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
          cropping: true, //add a cropping step
          multiple: false, //restrict upload to a single file
          folder: "swapzie/", //upload files to the specified folder
          tags: ["users", "post"], //add the given tags to the uploaded files
          context: { alt: "user_uploaded" }, //add the given context data to the uploaded files
          clientAllowedFormats: ["jpg", "png"], //restrict uploading to image files only
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
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            onChange(result.info.secure_url);
          }
        }
      );
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
      {defaultImage && (
        <Center>
          <Image
            borderRadius={10}
            pb={4}
            maxH="200"
            id="uploadedimage"
            src={defaultImage}
            alt="upload"
          />
        </Center>
      )}
      <Center>
        <Button onClick={() => showWidget()}>Upload image</Button>
      </Center>
    </Box>
  );
}
