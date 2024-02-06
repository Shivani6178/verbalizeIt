
const textarea = document.querySelector("textarea");
const speechBtn = document.querySelector("button");
const voiceList = document.querySelector("select");

let synth = speechSynthesis;

const voices = () =>{
    for (let voice of synth.getVoices()) {
        let option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend",option);

    }
}

synth.addEventListener("voiceschanged", voices);

const textToSpeech = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            speech.voice = voice;
        }
        
    }
    speechSynthesis.speak(speech)
}

speechBtn.addEventListener("click", (e) =>{
    e.preventDefault;
    if(textarea.value !== ""){
        textToSpeech(textarea.value)
    }
})