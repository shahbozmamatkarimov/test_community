<template>
  <div>
    <input type="file" @change="handleSubmit" />
  </div>
</template>

<script setup>
const handleSubmit = (e) => {
  const file = e.target.files[0];
  if (file) {
    console.log(file);
    const mimeType = file.type;
    readFileAsBuffer(file, mimeType);
  }
};

const readFileAsBuffer = (file, mimeType) => {
  const reader = new FileReader();

  reader.onload = () => {
    // The result property contains the file buffer
    const fileBuffer = reader.result;
    console.log(fileBuffer);

    const blob = new Blob([fileBuffer], { type: mimeType });

    // Create a Data URL from the Blob
    const dataUrl = URL.createObjectURL(blob);
    console.log(dataUrl);
  };

  reader.readAsArrayBuffer(file);
};
</script>

<style lang="scss" scoped></style>
