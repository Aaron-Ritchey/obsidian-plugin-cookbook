import { IconName, Notice, Plugin } from "obsidian";

//////
// Recipe for creating an icon on the left rail (a.k.a. "Ribbon".)
//
// Quick Reading:
// - https://docs.obsidian.md/Reference/TypeScript+API/Plugin/addRibbonIcon
// - https://docs.obsidian.md/Plugins/User+interface/Icons
//

export default class RibbonExample1 extends Plugin {
  async onload() {

    // Pick an icon from this list.
    // https://lucide.dev/
    const iconId: IconName = 'laugh';

    // Just a string. Nothing special here.
    const title: string = 'Show a Joke';

    // Function to call when user clicks button.
    const callback = (evt: MouseEvent) => {

      // https://docs.obsidian.md/Reference/TypeScript+API/Notice
			new Notice('No joke for you.');

		}

    // You can optionally assign the result to a variable to call later.
		this.addRibbonIcon(iconId, title, callback);
    
  }
}
