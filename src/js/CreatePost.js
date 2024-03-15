import TextPost from "./TextPost";
import coordsValidator from "./coordsValidator";

export default class CreatePost {
    constructor() {
        this.textField = document.querySelector('.post_entry_field');
        this.geoForm = document.querySelector('.error_window');
        this.timeLine = document.querySelector('.timeline_container');
        this.coordsInp = document.querySelector('.coordinates_input');
        this.invalidText = document.querySelector('.invalid_text');
        // this.textPost = new TextPost();
    }

    addPost() {
        this.textField.addEventListener('keydown', e => {
            if(e.code === 'Enter' && !e.shiftKey) {
                e.preventDefault();
            }
            if(this.textField.value !== '' && e.code === 'Enter' && !e.shiftKey) {
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(data => {
                        const {latitude, longitude} = data.coords;
                        console.log(latitude, longitude);
                        this.timeLine.insertAdjacentHTML('afterbegin', new TextPost().postMark([latitude.toFixed(5), longitude.toFixed(5)]));
                    }, err => {
                        console.log(err);
                        this.geoForm.classList.remove('visible');
                        document.querySelector('.ok_btn').addEventListener('click', () => {
                            if(this.coordsInp.value !== '') {
                                const validator = coordsValidator(this.coordsInp.value);
                                if (validator) {
                                    this.timeLine.insertAdjacentHTML('afterbegin', new TextPost().postMark(this.coordsInp.value));
                                    this.coordsInp.value = '';
                                    this.geoForm.classList.add('visible');
                                    this.invalidText.classList.add('visible');
                                } else {
                                    this.invalidText.classList.remove('visible');
                                }
                            }
                        })
                        document.querySelector('.cancel_btn').addEventListener('click', () => {
                            this.coordsInp.value = '';
                            this.invalidText.classList.add('visible');
                            this.geoForm.classList.add('visible');
                        })
                    })
                }
            }
        })
    }
}