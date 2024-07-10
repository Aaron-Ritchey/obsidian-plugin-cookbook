import { IconName, Notice, Plugin } from "obsidian";

//////
// Recipe for creating an icon on the left rail (a.k.a. "Ribbon".)
//
// Quick Reading:
// - https://docs.obsidian.md/Reference/TypeScript+API/Plugin/addRibbonIcon
// - https://docs.obsidian.md/Plugins/User+interface/Icons
//

export default class RibbonExample2 extends Plugin {
  async onload() {

    // Pick an icon from this list.
    // https://lucide.dev/
    const iconId: IconName = 'smile';

    // Just a string. Nothing special here.
    const title: string = "I'm Purple!";

    // Function to call when user clicks button.
    const callback = (evt: MouseEvent) => {

      // https://docs.obsidian.md/Reference/TypeScript+API/Notice
			new Notice('...or technically "magenta".');

		}

		const ribbonIconEl: HTMLElement = this.addRibbonIcon(iconId, title, callback);
    
    // Find styles in `styles.css`.
    //   `styles.css` is an optional file.
		ribbonIconEl.addClass('purple-smiley-face');
  }
}
