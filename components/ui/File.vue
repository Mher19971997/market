<template>
	<div id="app">
		<DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
			<label for="file-input">
				<span v-if="dropZoneActive">
				</span>
				<span v-else class="uploadPhoto">
					<img src="/image.png" alt="">
					<img src="/uploadphoto.png" alt="">
				</span>

				<input type="file" id="file-input" multiple @change="onInputChange" />
			</label>
			<ul class="image-list" v-show="files.length">
				<FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
			</ul>
		</DropZone>
		<!-- <button @click.prevent="uploadFiles(files)" class="upload-button">Upload</button> -->
	</div>
</template>

<script setup>
// Components
import DropZone from '@/components/ui/DropZone.vue'
import FilePreview from '@/components/ui/FilePreview.vue'
// File Management
import createUploader from '@/components/compositions/file-uploader'
import useFileList from '@/components/compositions/file-list'
const { files, addFiles, removeFile } = useFileList()
function onInputChange(e) {
	addFiles(e.target.files)
	e.target.value = null // reset so that selecting the same file again will still cause it to fire this change
}
// Uploader
const { uploadFiles } = createUploader('YOUR URL HERE')
</script>


<style scoped>
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 10px 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.drop-area {
	width: 100%;
	margin: 0 auto;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	transition: .2s ease;
	background: #EEEEEE;
	border-radius: 20px;
	font-weight: 500;
	border-radius: 20px;
	color: #545454;
}

#file-input {
	display: none;
}

label {
	font-size: 36px;
	cursor: pointer;
	display: block;
}

.uploadPhoto {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
}

.uploadPhoto img {
	object-fit: contain;
	padding-bottom: 15px;
}

.image-list {
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	padding: 0;
}

.upload-button {
	display: block;
	appearance: none;
	border: 0;
	border-radius: 50px;
	padding: 0.75rem 3rem;
	margin: 1rem auto;
	font-size: 1.25rem;
	font-weight: bold;
	background: #369;
	color: #fff;
	text-transform: uppercase;
}

button {
	cursor: pointer;
}</style>