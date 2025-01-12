import React from "react";

function MediaUpload() {
  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleMediaUpload} />
    </div>
  );
}

export default MediaUpload;
