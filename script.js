function initColorPicker() {
    var canvas = document.getElementById('colorCanvas');
    var canvasContext = canvas.getContext('2d');
  
    let gradient = canvas.getContext('2d').createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, '#ff0000')
    gradient.addColorStop(1 / 6, '#ffff00')
    gradient.addColorStop((1 / 6) * 2, '#00ff00')
    gradient.addColorStop((1 / 6) * 3, '#00ffff')
    gradient.addColorStop((1 / 6) * 4, '#0000ff')
    gradient.addColorStop((1 / 6) * 5, '#ff00ff')
    gradient.addColorStop(1, '#ff0000')
    canvas.getContext('2d').fillStyle = gradient
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
  
    gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    canvas.getContext('2d').fillStyle = gradient
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
  
    gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
    canvas.getContext('2d').fillStyle = gradient
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)
  
  
    canvas.onclick = function(e) {
        console.log()
        
        var imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
        var rgba = imgData.data;
        var color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
        let r = getNote(numHex(rgba[0]).charAt(1))
        let g = getNote(numHex(rgba[1]).charAt(1))
        let b = getNote(numHex(rgba[2]).charAt(1))
        let sus = getSus(numHex(rgba[0]).charAt(0))
        let vol = getVol(numHex(rgba[1]).charAt(0))
        Chord(r,g,b, sus)
        console.log(r[0] + g[0] + b[0])
        console.log("color:" + color)
    }
}
    function numHex(s){
        var a = s.toString(16);
        if ((a.length % 2) > 0) {
            a = "0" + a;
        }
        return a;
    }
    function getSus(hex){
        num = parseInt(hex, 16)
        num = num / 2
        return num
    }
    function getVol(hex){
        num = parseInt(hex, 16)
        num = num / 16
        return num
    }

    function getNote(hex){
        console.log(hex)
        switch(hex) {
            case '0':
                return ['C', 0]
            case '1':
                return ['C#', 0]
            case '2':
                return ['D', 0]
            case '3':
                return ['D#', 0]
            case '4':
                return ['E', 0]
            case '5':
                return ['F', 0]
            case '6':
                return ['F#', 0]
            case '7':
                return ['G', 0]
            case '8':
                return ['G#', 0]
            case '9':
                return ['A', 0]
            case 'a':
                return ['A#', 0]
            case 'b':
                return ['B', 0]
            case 'c':
                return ['C', 1]
            case 'd':
                return ['C#', 1]
            case 'e':
                return ['D', 1]
            case 'f':
                return ['D#', 1]

            default:
            // code block
        }
    }

    function Chord(r,g,b, sus, vol){
        let piano = Synth.createInstrument('piano')
        //Synth.setVolume(vol)
        piano.play(r[0], 2 + r[1], sus);
        piano.play(g[0], 3 + g[1], sus);
        piano.play(b[0], 4 + b[1], sus);
    }
  
  initColorPicker()