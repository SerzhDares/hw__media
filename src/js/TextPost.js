export default class TextPost {
    constructor() {
        this.created = new Date().toLocaleString();
        this.description = document.querySelector('.post_entry_field').value;
    }

    postMark(coordinates) {
        return `<div class="text_post">
                    <span class="text_post_created">${this.created}</span>
                    <p class="text_post_description">${this.description}</p>
                    <span class="text_post_coordinates">[${coordinates}]</span>
                </div>`;
    }
}