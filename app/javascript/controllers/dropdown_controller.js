import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["content"];
    static classes = ["open"];

    toggle() {
        this.openClasses.forEach(openClass => this.contentTarget.classList.toggle(openClass));
    }

    close() {
        this.openClasses.forEach(openClass => this.contentTarget.classList.remove(openClass));
    }
}