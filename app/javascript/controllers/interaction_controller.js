import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["button", "content"];
    static classes = ["open", "toggled"];

    dropdownToggle() {
        this.openClasses.forEach(openClass => this.contentTarget.classList.toggle(openClass));
    }

    dropdownClose() {
        this.openClasses.forEach(openClass => this.contentTarget.classList.remove(openClass));
    }

    buttonToggle() {
        this.toggledClasses.forEach(toggledClass => this.buttonTarget.classList.toggle(toggledClass))
    }
}