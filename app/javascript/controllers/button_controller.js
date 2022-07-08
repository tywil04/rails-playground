import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["button"]
    static classes = ["altstate"]

    toggle() {
        this.altstateClasses.forEach(altClass => this.buttonTarget.classList.toggle(altClass))

        // this.buttonTarget.classList.add(...this.altClasses) This method does not work with the "toggle" function
    }
}