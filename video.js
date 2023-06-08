let facingMode =  false 
window.onload = () => {
  const button = document.getElementById('change')
  button.onclick = changeFace
  getMedia({
    audio: true,
    video: {
      facingMode: 'user'
    },
  })
}

function getMedia(constraints) {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      const video = document.getElementById('video')
      if ('srcObject' in video) {
        console.log('use video.srcObject = stream')
        video.srcObject = stream
      } else {
        console.log('use video.src = URL.createObjectURL(stream)')
        video.src = URL.createObjectURL(stream)
      }
    })
}

function changeFace() {
  facingMode = !facingMode 
  getMedia({
    audio: true,
    video: {
      facingMode: facingMode ? 'user' : { exact: "environment" },
    },
  })
}